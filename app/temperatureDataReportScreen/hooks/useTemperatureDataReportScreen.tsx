import { useLocalSearchParams } from 'expo-router';
import { useQuery, useMutation } from '@tanstack/react-query';
import axios, { AxiosResponse, AxiosError } from 'axios';
import { Alert } from 'react-native';
import { useCustomHeader } from '@/hooks';
import { ErrorResponse, handleErrors } from '@/utils';
import { API_URL } from '@/constants';
import {
  TemperaturesDataInterface,
  TemperaturesDataResponse,
} from '../interfaces';
import {
  groupComponentsByCriteria,
  latestTemperaturesDataAdapter,
} from '../adapters';

const useTemperatureDataReportScreen = () => {
  const { id } = useLocalSearchParams();
  const { customHeader } = useCustomHeader();

  // fetch data from DB
  const { data, isPending } = useQuery({
    queryKey: ['temperatureDataReport'],
    queryFn: getTemperaturesByDateAndTemplateId,
    enabled: !!id,
  });

  async function getTemperaturesByDateAndTemplateId(): Promise<
    TemperaturesDataResponse | undefined
  > {
    const now: Date = new Date();

    try {
      const { data }: AxiosResponse<TemperaturesDataResponse> = await axios(
        `${API_URL}/temperature-data/2024-07-21 18:00:54.296537?templateId=${id}`,
        customHeader
      );

      const adaptedData: TemperaturesDataInterface[] =
        latestTemperaturesDataAdapter(data?.data);

      const groupedComponents = groupComponentsByCriteria(adaptedData);
      console.log(groupedComponents);
      return data;
    } catch (error: AxiosError | any) {
      const errorResult: ErrorResponse = handleErrors(error);

      Alert.alert(`${errorResult?.status}`, `${errorResult?.errorMessage}`);
    }
  }

  return { data, isPending };
};

export default useTemperatureDataReportScreen;
