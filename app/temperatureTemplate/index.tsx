import { SafeAreaView, ScrollView, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { styles } from './styles/TemperatureTemplate.styles';
import {
  ThemedView,
  NavView,
  ThemedText,
  ThemedInput,
  ThemedButton,
} from '@/components';
import { ClientPicker, TemplateInformation } from './components';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';
import { useTemperatureTemplate } from './context/TemperatureTemplateProvider';

const TemplateScreen = () => {
  const colorScheme = useColorScheme();
  const {
    tandemQuantity,
    setTandemQuantity,
    millQuantity,
    setMillQuantity,
    client,
    setClient,
    mutation,
  } = useTemperatureTemplate();

  if (mutation?.isError)
    Alert.alert(
      'Error',
      'En este momento no podemos crear tu formato, intenta luego.'
    );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        style='auto'
        translucent={false}
        backgroundColor={Colors.light.tint}
      />
      <ThemedView style={styles.container}>
        <NavView />
        <ThemedText type='title' style={styles.title}>
          Crear formato de temperaturas de molinos
        </ThemedText>
        <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
          <ThemedView style={styles.clientWrapper}>
            <ThemedText type='subtitle'>Cliente:</ThemedText>
            <ClientPicker setClient={setClient} />
          </ThemedView>
          <ThemedView style={styles.clientWrapper}>
            <ThemedText type='subtitle'>Cantidad de tandems:</ThemedText>
            <ThemedInput
              keyboardType='number-pad'
              style={[
                { backgroundColor: Colors[colorScheme ?? 'light'].background },
                { color: Colors[colorScheme ?? 'light'].text },
                styles.input,
              ]}
              placeholder='0'
              placeholderTextColor={
                Colors[colorScheme ?? 'light'].tabIconDefault
              }
              value={tandemQuantity.toString()}
              onChangeText={(text) => setTandemQuantity(Number(text))}
            />
          </ThemedView>
          <ThemedView style={styles.clientWrapper}>
            <ThemedText type='subtitle'>Cantidad de molinos:</ThemedText>
            <ThemedInput
              keyboardType='number-pad'
              style={[
                { backgroundColor: Colors[colorScheme ?? 'light'].background },
                { color: Colors[colorScheme ?? 'light'].text },
                styles.input,
              ]}
              placeholder='0'
              placeholderTextColor={
                Colors[colorScheme ?? 'light'].tabIconDefault
              }
              value={millQuantity.toString()}
              onChangeText={(text) => setMillQuantity(Number(text))}
            />
          </ThemedView>
          {tandemQuantity > 0 &&
            millQuantity > 0 &&
            client?.clientName !== '' && (
              <>
                <TemplateInformation />
                <ThemedView style={styles.buttonContainer}>
                  <ThemedButton
                    title={mutation.isPending ? 'Cargando...' : 'Crear formato'}
                    handlePress={() => mutation.mutate()}
                    disabled={mutation.isPending}
                  />
                </ThemedView>
              </>
            )}
        </ScrollView>
      </ThemedView>
    </SafeAreaView>
  );
};

export default TemplateScreen;
