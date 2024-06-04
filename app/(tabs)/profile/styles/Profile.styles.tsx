import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  backButton: {
    position: 'absolute',
    width: normalize(40, 'width'),
    height: normalize(40, 'width'),
    top: normalize(20, 'height'),
    left: normalize(20, 'width'),
    borderRadius: 100,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#0a7ea4',
    borderWidth: 1,
    zIndex: 10,
  },
  profileImage: {
    width: '100%',
    height: '26%',
    resizeMode: 'cover',
    marginBottom: normalize(20, 'height'),
  },
  scrollContainer: {
    flex: 1,
    width: '100%',
  },
  wrapper: {
    flex: 1,
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingHorizontal: normalize(20, 'width'),
  },
  switchContainer: {
    width: '100%',
    height: 'auto',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    gap: normalize(10, 'width'),
  },
});
