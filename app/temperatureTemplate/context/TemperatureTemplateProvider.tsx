import { useState, createContext, useContext, ReactNode, useMemo } from 'react';
import axios, { AxiosResponse } from 'axios';
import { useUserStore } from '@/store';
import { API_URL } from '@/constants';
import {
  SugarCaneMillsResponse,
  TemperatureTemplateResponseInterface,
} from '../interfaces';

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
  handleSubmit: () => void;
  checkboxes: Record<string, boolean>;
  handleCreateTemplate: () => void;
  isLoading: boolean;
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
  const user = useUserStore((state) => state.user);
  const accessToken = useUserStore((state) => state.accessToken);
  const [tandemQuantity, setTandemQuantity] = useState<number>(0);
  const [millQuantity, setMillQuantity] = useState<number>(0);
  const [client, setClient] = useState<Client>({ id: '', clientName: '' });
  const [checkboxes, setCheckboxes] = useState<Record<string, boolean>>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);

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

  const customHeader = {
    headers: {
      bearer: accessToken,
    },
    'Content-Type': 'application/json',
  };

  async function handleCreateTemplate() {
    const templateBody = {
      clientId: client?.id,
      templateName: `Temperaturas ${client?.clientName}`,
      createdBy: user?.id,
    };

    try {
      setIsLoading(true);
      const { data }: AxiosResponse<TemperatureTemplateResponseInterface> =
        await axios.post(`${API_URL}/templates`, templateBody, customHeader);

      if (data?.statusCode !== 201) {
        throw new Error(
          'Lo sentimos, no pudimos crear tu formato, revisa que el cliente sea correcto'
        );
      }

      await handleCreateSugarCaneMill(data?.data?.id);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleCreateSugarCaneMill(
    templateId: string
  ): Promise<SugarCaneMillsResponse | void> {
    const uniqueMills = new Set<string>();

    Object.keys(checkboxes).forEach((item) => {
      const [tandem, mill] = item.split(', ').slice(0, 2);
      uniqueMills.add(`${tandem}, ${mill}`);
    });

    // Construir el array de objetos sugarCaneMillBody
    const sugarCaneMillBodyArray = Array.from(uniqueMills).map((entry) => {
      const [tandem, mill] = entry.split(', ');
      return {
        tandemCount: parseInt(tandem.split(' ')[1], 10),
        millName: mill.toLowerCase().trim(),
        templateId,
      };
    });

    try {
      const { data }: AxiosResponse<SugarCaneMillsResponse> = await axios.post(
        `${API_URL}/sugar-cane-mills`,
        sugarCaneMillBodyArray,
        customHeader
      );

      if (data?.statusCode !== 201) {
        throw new Error(
          'Lo sentimos, hay problemas para registrar los molinos, vuelve a intentarlo.'
        );
      }

      return data;
    } catch (error) {
      console.log(error);
    }
  }

  const handleSubmit = () => {
    const uniqueMills = new Set<string>();

    Object.keys(checkboxes).forEach((item) => {
      const [tandem, mill] = item.split(', ').slice(0, 2);
      uniqueMills.add(`${tandem}, ${mill}`);
    });

    // Construir el array de objetos sugarCaneMillBody
    const sugarCaneMillBodyArray = Array.from(uniqueMills).map((entry) => {
      const [tandem, mill] = entry.split(', ');
      return {
        tandemCount: parseInt(tandem.split(' ')[1], 10),
        millName: mill,
        templateId: '1',
      };
    });
    console.log(sugarCaneMillBodyArray);
  };

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
    handleSubmit,
    checkboxes,
    handleCreateTemplate,
    isLoading,
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
