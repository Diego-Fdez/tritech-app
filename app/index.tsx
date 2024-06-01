import { Link } from 'expo-router';
import {
  ThemedView,
  ThemedText,
  ThemedInput,
  AuthContainerView,
  ThemedButton,
} from '@/components';
import { styles } from './styles/Login.styles';

const LoginScreen = () => {
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
        <ThemedButton title='Ingresar' style={styles.button} />
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
