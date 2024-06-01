import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topView: {
    flex: 1,
    width: '100%',
  },
  image: {
    width: '100%',
    height: normalize(200, 'height'),
    objectFit: 'cover',
  },
  wrapper: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '80%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: normalize(20, 'height'),
    borderTopRightRadius: normalize(25),
    borderTopLeftRadius: normalize(25),
    shadowColor: '#0a7ea4',
    shadowOffset: {
      width: 10,
      height: 18,
    },
    shadowOpacity: 0.25,
    shadowRadius: 20.0,
    elevation: 24,
  },
});
