import { SafeAreaView, ScrollView } from 'react-native';
import { useState } from 'react';
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

const TemplateScreen = () => {
  const colorScheme = useColorScheme();
  const [tandemQuantity, setTandemQuantity] = useState<number>(0);
  const [millQuantity, setMillQuantity] = useState<number>(0);
  const [client, setClient] = useState<string>('');

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
          {tandemQuantity > 0 && millQuantity > 0 && client !== '' && (
            <>
              <TemplateInformation
                tandemQuantity={tandemQuantity}
                millQuantity={millQuantity}
              />
              <ThemedView style={styles.buttonContainer}>
                <ThemedButton title='Crear formato' />
              </ThemedView>
            </>
          )}
        </ScrollView>
      </ThemedView>
    </SafeAreaView>
  );
};

export default TemplateScreen;
