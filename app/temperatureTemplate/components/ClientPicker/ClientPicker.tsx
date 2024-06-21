import { View, Text } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import { Entypo } from '@expo/vector-icons';
import { styles } from './styles/ClientPicker.styles';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';
import { useClients } from '@/app/(tabs)/clients/hooks';
import { useClientStore } from '@/store';

interface ClientPickerPropsInterface {
  setClient: (client: { id: string; clientName: string }) => void;
}

const ClientPicker = ({ setClient }: ClientPickerPropsInterface) => {
  const colorScheme = useColorScheme();
  const clients = useClientStore((state) => state.clients);
  const { isPending } = useClients();

  return (
    <SelectDropdown
      data={clients || []}
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
              {selectedItem
                ? selectedItem?.clientName
                : isPending
                ? 'Cargando...'
                : 'Selecciona un cliente'}
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
      disabled={isPending}
    />
  );
};

export default ClientPicker;
