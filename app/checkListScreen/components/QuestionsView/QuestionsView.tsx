import { GestureDetector } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { ThemedInput, ThemedText, ThemedView } from '@/components';
import { styles } from './styles/QuestionView.styles';
import QuestionTypeView from '../QuestionTypeView/QuestionTypeView';
import { Colors } from '@/constants';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useCheckList } from '../../context/checkListProvider';
import { useGestures } from '../../hooks';
import { OptionsButtons } from './components';
import { QuestionsViewProps } from '../../interfaces';

const QuestionsView = ({
  index,
  questionId,
  questionInputs,
  questionType,
}: QuestionsViewProps) => {
  const {
    handleInputChange,
    handleInputQuestionChange,
    handleQuestionTypeChange,
    handleAddInput,
    handleDeleteInput,
  } = useCheckList();
  const colorScheme = useColorScheme();
  const { animatedStyle, panGesture } = useGestures({ questionId });

  return (
    <ThemedView style={styles.container}>
      <GestureDetector gesture={panGesture}>
        <Animated.View style={[animatedStyle, styles.animatedContainer]}>
          <ThemedView style={styles.wrapper}>
            <ThemedView style={styles.buttonsContainer}>
              <ThemedText type='defaultSemiBold'>
                {index + 1}. Tipo de pregunta:
              </ThemedText>
              <QuestionTypeView
                setType={(type) => handleQuestionTypeChange(questionId, type)}
              />
            </ThemedView>
            <ThemedInput
              placeholder='Pregunta sin título'
              onChangeText={(text) =>
                handleInputQuestionChange(questionId, text)
              }
            />
            {questionInputs.map((input, index) => {
              if (questionType === 'Párrafo') {
                return (
                  <ThemedInput
                    key={input.id}
                    placeholder={`Opción ${index + 1}`}
                    value={input.value}
                    onChangeText={(text) =>
                      handleInputChange(
                        questionId,
                        input.id,
                        questionType,
                        text
                      )
                    }
                  />
                );
              } else {
                if (
                  questionType === 'Selección multiple' ||
                  questionType === 'Selección única'
                ) {
                  return (
                    <ThemedView key={input.id}>
                      <OptionsButtons
                        handleAddPress={() => handleAddInput(questionId)}
                        handleRemovePress={() =>
                          handleDeleteInput(questionId, input.id)
                        }
                      />
                      <ThemedView style={styles.bouncyContainer}>
                        <BouncyCheckbox
                          size={25}
                          fillColor={Colors.light.tint}
                          unFillColor={
                            Colors[colorScheme ?? 'light'].background
                          }
                          iconStyle={{ borderColor: Colors.light.tint }}
                          innerIconStyle={{ borderWidth: 2 }}
                          style={{ width: 25 }}
                          disabled={true}
                        />
                        <ThemedInput
                          style={styles.bouncyInput}
                          placeholder={`Sin descripción`}
                          value={input.value}
                          onChangeText={(text) =>
                            handleInputChange(
                              questionId,
                              input.id,
                              questionType,
                              text
                            )
                          }
                        />
                      </ThemedView>
                    </ThemedView>
                  );
                }
              }
            })}
          </ThemedView>
        </Animated.View>
      </GestureDetector>
      <ThemedView style={styles.removeView}>
        <MaterialCommunityIcons name='delete-forever' size={24} color='#fff' />
      </ThemedView>
    </ThemedView>
  );
};

export default QuestionsView;
