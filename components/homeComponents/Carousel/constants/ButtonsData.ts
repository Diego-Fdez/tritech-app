import { router } from 'expo-router';
import { Alert } from 'react-native';

interface ButtonsDataInterface {
  id: string;
  image: string;
  title: string;
  fn: () => void;
}

export const BUTTONS_DATA: ButtonsDataInterface[] = [
  {
    id: '1',
    image: require('@/assets/images/checklist.webp'),
    title: 'Checklist',
    fn: () =>
      Alert.alert(
        'Información',
        'Te avisaremos cuando este disponible esta opción'
      ),
  },
  {
    id: '2',
    image: require('@/assets/images/temperature.webp'),
    title: 'Temperaturas bronces Ingenios',
    fn: () => router.navigate('/temperatureTemplate'),
  },
  {
    id: '3',
    image: require('@/assets/images/indices.webp'),
    title: 'Indices',
    fn: () =>
      Alert.alert(
        'Información',
        'Te avisaremos cuando este disponible esta opción'
      ),
  },
];
