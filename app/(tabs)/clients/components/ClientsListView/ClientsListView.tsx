import { FlatList, TouchableOpacity } from 'react-native';
import { NoDataView, ThemedText } from '@/components';
import { ClientsInterface } from '../../interfaces';
import { styles } from '../../styles/ClientsScreen.styles';

interface ClientsListViewProps {
  clients: ClientsInterface[];
  onClientsOptionsModal: (id: string, clientName: string) => void;
}

const ClientsListView = ({
  clients,
  onClientsOptionsModal,
}: ClientsListViewProps) => {
  return (
    <>
      {clients?.length > 0 ? (
        <FlatList
          horizontal={false}
          style={styles.dataContainer}
          data={clients}
          keyExtractor={(item) => item?.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.clientButton}
              onPress={() => onClientsOptionsModal(item?.id, item?.clientName)}
            >
              <ThemedText type='defaultSemiBold'>{item?.clientName}</ThemedText>
            </TouchableOpacity>
          )}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <NoDataView title='Aún no hay clientes registrados' />
      )}
    </>
  );
};

export default ClientsListView;
