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
  const [clientId, setClientId] = useState<string>('');
  const [clientsOptionsModal, setClientsOptionsModal] =
    useState<boolean>(false);
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

  const deleteMutation = useMutation({
    mutationFn: handleDeleteClient,
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
          clientName: newClientName.toLocaleLowerCase().trim(),
          country,
        },
        customHeader
      );

    setNewClientName('');
    Alert.alert('Éxito', 'Cliente creado correctamente');

    return data;
  }

  function onClientsOptionsModal(id: string, clientName: string) {
    setClientId(id);
    setClientName(clientName);
    setClientsOptionsModal(!clientsOptionsModal);
  }

  async function handleDeleteClient() {
    const { data }: AxiosResponse<ClientsResponseWithoutData> =
      await axios.delete(`${API_URL}/clients/${clientId}`, customHeader);

    if (data?.statusCode === 204) {
      setClientId('');
      Alert.alert('Éxito', 'Cliente eliminado correctamente');
      setClientsOptionsModal(!clientsOptionsModal);
      setClientName('');
    }

    return data;
  }

  async function handleUpdateClient(
    clientId: string,
    clientName: string,
    country: string
  ) {
    const clientUpdateBody = {
      clientName: clientName.toLowerCase().trim(),
      country,
    };

    const { data } = await axios.patch(
      `${API_URL}/clients/${clientId}`,
      clientUpdateBody,
      customHeader
    );

    if (data?.statusCode === 200) {
      Alert.alert('Éxito', 'Cliente actualizado correctamente');
      setClientsOptionsModal(!clientsOptionsModal);
      setClientName('');
    }
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
    clientsOptionsModal,
    setClientsOptionsModal,
    onClientsOptionsModal,
    deleteMutation,
  };
};

export default useClients;
