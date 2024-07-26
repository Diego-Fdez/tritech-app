import { ActivityIndicator, StyleSheet } from 'react-native';
import { ThemedView } from '../ThemedView';
import { ThemedText } from '../ThemedText';
import { Colors } from '@/constants';

const LoaderView = () => {
  return (
    <ThemedView style={styles.container}>
      <ActivityIndicator size='large' color={Colors.light.tabIconSelected} />
      <ThemedText type='subtitle'>Cargando...</ThemedText>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
});

export default LoaderView;
