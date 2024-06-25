import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { useLocalSearchParams } from 'expo-router';
import { API_URL } from '@/constants';
import { useCustomHeader } from '@/hooks';
import { TemplateDataResponseInterface } from '../interfaces';
import { templateTemperatureDataAdapter } from '../adapters';

const EMPTY_DATA = {
  id: '',
  clientId: '',
  templateName: '',
  createdBy: '',
  client: '',
  clientName: '',
  author: '',
  millComponents: [
    {
      id: '',
      millName: '',
      componentName: '',
      tandemNumber: 0,
    },
  ],
};

const useTemperatureData = () => {
  const { id } = useLocalSearchParams();
  const { customHeader } = useCustomHeader();
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const { data, isError, isPending } = useQuery({
    queryKey: ['temperatureData'],
    queryFn: getTemplateById,
    enabled: !!id,
    initialData: EMPTY_DATA,
  });

  const [currentComponent, setCurrentComponent] = useState(
    data?.millComponents[currentIndex]
  );

  async function getTemplateById() {
    const { data }: AxiosResponse<TemplateDataResponseInterface> = await axios(
      `${API_URL}/templates/id/${id}`,
      customHeader
    );

    return templateTemperatureDataAdapter(data?.data);
  }

  const handleNavigation = (direction: string) => {
    if (direction === 'prev' && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setCurrentComponent(data?.millComponents[currentIndex - 1]);
    } else if (
      direction === 'next' &&
      currentIndex < data?.millComponents?.length - 1
    ) {
      setCurrentIndex(currentIndex + 1);
      setCurrentComponent(data?.millComponents[currentIndex + 1]);
    }
  };

  return { data, isError, isPending, handleNavigation, currentComponent };
};

export default useTemperatureData;
