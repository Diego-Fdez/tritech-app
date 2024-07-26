import { SafeAreaView, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Colors } from '@/constants';
import { LoaderView, NavView, ThemedText, ThemedView } from '@/components';
import { styles } from './styles/TemperatureDataReportScreen.styles';
import { useTemperatureDataReportScreen } from './hooks';
import { ChartsView, GearsChartsView, Tandem2ChartsView } from './components';

const TemperatureDataReportView = () => {
  const { isPending } = useTemperatureDataReportScreen();

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
          {isPending ? (
            <LoaderView />
          ) : (
            <ScrollView
              style={styles.scrollContainer}
              showsVerticalScrollIndicator={false}
            >
              <ThemedText type='defaultSemiBold' style={styles.description}>
                Este reporte presenta los datos de las temperaturas registradas
                en los bronces de los molinos. La información se ha recopilado
                con el objetivo de monitorear el estado de los componentes y
                detectar posibles anomalías que puedan afectar el funcionamiento
                de los molinos.
              </ThemedText>
              <ChartsView />
              <Tandem2ChartsView />
              <GearsChartsView />
            </ScrollView>
          )}
        </ThemedView>
      </ThemedView>
    </SafeAreaView>
  );
};

export default TemperatureDataReportView;
