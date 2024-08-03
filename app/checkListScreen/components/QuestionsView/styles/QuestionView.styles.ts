import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';
import { Colors } from '@/constants';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: normalize(20, 'height'),
  },
  animatedContainer: {
    width: '100%',
    zIndex: 10,
    backgroundColor: 'transparent',
    minHeight: 200,
    height: 200,
  },
  wrapper: {
    width: '100%',
    minHeight: 200,
    paddingBottom: normalize(10, 'height'),
    paddingHorizontal: normalize(8, 'width'),
    borderRadius: normalize(12),
    borderBottomWidth: 1,
    borderStartWidth: 1,
    borderEndWidth: 1,
    borderBottomColor: Colors.light.tint,
    borderEndColor: '#0a7da485',
    borderStartColor: '#0a7da485',
    marginBottom: normalize(10, 'height'),
    gap: normalize(10, 'height'),
  },
  buttonsContainer: {
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  removeView: {
    width: normalize(30, 'width'),
    height: '100%',
    borderTopRightRadius: normalize(12),
    borderBottomRightRadius: normalize(12),
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 0,
    zIndex: 0,
  },
  bouncyContainer: {
    width: '90%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  bouncyInput: {
    borderWidth: 0,
    borderColor: 'transparent',
    width: '100%',
  },
});
