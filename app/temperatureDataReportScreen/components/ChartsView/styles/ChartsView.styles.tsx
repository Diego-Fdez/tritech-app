import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';

export const styles = StyleSheet.create({
  chartContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: normalize(12),
    marginBottom: normalize(12, 'height'),
  },
  snapView: {
    width: '100%',
    height: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    gap: normalize(12),
    marginBottom: normalize(12, 'height'),
    backgroundColor: '#fff',
    borderRadius: normalize(8),
  },
  title: {
    alignSelf: 'center',
    width: '100%',
  },
  subTitle: {
    color: '#0b0b0b',
  },
});
