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
  scrollContainer: {
    width: '100%',
    flex: 1,
  },
  title: {
    flex: 1,
    alignSelf: 'center',
  },
  inputContainer: {
    flex: 1,
    width: '100%',
    marginTop: normalize(10, 'height'),
  },
  clientContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: normalize(10, 'width'),
    marginBottom: normalize(15, 'height'),
  },
  addButton: {
    width: 'auto',
    height: 'auto',
    position: 'absolute',
    right: normalize(20, 'width'),
    bottom: normalize(30, 'height'),
    borderRadius: 100,
    backgroundColor: 'transparent',
    zIndex: 10,
  },
});
