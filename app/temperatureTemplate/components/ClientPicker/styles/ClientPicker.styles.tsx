import { Colors } from '@/constants/Colors';
import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';

export const styles = StyleSheet.create({
  dropdownButtonStyle: {
    width: normalize(200, 'width'),
    height: normalize(40, 'height'),
    borderRadius: normalize(8),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: normalize(12, 'width'),
    borderWidth: 1,
    borderColor: Colors.light.tint,
  },
  dropdownButtonTxtStyle: {
    flex: 1,
    fontSize: normalize(16),
    fontWeight: '500',
  },
  dropdownMenuStyle: {
    backgroundColor: '#E9ECEF',
    borderRadius: normalize(8),
  },
  dropdownItemStyle: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: normalize(12, 'width'),
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: normalize(8, 'height'),
  },
  dropdownItemTxtStyle: {
    flex: 1,
    fontSize: normalize(18),
    fontWeight: '500',
    color: '#151E26',
  },
});
