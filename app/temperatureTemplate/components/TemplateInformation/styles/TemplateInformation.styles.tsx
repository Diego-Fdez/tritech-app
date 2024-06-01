import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: normalize(10, 'height'),
  },
  titles: {
    alignSelf: 'flex-start',
    marginLeft: normalize(20, 'width'),
  },
  wrapper: {
    flex: 1,
    width: '100%',
  },
  card: {
    width: normalize(250, 'width'),
    height: normalize(80, 'height'),
    padding: normalize(10),
    borderRadius: normalize(8),
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: normalize(20, 'height'),
    marginTop: normalize(5, 'height'),
    marginRight: normalize(20, 'width'),
    borderWidth: 1,
    borderColor: '#0a7da481',
    shadowColor: '#0a7ea4',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.19,
    shadowRadius: 5.62,
    elevation: 6,
  },
  itemWrapper: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
