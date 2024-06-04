import { Image } from 'react-native';
import { ThemedView } from '../ThemedView';
import { ThemedText } from '../ThemedText';
import { styles } from './styles/ErrorView.styles';

interface ErrorViewProps {
  title: string;
}

const ErrorView = ({ title }: ErrorViewProps) => {
  return (
    <ThemedView style={styles.container}>
      <Image
        source={require('@/assets/images/alert.webp')}
        style={styles.image}
      />
      <ThemedText>{title}</ThemedText>
    </ThemedView>
  );
};

export default ErrorView;
