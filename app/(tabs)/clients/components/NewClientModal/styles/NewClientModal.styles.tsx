import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';
import { tintColorLight } from '@/constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingTop: normalize(20, 'height'),
    paddingHorizontal: normalize(20, 'width'),
    borderStartStartRadius: normalize(20, 'width'),
    borderStartEndRadius: normalize(20, 'width'),
  },
  closeButton: {
    alignSelf: 'flex-end',
    marginTop: normalize(20, 'height'),
  },
  title: {
    alignSelf: 'center',
    marginVertical: normalize(20, 'height'),
    textAlign: 'center',
  },
  countryPicker: {
    borderWidth: 1,
    borderColor: tintColorLight,
    borderRadius: normalize(8),
    marginVertical: normalize(20, 'height'),
  },
  image: {
    width: '80%',
    height: '50%',
    resizeMode: 'contain',
  },
});
