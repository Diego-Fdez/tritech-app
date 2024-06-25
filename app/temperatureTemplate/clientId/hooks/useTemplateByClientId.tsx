import { useQuery } from '@tanstack/react-query';
import axios, { AxiosResponse } from 'axios';
import { useLocalSearchParams, router } from 'expo-router';
import { API_URL } from '@/constants';
import { useCustomHeader } from '@/hooks';
import { TemplateByClientIdInterface } from '../interfaces';
import { templateByClientIdAdapter } from '../../adapter';

const useTemplateByClientId = () => {
  const { customHeader } = useCustomHeader();
  const { id } = useLocalSearchParams();
  const { data, isPending, isError } = useQuery({
    queryKey: ['templates'],
    queryFn: () => getAllTemplatesByClientId(String(id)),
    enabled: !!id,
    initialData: [],
    refetchOnReconnect: true,
  });

  async function getAllTemplatesByClientId(clientId: string) {
    const { data }: AxiosResponse<TemplateByClientIdInterface> = await axios(
      `${API_URL}/templates/clientId/${clientId}`,
      customHeader
    );
    return templateByClientIdAdapter(data?.data);
  }

  function handleRedirect(templateId: string) {
    router.navigate(`/temperatureData/${templateId}`);
  }

  return { data, isPending, isError, handleRedirect };
};

export default useTemplateByClientId;
