import { useState } from 'react';
import { Alert } from 'react-native';
import { useQuery, useMutation } from '@tanstack/react-query';
import axios, { AxiosResponse, AxiosError } from 'axios';
import {
  ClientsInterface,
  ClientsResponseInterface,
  ClientsResponseWithoutData,
} from '../interfaces';
import { clientsAdapter } from '../adapters';
import { API_URL } from '@/constants';
import { useUserStore, useClientStore } from '@/store';
import { useCustomHeader } from '@/hooks';
import { ErrorResponse, handleErrors } from '@/utils';

const useClients = () => {
  const user = useUserStore((state) => state.user);
  const setClients = useClientStore((state) => state.setClients);
  const clients = useClientStore((state) => state.clients);
  const { customHeader } = useCustomHeader();
  const [clientName, setClientName] = useState<string>('');
  const [clientsModal, setClientsModal] = useState<boolean>(false);
  const [newClientModal, setNewClientModal] = useState<boolean>(false);
  const [newClientName, setNewClientName] = useState<string>('');
  const [country, setCountry] = useState<string>('');

  // query function to get all clients
  const { isPending, error } = useQuery({
    queryKey: ['clients'],
    queryFn: getClients,
    initialData: [],
    refetchOnReconnect: true,
    enabled: clients[0]?.id?.length === 0,
  });

  // query function to get clients by name
  const {
    data: clientsByName,
    isPending: isLoading,
    error: clientsError,
  } = useQuery({
    queryKey: ['clientsByName', clientName],
    queryFn: getClientsByName,
  });

  //query function to create a new client and save into store
  const mutation = useMutation({
    mutationFn: handleCreateClient,
  });

  const deleteMutation = useMutation({
    mutationFn: handleDeleteClient,
  });

  /* function to get all clients from DB, and save into store
  @customHeader (accessToken) 
  @Params -> userId: string
  */
  async function getClients(): Promise<ClientsInterface[] | void> {
    try {
      const { data }: AxiosResponse<ClientsResponseInterface> = await axios(
        `${API_URL}/clients?userId=${user?.id}`,
        customHeader
      );

      setClients(clientsAdapter(data?.data));

      return clientsAdapter(data?.data);
    } catch (error: AxiosError | any) {
      const errorResult: ErrorResponse = handleErrors(error);

      Alert.alert(`${errorResult?.status}`, `${errorResult?.errorMessage}`);
    }
  }

  //function to get clients by name from DB
  //@customHeader (accessToken), @Params -> clientName: string; userId: string
  async function getClientsByName(): Promise<ClientsInterface[] | any> {
    if (clientName.length === 0) return [];

    try {
      const { data }: AxiosResponse<ClientsResponseInterface> = await axios(
        `${API_URL}/clients/${clientName}?userId=${user?.id}`,
        customHeader
      );

      return clientsAdapter(data?.data);
    } catch (error: AxiosError | any) {
      const errorResult: ErrorResponse = handleErrors(error);

      Alert.alert(`${errorResult?.status}`, `${errorResult?.errorMessage}`);
    }
  }

  // if clientName > 0, change state of clientsModal
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

  //function to create a new client and save into DB
  //@Body: clientName: string; country: string
  async function handleCreateClient() {
    try {
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
    } catch (error) {
      const errorResult: ErrorResponse = handleErrors(error);

      Alert.alert(`${errorResult?.status}`, `${errorResult?.errorMessage}`);
    }
  }

  //function to delete a client by ID from DB.
  async function handleDeleteClient(id: string) {
    try {
      const { data }: AxiosResponse<ClientsResponseWithoutData> =
        await axios.delete(`${API_URL}/clients/${id}`, customHeader);

      if (data?.statusCode === 204) {
        Alert.alert('Éxito', 'Cliente eliminado correctamente');
        setClientName('');
      }

      return data;
    } catch (error) {
      const errorResult: ErrorResponse = handleErrors(error);

      Alert.alert(`${errorResult?.status}`, `${errorResult?.errorMessage}`);
    }
  }

  return {
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
    deleteMutation,
    getClients,
  };
};

export default useClients;
