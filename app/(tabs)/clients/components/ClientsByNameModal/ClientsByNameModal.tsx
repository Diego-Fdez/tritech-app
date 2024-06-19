import { Modal, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { ThemedText, ThemedView } from '@/components';
import { styles } from './styles/ClientsByNameModal.styles';
import ClientsListView from '../ClientsListView/ClientsListView';
import { useClients } from '../../hooks';
import { ClientsInterface } from '../../interfaces';

interface ClientsByNameModalProps {
  clientsModal: boolean;
  onCloseModal: () => void;
  clientsByName: ClientsInterface[];
  onClientsOptionsModal: (id: string, clientName: string) => void;
}

const ClientsByNameModal = ({
  clientsModal,
  onCloseModal,
  clientsByName,
  onClientsOptionsModal,
}: ClientsByNameModalProps) => {
  const { isLoading } = useClients();

  return (
    <Modal
      animationType='slide'
      transparent={true}
      visible={clientsModal}
      onRequestClose={onCloseModal}
    >
      <ThemedView style={styles.container}>
        <TouchableOpacity onPress={onCloseModal} style={styles.closeButton}>
          <FontAwesome name='window-close' size={26} color='#db1212' />
        </TouchableOpacity>
        <ThemedText type='title' style={styles.title}>
          Resultados de búsqueda:
        </ThemedText>
        {!isLoading && (
          <ClientsListView
            clients={clientsByName}
            onClientsOptionsModal={onClientsOptionsModal}
          />
        )}
      </ThemedView>
    </Modal>
  );
};

export default ClientsByNameModal;
