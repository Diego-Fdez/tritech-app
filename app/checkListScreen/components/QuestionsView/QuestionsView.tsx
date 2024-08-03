import { GestureDetector } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { ThemedInput, ThemedText, ThemedView } from '@/components';
import { styles } from './styles/QuestionView.styles';
import QuestionTypeView from '../QuestionTypeView/QuestionTypeView';
import { useCheckList } from '../../hooks';
import { Colors } from '@/constants';
import { useColorScheme } from '@/hooks/useColorScheme';

interface InputsInterface {
  id: string;
  value: string;
}

interface QuestionsViewProps {
  index: number;
  questionId: string;
  questionInputs: InputsInterface[];
  //type: string;
  //setType: (type: string) => void;
  animatedStyle: any;
  handleInputChange: (
    questionId: string,
    inputId: string,
    type: string,
    text: string
  ) => void;
  handleInputQuestionChange: (questionId: string, text: string) => void;
}

const QuestionsView = ({
  index,
  questionId,
  questionInputs,
  //type,
  //setType,
  animatedStyle,
  handleInputChange,
  handleInputQuestionChange,
}: QuestionsViewProps) => {
  const { panGesture, setType, type } = useCheckList();
  const colorScheme = useColorScheme();

  return (
    <ThemedView style={styles.container}>
      <GestureDetector gesture={panGesture}>
        <Animated.View style={[animatedStyle, styles.animatedContainer]}>
          <ThemedView style={styles.wrapper}>
            <ThemedView style={styles.buttonsContainer}>
              <ThemedText type='defaultSemiBold'>
                {index + 1}. Tipo de pregunta:
              </ThemedText>
              <QuestionTypeView setType={setType} />
            </ThemedView>
            <ThemedInput
              placeholder='Pregunta sin título'
              onChangeText={(text) =>
                handleInputQuestionChange(questionId, text)
              }
            />
            {questionInputs.map((input, index) => {
              if (type === 'Párrafo') {
                return (
                  <ThemedInput
                    key={input.id}
                    placeholder={`Opción ${index + 1}`}
                    value={input.value}
                    onChangeText={(text) =>
                      handleInputChange(questionId, input.id, type, text)
                    }
                  />
                );
              } else if (type === 'Selección única') {
                return (
                  <ThemedView key={input.id}>
                    <ThemedView style={styles.bouncyContainer}>
                      <BouncyCheckbox
                        size={25}
                        fillColor={Colors.light.tint}
                        unFillColor={Colors[colorScheme ?? 'light'].background}
                        iconStyle={{ borderColor: Colors.light.tint }}
                        innerIconStyle={{ borderWidth: 2 }}
                        style={{ width: 25 }}
                      />
                      <ThemedInput
                        style={styles.bouncyInput}
                        placeholder={`Opción 1`}
                        value={input.value}
                        onChangeText={(text) =>
                          handleInputChange(questionId, input.id, type, text)
                        }
                      />
                    </ThemedView>
                    <ThemedView style={styles.bouncyContainer} key={input.id}>
                      <BouncyCheckbox
                        size={25}
                        fillColor={Colors.light.tint}
                        unFillColor={Colors[colorScheme ?? 'light'].background}
                        iconStyle={{ borderColor: Colors.light.tint }}
                        innerIconStyle={{ borderWidth: 2 }}
                        style={{ width: 25 }}
                      />
                      <ThemedInput
                        style={styles.bouncyInput}
                        placeholder={`Opción 2`}
                        value={input.value}
                        onChangeText={(text) =>
                          handleInputChange(questionId, input.id, type, text)
                        }
                      />
                    </ThemedView>
                  </ThemedView>
                );
              }
              return null;
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
