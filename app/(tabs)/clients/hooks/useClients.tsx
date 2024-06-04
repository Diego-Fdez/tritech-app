import { useUserStore } from '@/store';
import { useQuery } from '@tanstack/react-query';
import axios, { AxiosResponse } from 'axios';
import { ClientsInterface, ClientsResponseInterface } from '../interfaces';
import { clientsAdapter } from '../adapters';
import { API_URL } from '@/constants';

const useClients = () => {
  const accessToken = useUserStore((state) => state.accessToken);
  const {
    data: clients,
    isPending,
    error,
  } = useQuery({
    queryKey: ['clients'],
    queryFn: getClients,
  });

  async function getClients(): Promise<ClientsInterface[]> {
    const { data }: AxiosResponse<ClientsResponseInterface> = await axios(
      `${API_URL}/clients`,
      {
        headers: {
          bearer: `${accessToken}`,
          'Content-Type': 'application/json',
        },
      }
    );

    return clientsAdapter(data?.data);
  }

  return { clients, isPending, error };
};

export default useClients;
