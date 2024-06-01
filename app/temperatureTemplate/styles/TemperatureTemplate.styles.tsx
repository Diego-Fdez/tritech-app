import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';
import { Colors } from '@/constants/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    marginTop: '22%',
    textAlign: 'center',
    marginBottom: '10%',
  },
  wrapper: {
    flex: 1,
    width: '100%',
  },
  clientWrapper: {
    width: '100%',
    paddingHorizontal: normalize(20, 'width'),
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: normalize(10, 'width'),
    marginBottom: normalize(20, 'height'),
  },
  input: {
    width: normalize(100, 'width'),
    height: normalize(40, 'height'),
    borderRadius: normalize(8),
    borderWidth: 1,
    borderColor: Colors.light.tint,
    paddingHorizontal: normalize(12, 'width'),
    fontSize: normalize(16),
    fontWeight: '400',
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: normalize(20, 'width'),
    marginBottom: normalize(20, 'height'),
    justifyContent: 'center',
  },
});
