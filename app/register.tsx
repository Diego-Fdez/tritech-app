import { Link } from 'expo-router';
import { ScrollView, Text } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  ThemedView,
  ThemedText,
  ThemedInput,
  AuthContainerView,
  ThemedButton,
  CountriesView,
} from '@/components';
import { styles } from './styles/Login.styles';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useRegister } from '@/hooks';

const RegisterScreen = () => {
  const colorScheme = useColorScheme();
  const { isLoading, handleRegister, schema } = useRegister();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
      fullName: '',
      country: '',
    },
    resolver: yupResolver(schema),
  });

  return (
    <AuthContainerView>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type='title' style={styles.title}>
          Regístrate
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.inputsContainer}>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.wrapper}>
          <ThemedText type='default'>País</ThemedText>
          <Controller
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange } }) => (
              <CountriesView setCountry={onChange} style={styles.dropDown} />
            )}
            name='country'
          />
          {errors.country && (
            <Text style={styles.errorText}>{errors.country.message}</Text>
          )}
          <ThemedText type='default'>Nombre completo</ThemedText>
          <Controller
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value } }) => (
              <ThemedInput
                placeholder='Diego Fernández'
                keyboardType='default'
                style={styles.input}
                placeholderTextColor={
                  Colors[colorScheme ?? 'light'].tabIconDefault
                }
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
              />
            )}
            name='fullName'
          />
          {errors.fullName && (
            <Text style={styles.errorText}>{errors.fullName.message}</Text>
          )}
          <ThemedText type='default'>Correo electrónico</ThemedText>
          <Controller
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value } }) => (
              <ThemedInput
                placeholder='diego@grupotritech.com'
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
            title={isLoading ? 'Cargando...' : 'Registrarme'}
            style={styles.button}
            handlePress={handleSubmit(handleRegister)}
            disabled={isLoading}
          />
          <ThemedView style={styles.linkContainer}>
            <ThemedText type='default'>¿Ya tienes cuenta?</ThemedText>
            <Link href='/(tabs)/'>
              <ThemedText type='link'>Inicia sesión</ThemedText>
            </Link>
          </ThemedView>
        </ScrollView>
      </ThemedView>
    </AuthContainerView>
  );
};

export default RegisterScreen;
