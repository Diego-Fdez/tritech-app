import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';
import { Colors } from '@/constants/Colors';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: normalize(70, 'height'),
    position: 'absolute',
    top: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: normalize(20, 'width'),
    backgroundColor: 'transparent',
  },
  logo: {
    width: normalize(110, 'width'),
    height: normalize(60, 'height'),
    resizeMode: 'contain',
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userName: {
    color: Colors.light.tint,
  },
});
