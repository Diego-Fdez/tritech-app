import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import BouncyCheckboxGroup, {
  CheckboxButton,
} from 'react-native-bouncy-checkbox-group';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {
  ErrorView,
  LoaderView,
  NavView,
  ThemedButton,
  ThemedInput,
  ThemedText,
  ThemedView,
} from '@/components';
import { Colors } from '@/constants';
import { useCheckListByIdScreen } from './hooks';
import { styles } from './styles/CheckListByIdScreen.styles';
import { QuestionTypes } from '../interfaces';

const CheckListByIdScreen = () => {
  const {
    data,
    isPending,
    isError,
    checkBoxGroupStyles,
    colorScheme,
    createCheckBoxGroup,
    handleAddAnswerValue,
    mutation,
  } = useCheckListByIdScreen();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        style='auto'
        translucent={false}
        backgroundColor={Colors.light.tint}
      />
      <KeyboardAvoidingView
        style={{ flex: 1, width: '100%' }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ThemedView style={styles.container}>
          <NavView />
          {isPending ? (
            <LoaderView />
          ) : (
            <ThemedView style={styles.wrapper}>
              {isError ? (
                <ErrorView title='Oops! ocurrió un problema al cargar el formulario.' />
              ) : (
                <>
                  <ThemedText type='subtitle' style={styles.title}>
                    {data?.[0]?.title}
                  </ThemedText>
                  <ThemedText style={styles.description}>
                    {data?.[0]?.description}
                  </ThemedText>
                  <ThemedText style={styles.client}>
                    Cliente: {data?.[0]?.clientName}
                  </ThemedText>
                  <ScrollView showsVerticalScrollIndicator={false}>
                    {data?.[0].questions?.map((item) => (
                      <ThemedView style={styles.formContainer} key={item?.id}>
                        <ThemedText
                          type='defaultSemiBold'
                          style={styles.questionText}
                        >
                          {`${item?.order}. ${item?.textQuestion}`}
                        </ThemedText>
                        <ThemedView style={styles.formContainer}>
                          {item?.typeQuestion === QuestionTypes.SINGLE ? (
                            <ThemedView style={styles.checkBoxContainer}>
                              <BouncyCheckboxGroup
                                data={createCheckBoxGroup(item.options)}
                                style={{ flexDirection: 'column' }}
                                checkboxProps={{ ...checkBoxGroupStyles }}
                                onChange={(selectedItem: CheckboxButton) => {
                                  const { textComponent, ...rest } =
                                    selectedItem;

                                  handleAddAnswerValue(
                                    rest.text ?? '',
                                    String(rest.id),
                                    item.id,
                                    item.typeQuestion
                                  );
                                }}
                              />
                            </ThemedView>
                          ) : item?.typeQuestion === QuestionTypes.TEXT ? (
                            <ThemedView style={styles.questionOptionContainer}>
                              <ThemedInput
                                placeholder='Escribe tu respuesta'
                                placeholderTextColor={
                                  Colors[colorScheme ?? 'light'].tabIconDefault
                                }
                                onChangeText={(text) =>
                                  handleAddAnswerValue(
                                    text,
                                    item?.options[0]?.id,
                                    item?.id,
                                    item?.typeQuestion
                                  )
                                }
                              />
                            </ThemedView>
                          ) : (
                            <ThemedView style={styles.checkBoxContainer}>
                              {item?.options?.map((option) => (
                                <BouncyCheckbox
                                  key={option.id}
                                  size={25}
                                  fillColor={Colors.light.tint}
                                  unFillColor={
                                    Colors[colorScheme ?? 'light'].background
                                  }
                                  iconStyle={{
                                    borderColor: Colors.light.tint,
                                    marginBottom: 5,
                                  }}
                                  innerIconStyle={{ borderWidth: 2 }}
                                  textStyle={{
                                    fontFamily: 'UbuntuRegular',
                                    color: Colors[colorScheme ?? 'light'].text,
                                    marginLeft: 0,
                                    textDecorationLine: 'none',
                                  }}
                                  text={option?.optionText}
                                  onPress={(isChecked: boolean) =>
                                    handleAddAnswerValue(
                                      option?.optionText,
                                      option?.id,
                                      option?.questionId,
                                      item.typeQuestion,
                                      isChecked
                                    )
                                  }
                                />
                              ))}
                            </ThemedView>
                          )}
                        </ThemedView>
                      </ThemedView>
                    ))}
                    <ThemedButton
                      style={styles.saveButton}
                      handlePress={() => mutation.mutate()}
                      title={
                        mutation.isPending
                          ? 'Guardando...'
                          : 'Guardar respuestas'
                      }
                      disabled={mutation.isPending}
                    />
                  </ScrollView>
                </>
              )}
            </ThemedView>
          )}
        </ThemedView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default CheckListByIdScreen;
