import { StatusBar } from 'expo-status-bar';
import {
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Colors } from '@/constants';
import {
  ErrorView,
  NavView,
  ThemedInput,
  ThemedText,
  ThemedView,
} from '@/components';
import { styles } from './styles/CheckListScreen.styles';
import { ClientPicker } from '../temperatureTemplate/components';
import { useCheckList } from './hooks';
import { QuestionsView } from './components';
import { useColorScheme } from '@/hooks/useColorScheme';

const CheckListScreen = () => {
  const colorScheme = useColorScheme();
  const {
    setClient,
    handleAddQuestion,
    questions,
    setType,
    type,
    animatedStyle,
    handleInputChange,
    handleInputQuestionChange,
  } = useCheckList();

  const error = false;

  return (
    <GestureHandlerRootView>
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
            <ThemedView style={styles.wrapper}>
              {error ? (
                <ErrorView title='Lo sentimos ocurrió un problema al cargar la página.' />
              ) : (
                <ScrollView
                  style={styles.scrollContainer}
                  showsVerticalScrollIndicator={false}
                >
                  <ThemedText type='title' style={styles.title}>
                    Crea tu CheckList
                  </ThemedText>
                  <ThemedView style={styles.inputContainer}>
                    <ThemedText type='defaultSemiBold'>Título:</ThemedText>
                    <ThemedInput
                      placeholder='Formulario sin título'
                      placeholderTextColor={
                        Colors[colorScheme ?? 'light'].tabIconDefault
                      }
                    />
                  </ThemedView>
                  <ThemedView style={styles.inputContainer}>
                    <ThemedText type='defaultSemiBold'>Descripción:</ThemedText>
                    <ThemedInput
                      placeholder='Descripción del formulario'
                      placeholderTextColor={
                        Colors[colorScheme ?? 'light'].tabIconDefault
                      }
                    />
                  </ThemedView>
                  <ThemedView
                    style={[styles.inputContainer, styles.clientContainer]}
                  >
                    <ThemedText type='defaultSemiBold'>Cliente:</ThemedText>
                    <ClientPicker setClient={setClient} />
                  </ThemedView>
                  {questions.map((question, index) => (
                    <QuestionsView
                      key={question.id}
                      index={index}
                      questionId={question.id}
                      questionInputs={question.inputs}
                      //type={type}
                      //setType={setType}
                      animatedStyle={animatedStyle}
                      handleInputChange={handleInputChange}
                      handleInputQuestionChange={handleInputQuestionChange}
                    />
                  ))}
                </ScrollView>
              )}
              {!error && (
                <TouchableOpacity
                  style={styles.addButton}
                  onPress={handleAddQuestion}
                >
                  <MaterialIcons
                    name='add-circle'
                    size={55}
                    color={Colors.light.tint}
                  />
                </TouchableOpacity>
              )}
            </ThemedView>
          </ThemedView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default CheckListScreen;
