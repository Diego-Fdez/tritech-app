import { FlatList, View } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import normalize from 'react-native-normalize';
import { ThemedText, ThemedView } from '@/components';
import { COMPONENTS } from './constants/componentsData';
import { styles } from './styles/TemplateInformation.styles';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';
import { useTemperatureTemplate } from '../../context/TemperatureTemplateProvider';

const TemplateInformation = () => {
  const colorScheme = useColorScheme();
  const { TANDEM_ARRAY, MILL_ARRAY, handleCheckboxChange, checkboxes } =
    useTemperatureTemplate();

  return (
    <>
      {TANDEM_ARRAY?.map((tandemIndex) => (
        <ThemedView style={styles.container} key={tandemIndex}>
          <ThemedText type='subtitle' style={styles.titles}>
            Tandem {tandemIndex}
          </ThemedText>
          <>
            {MILL_ARRAY?.map((millIndex) => (
              <View key={millIndex} style={styles.wrapper}>
                <ThemedText type='defaultSemiBold' style={styles.titles}>
                  Molino {millIndex}
                </ThemedText>
                <FlatList
                  data={COMPONENTS}
                  renderItem={({ item, index }) => (
                    <ThemedView
                      style={[
                        styles.card,
                        {
                          marginLeft: index === 0 ? normalize(20, 'width') : 0,
                        },
                      ]}
                    >
                      <ThemedView style={styles.itemWrapper}>
                        <BouncyCheckbox
                          size={25}
                          fillColor={Colors.light.tint}
                          unFillColor={
                            Colors[colorScheme ?? 'light'].background
                          }
                          text={item?.component1}
                          iconStyle={{ borderColor: Colors.light.tint }}
                          innerIconStyle={{ borderWidth: 2 }}
                          textStyle={{
                            fontFamily: 'UbuntuRegular',
                            color: Colors[colorScheme ?? 'light'].text,
                          }}
                          isChecked={
                            checkboxes[
                              `${tandemIndex}-${millIndex}-${item?.component1}`
                            ] || false
                          }
                          onPress={(isChecked: boolean) => {
                            handleCheckboxChange(
                              tandemIndex,
                              millIndex,
                              item?.component1,
                              isChecked
                            );
                          }}
                        />
                      </ThemedView>
                      <ThemedView style={styles.itemWrapper}>
                        <BouncyCheckbox
                          size={25}
                          fillColor={Colors.light.tint}
                          unFillColor={
                            Colors[colorScheme ?? 'light'].background
                          }
                          text={item?.component2}
                          iconStyle={{ borderColor: Colors.light.tint }}
                          innerIconStyle={{ borderWidth: 2 }}
                          textStyle={{
                            fontFamily: 'UbuntuRegular',
                            color: Colors[colorScheme ?? 'light'].text,
                          }}
                          isChecked={
                            checkboxes[
                              `${tandemIndex}-${millIndex}-${item?.component2}`
                            ] || false
                          }
                          onPress={(isChecked: boolean) => {
                            handleCheckboxChange(
                              tandemIndex,
                              millIndex,
                              item?.component2,
                              isChecked
                            );
                          }}
                        />
                      </ThemedView>
                    </ThemedView>
                  )}
                  keyExtractor={(item) => item?.id}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                />
              </View>
            ))}
          </>
        </ThemedView>
      ))}
    </>
  );
};

export default TemplateInformation;
