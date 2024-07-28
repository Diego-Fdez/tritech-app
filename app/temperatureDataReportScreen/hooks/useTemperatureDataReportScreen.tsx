import { useLocalSearchParams } from 'expo-router';
import { useQuery } from '@tanstack/react-query';
import axios, { AxiosResponse } from 'axios';
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
import { TemplateDataResponseInterface } from '@/app/temperatureData/interfaces';

const { width } = Dimensions.get('window');

const useTemperatureDataReportScreen = () => {
  const { id } = useLocalSearchParams();
  const { customHeader } = useCustomHeader();

  // fetch data from DB
  const { data, isPending, error } = useQuery({
    queryKey: ['temperatureDataReport'],
    queryFn: getTemperaturesByDateAndTemplateId,
    enabled: !!id,
    initialData: MockTemperaturesData,
  });

  //fetch template data from DB
  const { data: clientName } = useQuery({
    queryKey: ['temperatureDataTemplate'],
    queryFn: getTemplateById,
    enabled: !!id,
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
    } catch (error: any) {
      const errorResult: ErrorResponse = handleErrors(error);

      Alert.alert(`${errorResult?.status}`, `${errorResult?.errorMessage}`);
    }
  }

  async function getTemplateById() {
    try {
      const { data }: AxiosResponse<TemplateDataResponseInterface> =
        await axios(`${API_URL}/templates/id/${id}`, customHeader);

      return data?.data?.client?.clientName;
    } catch (error: any) {
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
    barWidth: 17,
    spacing: 16,
    disablePress: true,
    isThreeD: true,
    barBorderRadius: 8,
    activeOpacity: 0.7,
    yAxisLabelSuffix: '°C',
    showLine: true,
    lineConfig: {
      curved: true,
      hideDataPoints: true,
      shiftY: 6,
    },
  };

  return { data, isPending, error, chartProps, clientName };
};

export default useTemperatureDataReportScreen;
