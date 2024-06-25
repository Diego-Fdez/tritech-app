import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';
import { tintColorLight } from '@/constants/Colors';

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  wrapper: {
    width: '100%',
    paddingHorizontal: normalize(20, 'width'),
    marginTop: '25%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  refreshButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    marginBottom: normalize(20, 'height'),
  },
  addButton: {
    position: 'absolute',
    bottom: normalize(40, 'height'),
    right: normalize(20, 'width'),
    width: 'auto',
    height: 'auto',
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    width: '100%',
    height: normalize(40, 'height'),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: normalize(8),
    position: 'relative',
    marginBottom: normalize(30, 'height'),
  },
  icon: {
    position: 'absolute',
    right: normalize(10, 'width'),
  },
  clientButton: {
    width: '100%',
    height: normalize(50, 'height'),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: normalize(16),
    backgroundColor: 'transparent',
    marginBottom: normalize(20, 'height'),
    borderBottomWidth: 1,
    borderEndColor: '#0a7da485',
    borderStartColor: '#0a7da485',
    borderBottomColor: tintColorLight,
    borderEndWidth: 1,
    borderStartWidth: 1,
  },
  dataContainer: {
    width: '100%',
    marginBottom: normalize(105, 'height'),
  },
  loadingContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
