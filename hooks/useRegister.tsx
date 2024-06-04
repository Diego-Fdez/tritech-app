import { useState } from 'react';
import axios from 'axios';
import { router } from 'expo-router';
import * as yup from 'yup';
import { Toast } from 'toastify-react-native';

interface DataInterface {
  email: string;
  password: string;
  fullName: string;
  phone: string;
  country: string;
  web?: string;
}

const useRegister = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function handleRegister(user: DataInterface) {
    const { email, password, fullName, phone, country } = user;
    try {
      setIsLoading(true);

      await axios.post(`http://192.168.0.4:4000/api/v1/users`, {
        email: email.toLowerCase().trim(),
        password: password.trim(),
        fullName,
        phone: phone.toString().trim(),
        country,
        web: user?.web ?? '',
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
      phone: yup.string().required('El teléfono es obligatorio'),
      country: yup.string().required('El país es obligatorio'),
      web: yup.string(),
    })
    .required();

  return { isLoading, handleRegister, schema };
};

export default useRegister;
