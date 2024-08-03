import { useState } from 'react';
import { Alert } from 'react-native';
import { Gesture } from 'react-native-gesture-handler';
import {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  runOnJS,
} from 'react-native-reanimated';
import { randomIdGenerator } from '@/utils';

const useCheckList = () => {
  const [client, setClient] = useState<object>({});
  const [questions, setQuestions] = useState([
    {
      id: randomIdGenerator(),
      text: '',
      type: 'Párrafo',
      inputs: [{ id: randomIdGenerator(), value: '' }],
    },
  ]);
  console.log(questions);
  const [type, setType] = useState<string>('Párrafo');
  const translateX = useSharedValue(0);

  const handleDelete = () => {
    Alert.alert('Eliminar', '¿Deseas eliminar esta pregunta?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ]);
    translateX.value = 0;
  };

  const panGesture = Gesture.Pan()
    .onStart((event) => {
      translateX.value = event.translationX;
    })
    .onUpdate((event) => {
      const newTranslateX = translateX.value + event.translationX;
      if (newTranslateX < 0 && newTranslateX >= -50) {
        translateX.value = newTranslateX;
      }
    })
    .onEnd(() => {
      if (translateX.value <= -40) {
        translateX.value = withSpring(-50);
        runOnJS(handleDelete)();
      } else {
        translateX.value = withSpring(0);
      }
    });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  const handleAddQuestion = () => {
    setQuestions([
      ...questions,
      {
        id: randomIdGenerator(),
        text: '',
        type: 'Párrafo',
        inputs: [{ id: randomIdGenerator(), value: '' }],
      },
    ]);
  };

  const handleAddInput = (questionId: string) => {
    setQuestions(
      questions.map((question) =>
        question.id === questionId
          ? {
              ...question,
              inputs: [
                ...question.inputs,
                { id: randomIdGenerator(), value: '' },
              ],
            }
          : question
      )
    );
  };

  const handleInputQuestionChange = (questionId: string, value: string) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((question) =>
        question.id === questionId ? { ...question, text: value } : question
      )
    );
  };

  const handleInputChange = (
    questionId: string,
    inputId: string,
    questionType: string,
    text: string
  ) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((question) =>
        question.id === questionId
          ? {
              id: question.id,
              type: questionType,
              text: question.text,
              inputs: question.inputs.map((input) =>
                input.id === inputId ? { ...input, value: text } : input
              ),
            }
          : question
      )
    );
  };

  return {
    panGesture,
    animatedStyle,
    setType,
    type,
    handleAddQuestion,
    questions,
    handleAddInput,
    handleInputChange,
    setClient,
    handleInputQuestionChange,
  };
};

export default useCheckList;
