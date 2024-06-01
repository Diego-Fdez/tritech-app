import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';

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
    marginTop: '25%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  inputContainer: {
    width: '100%',
    height: normalize(40, 'height'),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: normalize(8),
    position: 'relative',
    marginBottom: normalize(20, 'height'),
  },
  icon: {
    position: 'absolute',
    right: normalize(10, 'width'),
  },
});
