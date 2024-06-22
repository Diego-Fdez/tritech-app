import { useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { router } from 'expo-router';
import * as yup from 'yup';
import { API_URL } from '@/constants';
import { useUserStore } from '@/store';
import { userInformationAdapter } from '@/app/(tabs)/profile/adapters';
import { UserInterface } from '@/app/(tabs)/profile/interfaces';

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
      router.navigate('/(tabs)');
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
    handleLogin,
    isLoading,
    schema,
  };
};

export default useLogin;
