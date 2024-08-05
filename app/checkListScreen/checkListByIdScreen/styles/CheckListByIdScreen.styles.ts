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
    paddingBottom: normalize(20, 'height'),
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
    textAlign: 'left',
    marginBottom: normalize(8, 'height'),
    opacity: 0.8,
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
  },
  questionText: {
    marginTop: normalize(12, 'height'),
    marginBottom: normalize(5, 'height'),
  },
  questionOptionContainer: {
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    gap: normalize(5, 'width'),
  },
});
