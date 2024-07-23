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
    marginTop: '23%',
    paddingHorizontal: normalize(20, 'width'),
  },
});
