import { View, Text } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import { Entypo } from '@expo/vector-icons';
import { styles } from './styles/ClientPicker.styles';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';

const CLIENTS = [
  {
    id: '1',
    clientName: 'Taboga',
  },
  {
    id: '2',
    clientName: 'El Viejo',
  },
  {
    id: '3',
    clientName: 'Catsa',
  },
];

interface ClientPickerPropsInterface {
  setClient: (client: string) => void;
}

const ClientPicker = ({ setClient }: ClientPickerPropsInterface) => {
  const colorScheme = useColorScheme();

  return (
    <SelectDropdown
      data={CLIENTS}
      onSelect={(selectedItem) => {
        setClient(selectedItem);
      }}
      renderButton={(selectedItem, isOpened) => {
        return (
          <View
            style={[
              { backgroundColor: Colors[colorScheme ?? 'light'].background },
              styles.dropdownButtonStyle,
            ]}
          >
            <Text
              style={[
                { color: Colors[colorScheme ?? 'light'].text },
                styles.dropdownButtonTxtStyle,
              ]}
            >
              {(selectedItem && selectedItem.clientName) ||
                'Selecciona un cliente'}
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
            <Text style={styles.dropdownItemTxtStyle}>{item.clientName}</Text>
          </View>
        );
      }}
      showsVerticalScrollIndicator={false}
      dropdownStyle={styles.dropdownMenuStyle}
    />
  );
};

export default ClientPicker;
