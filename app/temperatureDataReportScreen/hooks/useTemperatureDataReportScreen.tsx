import { useLocalSearchParams } from 'expo-router';
import { useQuery, useMutation } from '@tanstack/react-query';
import axios, { AxiosResponse, AxiosError } from 'axios';
import { Alert, Dimensions } from 'react-native';
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
import { MockTemperaturesData } from '../mockData';

const useTemperatureDataReportScreen = () => {
  const { id } = useLocalSearchParams();
  const { customHeader } = useCustomHeader();
  const { width } = Dimensions.get('window');

  // fetch data from DB
  const { data, isPending, error } = useQuery({
    queryKey: ['temperatureDataReport'],
    queryFn: getTemperaturesByDateAndTemplateId,
    enabled: !!id,
    initialData: MockTemperaturesData,
  });

  async function getTemperaturesByDateAndTemplateId() {
    const now: Date = new Date();

    try {
      const { data }: AxiosResponse<TemperaturesDataResponse> = await axios(
        `${API_URL}/temperature-data/2024-07-21 18:00:54.296537?templateId=${id}`,
        customHeader
      );

      const adaptedData: TemperaturesDataInterface[] =
        latestTemperaturesDataAdapter(data?.data);

      const groupedComponents = groupComponentsByCriteria(adaptedData);

      return groupedComponents;
    } catch (error: AxiosError | any) {
      const errorResult: ErrorResponse = handleErrors(error);

      Alert.alert(`${errorResult?.status}`, `${errorResult?.errorMessage}`);
    }
  }

  const chartProps = {
    width: width,
    height: 220,
    xAxisLabelTextStyle: {
      fontSize: 10,
      height: 60,
    },
    barWidth: 20,
  };

  return { data, isPending, error, chartProps };
};

export default useTemperatureDataReportScreen;
