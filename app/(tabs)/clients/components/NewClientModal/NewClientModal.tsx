import { Modal, TouchableOpacity, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import {
  CountriesView,
  ThemedButton,
  ThemedInput,
  ThemedText,
  ThemedView,
} from '@/components';
import { styles } from './styles/NewClientModal.styles';
import { Colors } from '@/constants';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useClients } from '../../hooks';

interface NewClientModalProps {
  newClientModal: boolean;
  onCloseModal: () => void;
}

const NewClientModal = ({
  newClientModal,
  onCloseModal,
}: NewClientModalProps) => {
  const colorScheme = useColorScheme();
  const { setCountry, newClientName, setNewClientName, mutation } =
    useClients();

  return (
    <Modal
      visible={newClientModal}
      animationType='slide'
      presentationStyle='pageSheet'
      onRequestClose={onCloseModal}
    >
      <ThemedView style={styles.container}>
        <TouchableOpacity onPress={onCloseModal} style={styles.closeButton}>
          <FontAwesome name='window-close' size={26} color='#db1212' />
        </TouchableOpacity>
        <ThemedText type='subtitle' style={styles.title}>
          Nuevo Cliente
        </ThemedText>
        <ThemedInput
          placeholder='Ingenio Taboga'
          placeholderTextColor={Colors[colorScheme ?? 'light'].tabIconDefault}
          value={newClientName}
          onChangeText={setNewClientName}
        />
        <CountriesView setCountry={setCountry} style={styles.countryPicker} />
        <ThemedButton
          title={mutation.isPending ? 'Cargando...' : 'Crear cliente'}
          handlePress={() => mutation.mutate()}
          disabled={mutation.isPending}
        />
        <Image
          source={require('@/assets/images/add-client.webp')}
          style={styles.image}
        />
      </ThemedView>
    </Modal>
  );
};

export default NewClientModal;
