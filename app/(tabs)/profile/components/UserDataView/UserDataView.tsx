import { TextInput } from 'react-native';
import { ThemedButton, ThemedText, ThemedView } from '@/components';
import { styles } from './styles/UserDataView.styles';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';

interface UserDataViewProps {
  isEnable: boolean;
}

const UserDataView = ({ isEnable }: UserDataViewProps) => {
  const colorScheme = useColorScheme();
  const customStyle = [
    styles.input,
    { backgroundColor: Colors[colorScheme ?? 'light'].background },
    { color: Colors[colorScheme ?? 'light'].text },
  ];

  return (
    <>
      <ThemedView style={styles.container}>
        <ThemedText type='defaultSemiBold'>Nombre</ThemedText>
        <TextInput
          placeholder='Diego Fernández'
          style={customStyle}
          placeholderTextColor={Colors[colorScheme ?? 'light'].tabIconDefault}
          editable={isEnable}
        />
      </ThemedView>
      <ThemedView style={styles.container}>
        <ThemedText type='defaultSemiBold'>Correo electrónico</ThemedText>
        <TextInput
          placeholder='diego@grupotritech.com'
          style={customStyle}
          placeholderTextColor={Colors[colorScheme ?? 'light'].tabIconDefault}
          keyboardType='email-address'
          editable={isEnable}
        />
      </ThemedView>
      <ThemedView style={styles.container}>
        <ThemedText type='defaultSemiBold'>Contraseña</ThemedText>
        <TextInput
          placeholder='******'
          style={customStyle}
          placeholderTextColor={Colors[colorScheme ?? 'light'].tabIconDefault}
          secureTextEntry
          editable={isEnable}
        />
      </ThemedView>
      <ThemedView style={styles.container}>
        <ThemedText type='defaultSemiBold'>Número de teléfono</ThemedText>
        <TextInput
          placeholder='50683215708'
          style={customStyle}
          placeholderTextColor={Colors[colorScheme ?? 'light'].tabIconDefault}
          keyboardType='phone-pad'
          editable={isEnable}
        />
      </ThemedView>
      <ThemedView style={styles.container}>
        <ThemedText type='defaultSemiBold'>País</ThemedText>
        <TextInput
          placeholder='Costa Rica'
          style={customStyle}
          placeholderTextColor={Colors[colorScheme ?? 'light'].tabIconDefault}
          editable={isEnable}
        />
      </ThemedView>
      <ThemedView style={styles.container}>
        <ThemedText type='defaultSemiBold'>Web/LinkedIn</ThemedText>
        <TextInput
          placeholder='www.tritech.com'
          style={customStyle}
          placeholderTextColor={Colors[colorScheme ?? 'light'].tabIconDefault}
          editable={isEnable}
        />
      </ThemedView>
      {isEnable && (
        <ThemedView style={styles.container}>
          <ThemedButton title='Guardar cambios' />
        </ThemedView>
      )}
    </>
  );
};

export default UserDataView;
