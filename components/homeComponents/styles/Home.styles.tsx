import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';
import { Colors } from '@/constants/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: normalize(20, 'width'),
    marginBottom: '15%',
  },
  text: {
    textAlign: 'center',
  },
  title: {
    color: Colors.light.tint,
  },
});
