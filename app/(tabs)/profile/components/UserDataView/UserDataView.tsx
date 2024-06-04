import { TextInput, Text } from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ThemedButton, ThemedText, ThemedView } from '@/components';
import { styles } from './styles/UserDataView.styles';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';
import { useProfile } from '../../hooks';
import { useUserStore } from '@/store';

interface UserDataViewProps {
  isEnable: boolean;
}

const UserDataView = ({ isEnable }: UserDataViewProps) => {
  const user = useUserStore((state) => state.user);
  const { schema, handleUpdateUserInformation, isLoading } = useProfile();
  const colorScheme = useColorScheme();
  const customStyle = [
    styles.input,
    { backgroundColor: Colors[colorScheme ?? 'light'].background },
    { color: Colors[colorScheme ?? 'light'].text },
  ];
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
      fullName: '',
      phone: '',
      country: '',
      web: '',
    },
    resolver: yupResolver(schema),
  });

  return (
    <>
      <ThemedView style={styles.container}>
        <ThemedText type='defaultSemiBold'>Nombre</ThemedText>
        {errors.fullName && (
          <Text style={styles.textError}>{errors.fullName.message}</Text>
        )}
        <Controller
          control={control}
          rules={{ required: false }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder='Diego Fernández'
              style={customStyle}
              placeholderTextColor={
                Colors[colorScheme ?? 'light'].tabIconDefault
              }
              editable={isEnable}
              value={value || user?.fullName}
              onChangeText={onChange}
              onBlur={onBlur}
            />
          )}
          name='fullName'
        />
      </ThemedView>
      <ThemedView style={styles.container}>
        <ThemedText type='defaultSemiBold'>Correo electrónico</ThemedText>
        {errors.email && (
          <Text style={styles.textError}>{errors.email.message}</Text>
        )}
        <Controller
          control={control}
          rules={{ required: false }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder='diego@grupotritech.com'
              style={customStyle}
              placeholderTextColor={
                Colors[colorScheme ?? 'light'].tabIconDefault
              }
              keyboardType='email-address'
              editable={isEnable}
              value={value || user?.email}
              onChangeText={onChange}
              onBlur={onBlur}
            />
          )}
          name='email'
        />
      </ThemedView>
      <ThemedView style={styles.container}>
        <ThemedText type='defaultSemiBold'>Contraseña</ThemedText>
        {errors.password && (
          <Text style={styles.textError}>{errors.password.message}</Text>
        )}
        <Controller
          control={control}
          rules={{ required: false }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder='******'
              style={customStyle}
              placeholderTextColor={
                Colors[colorScheme ?? 'light'].tabIconDefault
              }
              secureTextEntry
              editable={isEnable}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
            />
          )}
          name='password'
        />
      </ThemedView>
      <ThemedView style={styles.container}>
        <ThemedText type='defaultSemiBold'>Número de teléfono</ThemedText>
        {errors.phone && (
          <Text style={styles.textError}>{errors.phone.message}</Text>
        )}
        <Controller
          control={control}
          rules={{ required: false }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder='50683215708'
              style={customStyle}
              placeholderTextColor={
                Colors[colorScheme ?? 'light'].tabIconDefault
              }
              keyboardType='phone-pad'
              editable={isEnable}
              value={value || user?.phone}
              onChangeText={onChange}
              onBlur={onBlur}
            />
          )}
          name='phone'
        />
      </ThemedView>
      <ThemedView style={styles.container}>
        <ThemedText type='defaultSemiBold'>País</ThemedText>
        {errors.country && (
          <Text style={styles.textError}>{errors.country.message}</Text>
        )}
        <Controller
          control={control}
          rules={{ required: false }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder='Costa Rica'
              style={customStyle}
              placeholderTextColor={
                Colors[colorScheme ?? 'light'].tabIconDefault
              }
              editable={isEnable}
              value={value || user?.country}
              onChangeText={onChange}
              onBlur={onBlur}
            />
          )}
          name='country'
        />
      </ThemedView>
      <ThemedView style={styles.container}>
        <ThemedText type='defaultSemiBold'>Web/LinkedIn</ThemedText>
        {errors.web && (
          <Text style={styles.textError}>{errors.web.message}</Text>
        )}
        <Controller
          control={control}
          rules={{ required: false }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder='www.tritech.com'
              style={customStyle}
              placeholderTextColor={
                Colors[colorScheme ?? 'light'].tabIconDefault
              }
              editable={isEnable}
              value={value || user?.web}
              onChangeText={onChange}
              onBlur={onBlur}
            />
          )}
          name='web'
        />
      </ThemedView>
      {isEnable && (
        <ThemedView style={styles.container}>
          <ThemedButton
            title={isLoading ? 'Cargando...' : 'Guardar cambios'}
            disabled={isLoading}
            handlePress={handleSubmit(handleUpdateUserInformation)}
          />
        </ThemedView>
      )}
    </>
  );
};

export default UserDataView;
