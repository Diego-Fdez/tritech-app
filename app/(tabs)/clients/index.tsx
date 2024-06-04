import {
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import {
  ErrorView,
  NavView,
  NoDataView,
  ThemedInput,
  ThemedText,
  ThemedView,
} from '@/components';
import { styles } from './styles/ClientsScreen.styles';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';
import { useClients } from './hooks';

const ClientsScreen = () => {
  const colorScheme = useColorScheme();
  const { clients, isPending, error } = useClients();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        style='auto'
        translucent={false}
        backgroundColor={Colors.light.tint}
      />
      <ThemedView style={styles.container}>
        <NavView />
        <ThemedView style={styles.wrapper}>
          {error && <ErrorView title={error.message} />}
          <>
            <ThemedView style={styles.inputContainer}>
              <ThemedInput
                placeholder='Buscar cliente'
                keyboardType='web-search'
                showIcon={true}
                placeholderTextColor={
                  Colors[colorScheme ?? 'light'].tabIconDefault
                }
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
              <>
                {clients ? (
                  <FlatList
                    style={styles.dataContainer}
                    data={clients}
                    keyExtractor={(item) => item?.id}
                    renderItem={({ item }) => (
                      <TouchableOpacity style={styles.clientButton}>
                        <ThemedText type='defaultSemiBold'>
                          {item?.clientName}
                        </ThemedText>
                      </TouchableOpacity>
                    )}
                  />
                ) : (
                  <NoDataView title='Aún no hay clientes registrados' />
                )}
              </>
            )}
          </>
        </ThemedView>
      </ThemedView>
    </SafeAreaView>
  );
};

export default ClientsScreen;
