import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';
import { tintColorLight } from '@/constants/Colors';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: '100%',
  },
  inputsContainer: {
    flex: 1,
    width: '100%',
    paddingHorizontal: normalize(20, 'width'),
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: normalize(10),
    marginTop: normalize(20, 'height'),
  },
  titleContainer: {
    flexDirection: 'row',
  },
  title: {
    color: tintColorLight,
  },
  input: {
    marginBottom: normalize(10, 'height'),
    shadowColor: '#0a7ea4',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.18,
    shadowRadius: 4.59,
    elevation: 5,
  },
  button: {
    marginTop: normalize(20, 'height'),
  },
  linkContainer: {
    flexDirection: 'row',
    marginTop: normalize(13, 'height'),
    gap: normalize(7),
    alignSelf: 'center',
    alignItems: 'center',
    paddingBottom: normalize(20, 'height'),
  },
});
