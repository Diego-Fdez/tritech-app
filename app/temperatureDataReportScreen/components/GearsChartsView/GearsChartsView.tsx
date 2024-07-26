import { BarChart } from 'react-native-gifted-charts';
import { ThemedText, ThemedView } from '@/components';
import { useTemperatureDataReportScreen } from '../../hooks';
import { styles } from '../ChartsView/styles/ChartsView.styles';
import { ABBREVIATE_NAME, GENERATE_COLOR } from '../../utils';

const GearsChartsView = () => {
  const { data: temperatures, chartProps } = useTemperatureDataReportScreen();

  return (
    <>
      {temperatures?.tandem1Corona[0]?.id !== undefined && (
        <ThemedView style={styles.chartContainer}>
          <ThemedText type='subtitle'>Temperaturas Coronas</ThemedText>
          <BarChart
            data={temperatures?.tandem1M1Bronce?.map((item) => ({
              value: item.millComponent?.temperature || 0,
              label:
                ABBREVIATE_NAME[
                  item.millComponent?.componentName?.toLowerCase() || ''
                ],
              frontColor:
                GENERATE_COLOR[
                  item.millComponent?.componentName?.toLowerCase() || ''
                ],
            }))}
            {...chartProps}
          />
        </ThemedView>
      )}
      {temperatures?.tandem2Corona[0]?.id !== undefined && (
        <ThemedView style={styles.chartContainer}>
          <ThemedText type='subtitle'>Temperaturas Coronas Tandem 2</ThemedText>
          <BarChart
            data={temperatures?.tandem1M2Bronce?.map((item) => ({
              value: item.millComponent?.temperature || 0,
              label:
                ABBREVIATE_NAME[
                  item.millComponent?.componentName?.toLowerCase() || ''
                ],
              frontColor:
                GENERATE_COLOR[
                  item.millComponent?.componentName?.toLowerCase() || ''
                ],
            }))}
            {...chartProps}
          />
        </ThemedView>
      )}
    </>
  );
};

export default GearsChartsView;
