import { useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { router } from 'expo-router';
import * as yup from 'yup';
import { API_URL } from '@/constants';
import { useUserStore } from '@/store';

interface LoginDataInterface {
  accessToken: string;
  user: {
    id: number;
    fullName: string;
    email: string;
    country: string;
    phone: string;
    role: string;
    web: string;
    createdAt: string;
    updatedAt: string;
  };
}

interface DataInterface {
  email: string;
  password: string;
}

const useLogin = () => {
  const setUser = useUserStore((state) => state.setUser);
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
        `http://192.168.0.4:4000/api/v1/auth`,
        {
          email: email.toLowerCase().trim(),
          password: password.trim(),
        }
      );

      setUser(data?.user, data?.accessToken);
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
