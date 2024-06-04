import { SafeAreaView, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import {
  NavView,
  NoDataView,
  ThemedInput,
  ThemedText,
  ThemedView,
} from '@/components';
import { styles } from './styles/ClientsScreen.styles';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';

const ClientsScreen = () => {
  const colorScheme = useColorScheme();

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
          {/* <TouchableOpacity style={styles.clientButton}>
            <ThemedText type='defaultSemiBold'>Ingenio Taboga</ThemedText>
          </TouchableOpacity> */}
          <NoDataView title='Aún no hay clientes registrados' />
        </ThemedView>
      </ThemedView>
    </SafeAreaView>
  );
};

export default ClientsScreen;
