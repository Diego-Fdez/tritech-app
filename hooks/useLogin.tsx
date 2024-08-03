import { useState } from 'react';
import { Alert } from 'react-native';
import axios, { AxiosResponse, AxiosError } from 'axios';
import { router } from 'expo-router';
import * as yup from 'yup';
import { API_URL } from '@/constants';
import { useUserStore } from '@/store';
import { userInformationAdapter } from '@/app/(tabs)/profile/adapters';
import { UserInterface } from '@/app/(tabs)/profile/interfaces';
import { ErrorResponse, handleErrors } from '@/utils';

interface LoginDataInterface {
  accessToken: string;
  user: UserInterface;
}

interface DataInterface {
  email: string;
  password: string;
}

const useLogin = () => {
  const setUser = useUserStore((state) => state.setUser);
  const setToken = useUserStore((state) => state.setToken);
  const setEmailInput = useUserStore((state) => state.setEmailInput);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const schema = yup
    .object({
      email: yup
        .string()
        .email('El correo no es válido')
        .required('El correo es obligatorio'),
      password: yup
        .string()
        .min(8, 'La contraseña debe tener al menos 8 caracteres')
        .max(20, 'La contraseña no puede tener más de 20 caracteres')
        .required('La contraseña es obligatoria'),
    })
    .required();

  async function handleLogin(data: DataInterface) {
    const { email, password } = data;
    try {
      setIsLoading(true);

      const { data }: AxiosResponse<LoginDataInterface> = await axios.post(
        `${API_URL}/auth`,
        {
          email: email.toLowerCase().trim(),
          password: password.trim(),
        }
      );

      setUser(userInformationAdapter(data?.user));
      setToken(data?.accessToken);
      setEmailInput(email);
      router.navigate('/(tabs)');
    } catch (error: AxiosError | any) {
      const errorResult: ErrorResponse = handleErrors(error);
      Alert.alert(`${errorResult?.status}`, `${errorResult?.errorMessage}`);
    } finally {
      setIsLoading(false);
    }
  }

  return {
    handleLogin,
    isLoading,
    schema,
  };
};

export default useLogin;
