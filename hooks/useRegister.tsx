import { useState } from 'react';
import axios from 'axios';
import { router } from 'expo-router';
import * as yup from 'yup';
import { Toast } from 'toastify-react-native';
import { API_URL } from '@/constants';

interface DataInterface {
  email: string;
  password: string;
  fullName: string;
  country: string;
}

const useRegister = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function handleRegister(user: DataInterface) {
    const { email, password, fullName, country } = user;
    try {
      setIsLoading(true);

      await axios.post(`${API_URL}/users`, {
        email: email.toLowerCase().trim(),
        password: password.trim(),
        fullName,
        country,
      });

      Toast.success(`Bienvenido ${fullName.split(' ')[0]}`);

      router.navigate('/');
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
      fullName: yup.string().required('El nombre es obligatorio'),
      country: yup.string().required('El país es obligatorio'),
    })
    .required();

  return { isLoading, handleRegister, schema };
};

export default useRegister;
