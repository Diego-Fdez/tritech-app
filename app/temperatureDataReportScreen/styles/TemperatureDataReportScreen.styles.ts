import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  wrapper: {
    flex: 1,
    width: '100%',
    marginTop: '20%',
    paddingHorizontal: normalize(20, 'width'),
  },
  scrollContainer: {
    flex: 1,
    width: '100%',
  },
  description: {
    textAlign: 'justify',
    marginBottom: normalize(14, 'height'),
    width: '90%',
    alignSelf: 'center',
  },
  button: {
    marginBottom: normalize(20, 'height'),
  },
  disabledButton: {
    opacity: 0.5,
    marginBottom: normalize(20, 'height'),
  },
});
