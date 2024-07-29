import { BarChart } from 'react-native-gifted-charts';
import ViewShot from 'react-native-view-shot';
import { ThemedText } from '@/components';
import { useSnapShoot, useTemperatureDataReportScreen } from '../../hooks';
import { styles } from '../ChartsView/styles/ChartsView.styles';
import { ABBREVIATE_NAME, GENERATE_COLOR } from '../../utils';

const GearsChartsView = () => {
  const { data: temperatures, chartProps } = useTemperatureDataReportScreen();
  const { gearTandem1SnapShootRef, gearTandem2SnapShootRef } = useSnapShoot();

  return (
    <>
      {temperatures?.tandem1Corona[0]?.id !== undefined && (
        <ViewShot ref={gearTandem1SnapShootRef} style={styles.snapView}>
          <ThemedText type='subtitle' style={styles.subTitle}>
            Temperaturas Coronas
          </ThemedText>
          <ThemedText type='default' style={styles.subTitle}>
            Tandem 1
          </ThemedText>
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
        </ViewShot>
      )}
      {temperatures?.tandem2Corona[0]?.id !== undefined && (
        <ViewShot ref={gearTandem2SnapShootRef} style={styles.snapView}>
          <ThemedText type='subtitle' style={styles.subTitle}>
            Temperaturas Coronas
          </ThemedText>
          <ThemedText type='default' style={styles.subTitle}>
            Tandem 2
          </ThemedText>
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
        </ViewShot>
      )}
    </>
  );
};

export default GearsChartsView;
