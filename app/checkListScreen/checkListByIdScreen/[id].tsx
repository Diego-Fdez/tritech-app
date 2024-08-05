import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  FlatList,
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
            <>
              {isError ? (
                <ErrorView title='Oops! ocurrió un problema al cargar el formulario.' />
              ) : (
                <ThemedView style={styles.wrapper}>
                  <ThemedText type='subtitle' style={styles.title}>
                    {data?.[0]?.title}
                  </ThemedText>
                  <ThemedText style={styles.description}>
                    {data?.[0]?.description}
                  </ThemedText>
                  <ThemedText style={styles.client}>
                    Cliente: {data?.[0]?.clientName}
                  </ThemedText>
                  <FlatList
                    data={data?.[0].questions}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                    style={{ width: '100%' }}
                    renderItem={({ item }) => (
                      <ThemedView style={styles.formContainer}>
                        <ThemedText
                          type='defaultSemiBold'
                          style={styles.questionText}
                        >
                          {`${item?.order}. ${item?.textQuestion}`}
                        </ThemedText>
                        <ThemedView style={styles.formContainer}>
                          {item?.typeQuestion === QuestionTypes.SINGLE ? (
                            <BouncyCheckboxGroup
                              data={createCheckBoxGroup(item.options)}
                              style={{ flexDirection: 'column' }}
                              checkboxProps={{ ...checkBoxGroupStyles }}
                              onChange={(selectedItem: CheckboxButton) => {
                                const { textComponent, ...rest } = selectedItem;
                                console.log(
                                  'SelectedItem: ',
                                  JSON.stringify(rest)
                                );
                              }}
                            />
                          ) : item?.typeQuestion === QuestionTypes.TEXT ? (
                            <ThemedView style={styles.questionOptionContainer}>
                              <ThemedInput
                                placeholder='Escribe tu respuesta'
                                placeholderTextColor={
                                  Colors[colorScheme ?? 'light'].tabIconDefault
                                }
                              />
                            </ThemedView>
                          ) : (
                            <>
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
                                />
                              ))}
                            </>
                          )}
                        </ThemedView>
                      </ThemedView>
                    )}
                  />
                  <ThemedButton title='Guardar Formulario' />
                </ThemedView>
              )}
            </>
          )}
        </ThemedView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default CheckListByIdScreen;
