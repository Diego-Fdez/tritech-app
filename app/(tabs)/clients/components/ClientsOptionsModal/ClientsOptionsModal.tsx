import { Modal, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import { ThemedButton, ThemedText, ThemedView } from '@/components';
import { styles } from './styles/ClientsOptionsModal.styles';
import { useUserStore } from '@/store';
import { ADMIN_USER } from '@/constants';

interface UseMutationOptions {
  isPending: boolean;
  mutate: () => void;
}

interface ClientsOptionsModalProps {
  clientsOptionsModal: boolean;
  setClientsOptionsModal: (value: boolean) => void;
  deleteMutation: UseMutationOptions;
  clientName: string;
  clientId: string;
}

const ClientsOptionsModal = ({
  clientsOptionsModal,
  setClientsOptionsModal,
  deleteMutation,
  clientName,
  clientId,
}: ClientsOptionsModalProps) => {
  const user = useUserStore((state) => state.user);

  return (
    <Modal
      animationType='slide'
      transparent={true}
      visible={clientsOptionsModal}
      onRequestClose={() => setClientsOptionsModal(!clientsOptionsModal)}
      style={styles.container}
    >
      <ThemedView style={styles.wrapper}>
        <TouchableOpacity
          onPress={() => setClientsOptionsModal(!clientsOptionsModal)}
          style={styles.closeButton}
        >
          <FontAwesome name='window-close' size={26} color='#db1212' />
        </TouchableOpacity>
        <ThemedView style={styles.buttonsContainer}>
          <ThemedText type='subtitle' style={styles.title}>
            {clientName?.toUpperCase()}
          </ThemedText>
          {user?.role === ADMIN_USER && (
            <ThemedButton
              title={
                deleteMutation?.isPending ? 'Cargando...' : 'Eliminar cliente'
              }
              handlePress={() => deleteMutation.mutate()}
              disabled={deleteMutation?.isPending}
            />
          )}
          <ThemedButton
            title='Ir a los formatos'
            handlePress={() => {
              router.navigate(`/temperatureTemplate/clientId/${clientId}`);
              () => setClientsOptionsModal(!clientsOptionsModal);
            }}
          />
        </ThemedView>
      </ThemedView>
    </Modal>
  );
};

export default ClientsOptionsModal;
