import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';
import { tintColorLight } from '@/constants/Colors';

export const styles = StyleSheet.create({
  container: {
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
  addButton: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: normalize(6, 'width'),
    marginBottom: normalize(20, 'height'),
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
    paddingBottom: normalize(20, 'height'),
  },
  loadingContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
