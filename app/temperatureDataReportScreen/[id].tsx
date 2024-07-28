import { SafeAreaView, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Suspense, lazy } from 'react';
import { Colors } from '@/constants';
import {
  LoaderView,
  NavView,
  ThemedButton,
  ThemedText,
  ThemedView,
} from '@/components';
import { styles } from './styles/TemperatureDataReportScreen.styles';
import { useSnapShoot, useTemperatureDataReportScreen } from './hooks';
const ChartsView = lazy(() => import('./components/ChartsView/ChartsView'));
const GearsChartsView = lazy(
  () => import('./components/GearsChartsView/GearsChartsView')
);
const Tandem2ChartsView = lazy(
  () => import('./components/Tandem2ChartsView/Tandem2ChartsView')
);

const TemperatureDataReportView = () => {
  const { isPending } = useTemperatureDataReportScreen();
  const { handleCreatePDF, isLoading } = useSnapShoot();

  return (
    <Suspense fallback={<LoaderView />}>
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
                  Este reporte presenta los datos de las temperaturas
                  registradas en los bronces de los molinos. La información se
                  ha recopilado con el objetivo de monitorear el estado de los
                  componentes y detectar posibles anomalías que puedan afectar
                  el funcionamiento de los molinos.
                </ThemedText>
                <ChartsView />
                <Tandem2ChartsView />
                <GearsChartsView />
                <ThemedButton
                  title={isLoading ? 'Generando PDF...' : 'Generar PDF'}
                  style={isLoading ? styles.disabledButton : styles.button}
                  handlePress={handleCreatePDF}
                  disabled={isLoading}
                />
              </ScrollView>
            )}
          </ThemedView>
        </ThemedView>
      </SafeAreaView>
    </Suspense>
  );
};

export default TemperatureDataReportView;
