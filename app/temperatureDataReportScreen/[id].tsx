import { SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Colors } from '@/constants';
import { NavView, ThemedText, ThemedView } from '@/components';
import { styles } from './styles/TemperatureDataReportScreen.styles';
import { useTemperatureDataReportScreen } from './hooks';

const TemperatureDataReportView = () => {
  const { data, isPending } = useTemperatureDataReportScreen();
  console.log(isPending);
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
          <ThemedText>Temperaturas</ThemedText>
        </ThemedView>
      </ThemedView>
    </SafeAreaView>
  );
};

export default TemperatureDataReportView;
