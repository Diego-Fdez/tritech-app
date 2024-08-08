import { useQuery } from '@tanstack/react-query';
import axios, { AxiosResponse } from 'axios';
import { useLocalSearchParams, router } from 'expo-router';
import { Alert } from 'react-native';
import { useCustomHeader } from '@/hooks';
import { ErrorResponse, handleErrors } from '@/utils';
import { API_URL } from '@/constants';
import { ANSWERS_MOCK_DATA } from '../mock';
import { ResponseInterface } from '../interfaces';
import { answersByResponseIdAdapter } from '../adapters';

const useCreateCheckListPDFScreen = () => {
  const { customHeader } = useCustomHeader();
  const { id } = useLocalSearchParams();

  const { data, isPending, isError } = useQuery({
    queryKey: ['createCheckListPDF'],
    queryFn: handleFetchAnswersByResponseId,
    enabled: !!id,
    initialData: ANSWERS_MOCK_DATA,
    refetchOnReconnect: true,
  });

  async function handleFetchAnswersByResponseId() {
    try {
      const { data }: AxiosResponse<ResponseInterface> = await axios(
        `${API_URL}/responses/${id}`,
        customHeader
      );

      return answersByResponseIdAdapter(data.data);
    } catch (error) {
      const errorResult: ErrorResponse = handleErrors(error);

      Alert.alert(`${errorResult?.status}`, `${errorResult?.errorMessage}`);
    }
  }

  return { data, isPending, isError };
};

export default useCreateCheckListPDFScreen;
