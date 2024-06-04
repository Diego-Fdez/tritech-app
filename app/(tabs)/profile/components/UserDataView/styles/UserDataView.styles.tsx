import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  input: {
    width: '100%',
    height: normalize(40, 'height'),
    borderRadius: normalize(8),
    paddingHorizontal: normalize(10, 'width'),
    marginBottom: normalize(20, 'height'),
    borderBottomWidth: 1,
    borderColor: '#0a7ea4',
  },
});
