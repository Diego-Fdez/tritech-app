import { Colors } from '@/constants/Colors';
import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';

export const styles = StyleSheet.create({
  carouselContainer: {
    position: 'relative',
    height: normalize(200),
    width: '100%',
  },
  card: {
    height: normalize(144.795),
    borderRadius: normalize(25),
    shadowColor: Colors.light.tint,
    shadowOffset: {
      width: 0,
      height: 18,
    },
    shadowOpacity: 0.75,
    shadowRadius: 20.0,
    elevation: 24,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
    borderRadius: normalize(25),
  },
  whiteBoard: {
    width: normalize(150),
    height: normalize(51.932),
    borderRadius: normalize(30),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: normalize(-38),
  },
  itemTitle: {
    fontWeight: '600',
    fontSize: normalize(16),
    color: Colors.light.tint,
    textAlign: 'center',
    fontFamily: 'UbuntuMedium',
  },
});
