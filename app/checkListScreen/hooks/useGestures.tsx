import {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { Gesture } from 'react-native-gesture-handler';
import { Alert } from 'react-native';
import { useCheckList } from '../context/checkListProvider';

interface GestureProps {
  questionId: string;
}

const useGesture = ({ questionId }: GestureProps) => {
  const translateX = useSharedValue(0);
  const { handleDeleteQuestion } = useCheckList();

  const handleDelete = () => {
    Alert.alert('Eliminar', '¿Deseas eliminar esta pregunta?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'OK', onPress: () => handleDeleteQuestion(questionId) },
    ]);
    translateX.value = 0;
  };

  const panGesture = Gesture.Pan()
    .onStart((event) => {
      translateX.value = event.translationX;
    })
    .onUpdate((event) => {
      const newTranslateX = translateX.value + event.translationX;
      if (newTranslateX < 0 && newTranslateX >= -50) {
        translateX.value = newTranslateX;
      }
    })
    .onEnd(() => {
      if (translateX.value <= -40) {
        translateX.value = withSpring(-50);
        runOnJS(handleDelete)();
      } else {
        translateX.value = withSpring(0);
      }
    });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  return { panGesture, animatedStyle };
};

export default useGesture;
