import { Link } from 'expo-router';
import { Text } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  ThemedView,
  ThemedText,
  ThemedInput,
  AuthContainerView,
  ThemedButton,
} from '@/components';
import { styles } from './styles/Login.styles';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useLogin } from '@/hooks';
import { useUserStore } from '@/store';

const LoginScreen = () => {
  const emailInput = useUserStore((state) => state.emailInput);
  const colorScheme = useColorScheme();
  const { handleLogin, isLoading, schema } = useLogin();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });

  return (
    <AuthContainerView>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type='title'>Iniciar </ThemedText>
        <ThemedText type='title' style={styles.title}>
          Sesión
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.inputsContainer}>
        <ThemedText type='default'>Correo electrónico</ThemedText>
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <ThemedInput
              placeholder='ejemplo@grupotritech.com'
              keyboardType='email-address'
              style={styles.input}
              placeholderTextColor={
                Colors[colorScheme ?? 'light'].tabIconDefault
              }
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              autoCapitalize='none'
            />
          )}
          name='email'
          defaultValue={emailInput ?? ''}
        />
        {errors.email && (
          <Text style={styles.errorText}>{errors.email.message}</Text>
        )}
        <ThemedText type='default'>Contraseña</ThemedText>
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <ThemedInput
              placeholder='******'
              keyboardType='default'
              secureTextEntry
              style={styles.input}
              placeholderTextColor={
                Colors[colorScheme ?? 'light'].tabIconDefault
              }
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              autoCapitalize='none'
            />
          )}
          name='password'
        />
        {errors.password && (
          <Text style={styles.errorText}>{errors.password.message}</Text>
        )}
        <ThemedButton
          title={isLoading ? 'Cargando...' : 'Iniciar sesión'}
          style={styles.button}
          handlePress={handleSubmit(handleLogin)}
          disabled={isLoading}
        />
        <ThemedView style={styles.linkContainer}>
          <ThemedText type='default'>¿No tienes cuenta?</ThemedText>
          <Link href='/register'>
            <ThemedText type='link'>Regístrate</ThemedText>
          </Link>
        </ThemedView>
      </ThemedView>
    </AuthContainerView>
  );
};

export default LoginScreen;
