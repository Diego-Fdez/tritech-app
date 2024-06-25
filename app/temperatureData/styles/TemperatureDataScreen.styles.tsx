import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  keyBoardContainer: {
    flex: 1,
    width: '100%',
  },
  wrapper: {
    flex: 1,
    width: '100%',
    marginTop: '23%',
    paddingHorizontal: normalize(20, 'width'),
  },
  inputContainer: {
    flex: 1,
    gap: normalize(20, 'height'),
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  buttonsContainer: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: normalize(12),
    marginBottom: normalize(20, 'height'),
  },
  button: {
    width: '50%',
  },
});
