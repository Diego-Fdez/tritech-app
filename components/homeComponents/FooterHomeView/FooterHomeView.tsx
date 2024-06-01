import { View } from 'react-native';
import { ThemedText } from '@/components';
import { styles } from './styles/FooterHomeView.styles';

const FooterHomeView = () => {
  return (
    <View style={styles.container}>
      <ThemedText type='default' style={styles.footerText}>
        ©Tritech todos los derechos reservados 2024.
      </ThemedText>
      <ThemedText type='default' style={styles.text}>
        desarrollado por Diego Fedez.
      </ThemedText>
    </View>
  );
};

export default FooterHomeView;
