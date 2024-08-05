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
  const { data, isPending, isError, checkBoxGroupStyles, colorScheme } =
    useCheckListByIdScreen();

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
                    renderItem={({ item, index }) => (
                      <ThemedView style={styles.formContainer}>
                        <ThemedText type='defaultSemiBold'>
                          {`${index}. ${item?.textQuestion}`}
                        </ThemedText>
                        {item?.options?.map((option) => (
                          <ThemedView
                            key={option?.id}
                            style={styles.formContainer}
                          >
                            {item?.typeQuestion === QuestionTypes.MULTIPLE ||
                            item?.typeQuestion === QuestionTypes.SINGLE ? (
                              <ThemedView
                                style={styles.questionOptionContainer}
                              >
                                <BouncyCheckboxGroup
                                  data={[
                                    {
                                      id: `${option?.id}`,
                                      ...checkBoxGroupStyles,
                                    },
                                  ]}
                                  onChange={(selectedItem: CheckboxButton) => {
                                    console.log(
                                      'SelectedItem: ',
                                      JSON.stringify(selectedItem)
                                    );
                                  }}
                                />
                                <ThemedText>{option.optionText}</ThemedText>
                              </ThemedView>
                            ) : (
                              <ThemedView
                                style={styles.questionOptionContainer}
                              >
                                <ThemedInput
                                  placeholder='Escribe tu respuesta'
                                  placeholderTextColor={
                                    Colors[colorScheme ?? 'light']
                                      .tabIconDefault
                                  }
                                />
                              </ThemedView>
                            )}
                          </ThemedView>
                        ))}
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
