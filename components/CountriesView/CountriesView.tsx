import { View, Text } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import { Entypo } from '@expo/vector-icons';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants';
import { styles } from './styles/CountriesView.styles';
import { COUNTRIES_NAMES } from './constants';

interface CountriesViewPropsInterface {
  setCountry: (country: string) => void;
  style?: object;
}

const CountriesView = ({ setCountry, style }: CountriesViewPropsInterface) => {
  const colorScheme = useColorScheme();

  return (
    <SelectDropdown
      data={COUNTRIES_NAMES}
      onSelect={(selectedItem) => {
        setCountry(selectedItem.name);
      }}
      renderButton={(selectedItem, isOpened) => {
        return (
          <View
            style={[
              { backgroundColor: Colors[colorScheme ?? 'light'].background },
              styles.dropdownButtonStyle,
              style,
            ]}
          >
            <Text
              style={[
                { color: Colors[colorScheme ?? 'light'].text },
                styles.dropdownButtonTxtStyle,
              ]}
            >
              {(selectedItem && selectedItem.name) || 'Selecciona un cliente'}
            </Text>
            <Entypo
              name={isOpened ? 'chevron-small-up' : 'chevron-small-down'}
              size={28}
              color={Colors[colorScheme ?? 'light'].text}
            />
          </View>
        );
      }}
      renderItem={(item, isSelected) => {
        return (
          <View
            style={{
              ...styles.dropdownItemStyle,
              ...(isSelected && { backgroundColor: '#D2D9DF' }),
            }}
          >
            <Text style={styles.dropdownItemTxtStyle}>{item.name}</Text>
          </View>
        );
      }}
      showsVerticalScrollIndicator={false}
      dropdownStyle={styles.dropdownMenuStyle}
    />
  );
};

export default CountriesView;
