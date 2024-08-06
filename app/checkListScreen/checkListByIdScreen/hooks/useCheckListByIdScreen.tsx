import { useQuery, useMutation } from '@tanstack/react-query';
import axios, { AxiosResponse } from 'axios';
import { useLocalSearchParams, router } from 'expo-router';
import { Alert } from 'react-native';
import { CheckboxButton } from 'react-native-bouncy-checkbox-group';
import { useState } from 'react';
import { API_URL, Colors } from '@/constants';
import { useCustomHeader } from '@/hooks';
import { ErrorResponse, handleErrors } from '@/utils';
import {
  AdaptedCheckListResponse,
  AnswerMockInterface,
  CheckListResponseInterface,
  OptionsDataResponseInterface,
} from '../interfaces/checkListByIdInterfaces';
import { checkListBodyAdapter, checkListDataAdapter } from '../adapters';
import { ANSWERS_MOCK, CHECKLIST_MOCK } from '../mocks';
import { useColorScheme } from '@/hooks/useColorScheme';
import { ThemedText } from '@/components';
import { QuestionTypes } from '../../interfaces';

const useCheckListByIdScreen = () => {
  const { customHeader } = useCustomHeader();
  const { id } = useLocalSearchParams();
  const colorScheme = useColorScheme();
  const [answers, setAnswers] = useState<AnswerMockInterface[]>(ANSWERS_MOCK);

  const { data, isPending, isError } = useQuery({
    queryKey: ['formById'],
    queryFn: handleGetCheckListById,
    enabled: !!id,
    initialData: CHECKLIST_MOCK,
    refetchOnReconnect: true,
  });

  async function handleGetCheckListById(): Promise<
    AdaptedCheckListResponse[] | undefined
  > {
    try {
      const { data }: AxiosResponse<CheckListResponseInterface> = await axios(
        `${API_URL}/form/${id}`,
        customHeader
      );

      const adaptedData: AdaptedCheckListResponse[] = checkListDataAdapter(
        data?.data
      );

      return adaptedData;
    } catch (error) {
      const errorResult: ErrorResponse = handleErrors(error);

      Alert.alert(`${errorResult?.status}`, `${errorResult?.errorMessage}`);
    }
  }

  const checkBoxGroupStyles = {
    size: 25,
    fillColor: `${Colors.light.tint}`,
    unFillColor: `${Colors[colorScheme ?? 'light'].background}`,
    iconStyle: {
      borderColor: Colors.light.tint,
    },
    innerIconStyle: { borderWidth: 2 },
    style: { marginTop: 6, gap: 5 },
  };

  function createCheckBoxGroup(data: OptionsDataResponseInterface[]) {
    const checkBoxData: CheckboxButton[] = data.map((item) => ({
      id: item.id,
      text: item.optionText,
      textComponent: <ThemedText>{item.optionText}</ThemedText>,
    }));

    return checkBoxData;
  }

  /*function to add a new answer, if the questionType = 'Single option' and the questionId = answer.questionId add the new answer and remove the old answer,
  if the questionType = 'Multiple options' and the questionId = answer.questionId and isChecked = true add the new answer to the array of answers, else remove the answer from array
  if the questionType = 'Text' and the questionId = answer.questionId add the new answer to the array of answers, if the answerValue != answer.answerValue, change the item
  */
  function handleAddAnswerValue(
    answerValue: string,
    optionId: string,
    questionId: string,
    questionType: string,
    isChecked?: boolean
  ) {
    setAnswers((prevAnswers) => {
      const existingAnswerIndex = prevAnswers.findIndex(
        (answer) => answer.optionId === optionId
      );

      if (existingAnswerIndex !== -1) {
        const existingAnswer = prevAnswers[existingAnswerIndex];

        if (questionType === QuestionTypes.SINGLE) {
          if (existingAnswer.optionId !== optionId) {
            prevAnswers[existingAnswerIndex] = {
              ...existingAnswer,
              optionId,
              answerValue,
            };
          }
        } else if (questionType === QuestionTypes.MULTIPLE) {
          if (isChecked) {
            prevAnswers[existingAnswerIndex] = {
              ...existingAnswer,
              optionId,
              answerValue,
            };
          } else {
            const updatedAnswers = prevAnswers.filter(
              (answer) => answer.optionId !== optionId
            );
            return [...updatedAnswers];
          }
        } else if (questionType === QuestionTypes.TEXT) {
          if (existingAnswer.answerValue !== answerValue) {
            prevAnswers[existingAnswerIndex] = {
              ...existingAnswer,
              answerValue,
            };
          }
        }
      } else {
        prevAnswers.push({
          questionId,
          optionId,
          answerValue,
          questionType,
        });
      }

      return [...prevAnswers];
    });
  }

  async function handleRegisterAnswers() {
    const answersBody = checkListBodyAdapter(answers);

    try {
      const { data }: any = await axios.post(
        `${API_URL}/answer`,
        { answers: answersBody },
        customHeader
      );
      //console.log(data)
      resetState();
      return data;
    } catch (error) {
      const errorResult: ErrorResponse = handleErrors(error);

      Alert.alert(`${errorResult?.status}`, `${errorResult?.errorMessage}`);
    }
  }

  const mutation = useMutation({
    mutationFn: handleRegisterAnswers,
  });

  function resetState() {
    setAnswers(ANSWERS_MOCK);
  }

  return {
    data,
    isPending,
    isError,
    checkBoxGroupStyles,
    colorScheme,
    createCheckBoxGroup,
    handleAddAnswerValue,
    mutation,
  };
};

export default useCheckListByIdScreen;
