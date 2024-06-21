import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';
import { tintColorLight } from '@/constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  wrapper: {
    width: '100%',
    paddingHorizontal: normalize(20, 'width'),
    marginTop: '23%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  title: {
    marginBottom: normalize(20, 'height'),
    alignSelf: 'center',
  },
  button: {
    position: 'relative',
    width: '100%',
    height: normalize(100, 'height'),
    borderRadius: normalize(8),
    borderWidth: 1,
    borderColor: tintColorLight,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    overflow: 'hidden',
    marginBottom: normalize(20, 'height'),
  },
  image: {
    width: '38%',
    height: '100%',
    resizeMode: 'cover',
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  circleForm: {
    position: 'absolute',
    right: normalize(-40, 'width'),
    bottom: normalize(-30, 'height'),
    width: normalize(150, 'width'),
    height: normalize(150, 'width'),
    borderRadius: 150 / 2,
    backgroundColor: tintColorLight,
    shadowColor: '#0a7ea4',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
    zIndex: -10,
  },
});
