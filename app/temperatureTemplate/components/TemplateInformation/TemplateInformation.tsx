import { FlatList, View } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import normalize from 'react-native-normalize';
import { ThemedText, ThemedView } from '@/components';
import { COMPONENTS } from './constants/componentsData';
import { styles } from './styles/TemplateInformation.styles';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';
import { randomIdGenerator } from '@/utils';

interface TemplateInformationProps {
  tandemQuantity: number;
  millQuantity: number;
}

const TemplateInformation = ({
  tandemQuantity,
  millQuantity,
}: TemplateInformationProps) => {
  const colorScheme = useColorScheme();
  const tandemArray = Array.from(
    { length: tandemQuantity },
    (_, index) => index + 1
  );
  const millArray = Array.from(
    { length: millQuantity },
    (_, index) => index + 1
  );

  return (
    <>
      {tandemArray?.map((index) => (
        <ThemedView style={styles.container} key={randomIdGenerator()}>
          <ThemedText type='subtitle' style={styles.titles}>
            Tandem {index}
          </ThemedText>
          <>
            {millArray?.map((index) => (
              <View key={randomIdGenerator()} style={styles.wrapper}>
                <ThemedText type='defaultSemiBold' style={styles.titles}>
                  Molino {index}
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
                          onPress={(isChecked: boolean) => {
                            console.log(isChecked);
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
                          onPress={(isChecked: boolean) => {
                            console.log(isChecked);
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
