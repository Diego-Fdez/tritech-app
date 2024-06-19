import * as yup from 'yup';
import axios, { AxiosResponse } from 'axios';
import { useState } from 'react';
import { Toast } from 'toastify-react-native';
import { UserResponseInterface, UserUpdateInformation } from '../interfaces';
import { API_URL } from '@/constants';
import { useUserStore } from '@/store';
import { userInformationAdapter } from '../adapters';

const useProfile = () => {
  const accessToken = useUserStore((state) => state.accessToken);
  const user = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isEnabled, setIsEnabled] = useState<boolean>(false);
  const schema = yup
    .object({
      email: yup.string().email('El correo no es válido'),
      password: yup
        .string()
        .max(20, 'La contraseña no puede tener más de 20 caracteres'),
      fullName: yup.string(),
      country: yup.string(),
    })
    .required();

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  async function handleUpdateUserInformation(
    userData: UserUpdateInformation
  ): Promise<void> {
    // Filtrar las entradas con valores diferentes de un string vacío
    const filteredEntries = Object.entries(userData).filter(
      ([key, value]) => value !== ''
    );

    // Convertir las entradas filtradas de vuelta a un objeto
    const filteredData = Object.fromEntries(
      filteredEntries
    ) as Partial<UserUpdateInformation>;

    try {
      setIsLoading(true);
      const { data }: AxiosResponse<UserResponseInterface> = await axios.patch(
        `${API_URL}/users/${user?.id}`,
        { ...filteredData },
        {
          headers: {
            bearer: `${accessToken}`,
            'Content-Type': 'application/json',
          },
        }
      );
      setUser(userInformationAdapter(data?.data));
      setIsEnabled((previousState) => !previousState);
      Toast.success('Tú información se actualizó correctamente');
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      } else {
        console.log(error);
      }
    } finally {
      setIsLoading(false);
    }
  }

  return {
    schema,
    handleUpdateUserInformation,
    isLoading,
    isEnabled,
    toggleSwitch,
  };
};

export default useProfile;
