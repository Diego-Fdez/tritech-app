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
  title: {
    width: '100%',
    alignSelf: 'center',
    textAlign: 'center',
    marginBottom: normalize(13, 'height'),
  },
  description: {
    width: '100%',
    alignSelf: 'flex-start',
    paddingHorizontal: normalize(10, 'width'),
    textAlign: 'left',
    marginBottom: normalize(8, 'height'),
  },
  client: {
    width: '100%',
    alignSelf: 'flex-start',
    marginBottom: normalize(15, 'height'),
  },
  formContainer: {
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    gap: normalize(5, 'width'),
  },
  questionOptionContainer: {
    width: '100%',
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    gap: normalize(8, 'width'),
  },
});
