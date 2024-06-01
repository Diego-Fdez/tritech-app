import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: normalize(60, 'height'),
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'transparent',
    paddingHorizontal: normalize(20, 'width'),
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
  },
  logo: {
    width: normalize(110, 'width'),
    height: normalize(60, 'height'),
    resizeMode: 'contain',
  },
});
