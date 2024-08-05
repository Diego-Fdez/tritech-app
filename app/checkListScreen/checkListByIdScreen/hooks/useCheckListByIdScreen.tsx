import { useQuery } from '@tanstack/react-query';
import axios, { AxiosResponse } from 'axios';
import { useLocalSearchParams, router } from 'expo-router';
import { Alert } from 'react-native';
import { API_URL, Colors } from '@/constants';
import { useCustomHeader } from '@/hooks';
import { ErrorResponse, handleErrors } from '@/utils';
import {
  AdaptedCheckListResponse,
  CheckListResponseInterface,
} from '../interfaces/checkListByIdInterfaces';
import { checkListDataAdapter } from '../adapters';
import { CHECKLIST_MOCK } from '../mocks';
import { useColorScheme } from '@/hooks/useColorScheme';

const useCheckListByIdScreen = () => {
  const { customHeader } = useCustomHeader();
  const { id } = useLocalSearchParams();
  const colorScheme = useColorScheme();

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
  };

  return { data, isPending, isError, checkBoxGroupStyles, colorScheme };
};

export default useCheckListByIdScreen;
