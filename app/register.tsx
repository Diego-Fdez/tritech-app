import { Link } from 'expo-router';
import { ScrollView } from 'react-native';
import {
  ThemedView,
  ThemedText,
  ThemedInput,
  AuthContainerView,
  ThemedButton,
} from '@/components';
import { styles } from './styles/Login.styles';

const RegisterScreen = () => {
  return (
    <AuthContainerView>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type='title' style={styles.title}>
          Regístrate
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.inputsContainer}>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.wrapper}>
          <ThemedText type='default'>Nombre completo</ThemedText>
          <ThemedInput
            placeholder='Diego Fernández'
            keyboardType='default'
            style={styles.input}
          />
          <ThemedText type='default'>Correo electrónico</ThemedText>
          <ThemedInput
            placeholder='diego@grupotritech.com'
            keyboardType='email-address'
            style={styles.input}
          />
          <ThemedText type='default'>Contraseña</ThemedText>
          <ThemedInput
            placeholder='******'
            keyboardType='default'
            secureTextEntry
            style={styles.input}
          />
          <ThemedText type='default'>Número de teléfono</ThemedText>
          <ThemedInput
            placeholder='50683215708'
            keyboardType='phone-pad'
            style={styles.input}
          />
          <ThemedText type='default'>País</ThemedText>
          <ThemedInput
            placeholder='Costa Rica'
            keyboardType='default'
            style={styles.input}
          />
          <ThemedText type='default'>Web/LinkedIn</ThemedText>
          <ThemedInput
            placeholder='www.tritech.com'
            keyboardType='default'
            style={styles.input}
          />
          <ThemedButton title='Ingresar' style={styles.button} />
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
