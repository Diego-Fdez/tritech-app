import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    height: normalize(40, 'height'),
    bottom: 0,
    alignSelf: 'center',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    fontSize: normalize(13),
    fontWeight: '500',
  },
  text: {
    fontSize: normalize(12),
    fontWeight: '400',
    marginTop: normalize(-5, 'height'),
  },
});
