import {
  SafeAreaView,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import {
  ErrorView,
  NavView,
  ThemedInput,
  ThemedText,
  ThemedView,
} from '@/components';
import { styles } from './styles/ClientsScreen.styles';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';
import { useClients } from './hooks';
import {
  ClientsByNameModal,
  ClientsListView,
  NewClientModal,
} from './components';
import { useClientStore, useUserStore } from '@/store';
import { ADMIN_USER } from '@/constants';

const ClientsScreen = () => {
  const user = useUserStore((state) => state.user);
  const clients = useClientStore((state) => state.clients);
  const colorScheme = useColorScheme();
  const {
    isPending,
    error,
    clientName,
    setClientName,
    clientsModal,
    onCloseModal,
    onSubmitEditing,
    clientsByName,
    onNewClientModal,
    newClientModal,
    getClients,
  } = useClients();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        style='auto'
        translucent={false}
        backgroundColor={Colors.light.tint}
      />
      <ThemedView style={styles.container}>
        <NavView />
        {user?.role === ADMIN_USER && (
          <TouchableOpacity style={styles.addButton} onPress={onNewClientModal}>
            <Ionicons
              name='add-circle-sharp'
              size={60}
              color={Colors.light.tint}
            />
          </TouchableOpacity>
        )}
        <ThemedView style={styles.wrapper}>
          {error && <ErrorView title={error.message} />}
          <>
            <TouchableOpacity style={styles.refreshButton} onPress={getClients}>
              <Ionicons name='refresh' size={26} color={Colors.light.tint} />
              <ThemedText type='subtitle'>Actualizar clientes</ThemedText>
            </TouchableOpacity>
            <ThemedView style={styles.inputContainer}>
              <ThemedInput
                placeholder='Buscar cliente'
                showIcon={true}
                placeholderTextColor={
                  Colors[colorScheme ?? 'light'].tabIconDefault
                }
                value={clientName}
                onChangeText={setClientName}
                onSubmitEditing={onSubmitEditing}
              />
              <Ionicons
                name='search'
                size={24}
                color={Colors[colorScheme ?? 'light'].text}
                style={styles.icon}
              />
            </ThemedView>
            {isPending ? (
              <ThemedView style={styles.loadingContainer}>
                <ActivityIndicator size='large' color={Colors.light.tint} />
                <ThemedText type='defaultSemiBold'>Cargando...</ThemedText>
              </ThemedView>
            ) : (
              <ClientsListView clients={clients} />
            )}
          </>
        </ThemedView>
      </ThemedView>
      <ClientsByNameModal
        clientsModal={clientsModal}
        onCloseModal={onCloseModal}
        clientsByName={clientsByName || []}
      />
      <NewClientModal
        onCloseModal={onNewClientModal}
        newClientModal={newClientModal}
      />
    </SafeAreaView>
  );
};

export default ClientsScreen;
