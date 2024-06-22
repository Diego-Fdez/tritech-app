import { FlatList, TouchableOpacity, Alert } from 'react-native';
import { router } from 'expo-router';
import { NoDataView, ThemedText } from '@/components';
import { styles } from '../../styles/ClientsScreen.styles';
import { ClientsInterface } from '../../interfaces';
import { useClients } from '../../hooks';

interface ClientsListViewProps {
  clients: ClientsInterface[];
}

const ClientsListView = ({ clients }: ClientsListViewProps) => {
  const { deleteMutation } = useClients();

  return (
    <>
      {clients[0]?.id?.length > 0 ? (
        <FlatList
          horizontal={false}
          style={styles.dataContainer}
          data={clients}
          keyExtractor={(item) => item?.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.clientButton}
              onPress={() =>
                router.navigate(`/temperatureTemplate/clientId/${item?.id}`)
              }
              onLongPress={() => {
                Alert.alert(
                  'Eliminar cliente',
                  '¿Estás seguro de que quieres eliminar este cliente?',
                  [
                    {
                      text: 'Cancelar',
                      style: 'cancel',
                    },
                    {
                      text: 'Eliminar',
                      onPress: () => deleteMutation.mutate(item?.id),
                    },
                  ]
                );
              }}
            >
              <ThemedText type='defaultSemiBold'>
                {item?.clientName?.toUpperCase()}
              </ThemedText>
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
