import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingHorizontal: normalize(20, 'width'),
  },
  closeButton: {
    alignSelf: 'flex-end',
    marginTop: normalize(20, 'height'),
  },
  title: {
    alignSelf: 'center',
    marginVertical: normalize(20, 'height'),
    textAlign: 'center',
  },
});
