import { useState } from 'react';
import { Alert } from 'react-native';
import { useQuery, useMutation } from '@tanstack/react-query';
import axios, { AxiosResponse } from 'axios';
import {
  ClientsInterface,
  ClientsResponseInterface,
  ClientsResponseWithoutData,
} from '../interfaces';
import { clientsAdapter } from '../adapters';
import { API_URL } from '@/constants';
import { useUserStore } from '@/store';

const useClients = () => {
  const accessToken = useUserStore((state) => state.accessToken);
  const user = useUserStore((state) => state.user);
  const [clientName, setClientName] = useState<string>('');
  const [clientsModal, setClientsModal] = useState<boolean>(false);
  const [newClientModal, setNewClientModal] = useState<boolean>(false);
  const [newClientName, setNewClientName] = useState<string>('');
  const [country, setCountry] = useState<string>('');
  const {
    data: clients,
    isPending,
    error,
  } = useQuery({
    queryKey: ['clients'],
    queryFn: getClients,
  });

  const {
    data: clientsByName,
    isPending: isLoading,
    error: clientsError,
  } = useQuery({
    queryKey: ['clientsByName', clientName],
    queryFn: getClientsByName,
  });

  const mutation = useMutation({
    mutationFn: handleCreateClient,
  });

  const customHeader = {
    headers: {
      bearer: `${accessToken}`,
      'Content-Type': 'application/json',
    },
  };

  async function getClients(): Promise<ClientsInterface[]> {
    const { data }: AxiosResponse<ClientsResponseInterface> = await axios(
      `${API_URL}/clients?userId=${user?.id}`,
      customHeader
    );

    return clientsAdapter(data?.data);
  }

  async function getClientsByName(): Promise<ClientsInterface[]> {
    if (clientName.length === 0) return [];

    const { data }: AxiosResponse<ClientsResponseInterface> = await axios(
      `${API_URL}/clients/${clientName}?userId=${user?.id}`,
      customHeader
    );

    return clientsAdapter(data?.data);
  }

  function onSubmitEditing() {
    if (clientName?.length > 0) {
      setClientsModal(!clientsModal);
    }
  }

  function onCloseModal() {
    setClientsModal(!clientsModal);
    setClientName('');
  }

  function onNewClientModal() {
    setNewClientModal(!newClientModal);
  }

  async function handleCreateClient() {
    const { data }: AxiosResponse<ClientsResponseWithoutData> =
      await axios.post(
        `${API_URL}/clients`,
        {
          clientName: newClientName.trim(),
          country,
        },
        customHeader
      );

    setNewClientName('');
    Alert.alert('Éxito', 'Cliente creado correctamente');

    return data;
  }

  return {
    clients,
    isPending,
    error,
    clientName,
    setClientName,
    clientsModal,
    clientsByName,
    isLoading,
    clientsError,
    onSubmitEditing,
    onCloseModal,
    onNewClientModal,
    newClientModal,
    setCountry,
    newClientName,
    setNewClientName,
    mutation,
  };
};

export default useClients;
