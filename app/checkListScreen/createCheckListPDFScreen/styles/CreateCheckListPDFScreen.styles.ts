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
    flex: 1,
    width: '100%',
    position: 'relative',
    paddingHorizontal: normalize(20, 'width'),
    marginTop: '21%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});
