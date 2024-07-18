import { useState, createContext, useContext, ReactNode, useMemo } from 'react';
import axios, { AxiosResponse, AxiosError } from 'axios';
import { Alert } from 'react-native';
import { useMutation } from '@tanstack/react-query';
import { router } from 'expo-router';
import { useUserStore } from '@/store';
import { API_URL, TemplateTypesEnum } from '@/constants';
import { TemperatureTemplateResponseInterface } from '../interfaces';
import { ErrorResponse, handleErrors } from '@/utils';
import { useCustomHeader } from '@/hooks';

interface Client {
  id: string;
  clientName: string;
}

interface TemperatureTemplateContextType {
  tandemQuantity: number;
  setTandemQuantity: React.Dispatch<React.SetStateAction<number>>;
  millQuantity: number;
  setMillQuantity: React.Dispatch<React.SetStateAction<number>>;
  client: Client;
  setClient: React.Dispatch<React.SetStateAction<Client>>;
  TANDEM_ARRAY: number[];
  MILL_ARRAY: number[];
  handleCheckboxChange: (
    tandemIndex: number,
    millIndex: number,
    component: string,
    isChecked: boolean
  ) => void;
  checkboxes: Record<string, boolean>;
  mutation: any;
}

interface TemperatureTemplateProviderProps {
  children: ReactNode;
}

const TemperatureTemplateContext = createContext<
  TemperatureTemplateContextType | undefined
>(undefined);

const TemperatureTemplateProvider = ({
  children,
}: TemperatureTemplateProviderProps) => {
  const { customHeader } = useCustomHeader();
  const user = useUserStore((state) => state.user);
  const [tandemQuantity, setTandemQuantity] = useState<number>(0);
  const [millQuantity, setMillQuantity] = useState<number>(0);
  const [client, setClient] = useState<Client>({ id: '', clientName: '' });
  const [checkboxes, setCheckboxes] = useState<Record<string, boolean>>({});

  const mutation = useMutation({
    mutationFn: handleCreateTemplate,
  });

  const TANDEM_ARRAY = useMemo(
    () => Array.from({ length: tandemQuantity }, (_, index) => index + 1),
    [tandemQuantity]
  );

  const MILL_ARRAY = useMemo(
    () => Array.from({ length: millQuantity }, (_, index) => index + 1),
    [millQuantity]
  );

  const handleCheckboxChange = (
    tandemIndex: number,
    millIndex: number,
    component: string,
    isChecked: boolean
  ) => {
    setCheckboxes((prevState) => ({
      ...prevState,
      [`Tandem ${tandemIndex}, Molino ${millIndex}, ${component}`]: isChecked,
    }));
  };

  async function handleCreateTemplate() {
    const templateBody = {
      clientId: client?.id,
      templateName: `Temperaturas bronces ${client?.clientName}`,
      createdBy: user?.id,
      componentBody: createMillComponentBody(),
      templateType: TemplateTypesEnum.TEMPERATURAS_BRONCES,
    };

    try {
      const { data }: AxiosResponse<TemperatureTemplateResponseInterface> =
        await axios.post(`${API_URL}/templates`, templateBody, customHeader);

      Alert.alert('Éxito', 'Formato creado correctamente');
      clearFields();
      router.navigate('/(tabs)');

      return data;
    } catch (error: AxiosError | any) {
      const errorResult: ErrorResponse = handleErrors(error);

      Alert.alert(`${errorResult?.status}`, `${errorResult?.errorMessage}`);
    }
  }

  function createMillComponentBody() {
    const uniqueMills = new Set<string>();

    Object.keys(checkboxes).forEach((item) => {
      const [tandem, mill, component] = item.split(', ').slice(0, 3);
      uniqueMills.add(`${tandem}, ${mill}, ${component}`);
    });

    // Construir el array de objetos sugarCaneMillBody
    const sugarCaneMillBodyArray = Array.from(uniqueMills).map((entry) => {
      const [tandem, mill, component] = entry.split(', ');
      return {
        tandemNumber: parseInt(tandem.split(' ')[1], 10),
        millName: mill.trim(),
        componentName: component.trim(),
      };
    });

    return sugarCaneMillBodyArray;
  }

  function clearFields() {
    setTandemQuantity(0);
    setMillQuantity(0);
    setClient({ id: '', clientName: '' });
    setCheckboxes({});
  }

  const value = {
    tandemQuantity,
    setTandemQuantity,
    millQuantity,
    setMillQuantity,
    client,
    setClient,
    TANDEM_ARRAY,
    MILL_ARRAY,
    handleCheckboxChange,
    checkboxes,
    mutation,
  };

  return (
    <TemperatureTemplateContext.Provider value={value}>
      {children}
    </TemperatureTemplateContext.Provider>
  );
};

export { TemperatureTemplateProvider };

export const useTemperatureTemplate = () => {
  const context = useContext(TemperatureTemplateContext);
  if (context === undefined) {
    throw new Error(
      'useTemperatureTemplate must be used within a TemperatureTemplateProvider'
    );
  }
  return context;
};

export default TemperatureTemplateContext;
