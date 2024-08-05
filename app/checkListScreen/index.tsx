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
  NavView,
  ThemedButton,
  ThemedInput,
  ThemedText,
  ThemedView,
} from '@/components';
import { styles } from './styles/CheckListScreen.styles';
import { ClientPicker } from '../temperatureTemplate/components';
import { QuestionsView } from './components';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useCheckList } from './context/checkListProvider';

const CheckListScreen = () => {
  const colorScheme = useColorScheme();
  const {
    setClient,
    handleAddQuestion,
    questions,
    mutation,
    setDescription,
    setTitle,
    title,
    description,
  } = useCheckList();

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
                    onChangeText={setTitle}
                    value={title}
                  />
                </ThemedView>
                <ThemedView style={styles.inputContainer}>
                  <ThemedText type='defaultSemiBold'>Descripción:</ThemedText>
                  <ThemedInput
                    placeholder='Descripción del formulario'
                    placeholderTextColor={
                      Colors[colorScheme ?? 'light'].tabIconDefault
                    }
                    onChangeText={setDescription}
                    value={description}
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
                    questionType={question.type}
                  />
                ))}
                <ThemedButton
                  title={
                    mutation.isPending ? 'Guardando...' : 'Guardar formulario'
                  }
                  handlePress={() => mutation.mutate()}
                  disabled={mutation.isPending}
                />
              </ScrollView>
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
            </ThemedView>
          </ThemedView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default CheckListScreen;
