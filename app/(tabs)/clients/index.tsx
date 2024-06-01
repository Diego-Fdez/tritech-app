import { SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { NavView, ThemedInput, ThemedView } from '@/components';
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
            />
            <Ionicons
              name='search'
              size={24}
              color={Colors[colorScheme ?? 'light'].text}
              style={styles.icon}
            />
          </ThemedView>
        </ThemedView>
      </ThemedView>
    </SafeAreaView>
  );
};

export default ClientsScreen;
