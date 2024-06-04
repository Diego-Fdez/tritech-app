import { Image, StyleSheet } from 'react-native';
import { ThemedView } from '../ThemedView';
import { ThemedText } from '../ThemedText';

interface NoDataViewProps {
  title: string;
}

const NoDataView = ({ title }: NoDataViewProps) => {
  return (
    <ThemedView style={styles.container}>
      <Image
        source={require('@/assets/images/cancel.webp')}
        style={styles.image}
      />
      <ThemedText>{title}</ThemedText>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  image: {
    width: '80%',
    height: 150,
    resizeMode: 'contain',
  },
});

export default NoDataView;
