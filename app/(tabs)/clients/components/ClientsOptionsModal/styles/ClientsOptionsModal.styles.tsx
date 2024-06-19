import { StyleSheet, Dimensions } from 'react-native';
import normalize from 'react-native-normalize';
import { tintColorLight } from '@/constants';

const { height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    flex: 1,
    paddingHorizontal: normalize(20, 'width'),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e8e6e664',
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: normalize(20, 'height'),
    right: normalize(20, 'width'),
  },
  buttonsContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: normalize(10),
    borderWidth: 1,
    borderColor: tintColorLight,
    borderRadius: normalize(8),
    paddingHorizontal: normalize(10, 'width'),
    paddingVertical: normalize(30, 'height'),
  },
  title: {
    marginBottom: normalize(20, 'height'),
  },
});
