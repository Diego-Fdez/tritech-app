import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native';
import { ThemedView } from '@/components';
import { Colors } from '@/constants';
import { styles } from './styles/OptionsButtons.styles';

interface OptionsButtonsProps {
  handleAddPress: () => void;
  handleRemovePress: () => void;
}

const OptionsButtons = ({
  handleAddPress,
  handleRemovePress,
}: OptionsButtonsProps) => {
  return (
    <ThemedView style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleAddPress}>
        <MaterialIcons name='add-task' size={33} color={Colors.light.tint} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleRemovePress}>
        <MaterialIcons name='remove-circle' size={33} color='red' />
      </TouchableOpacity>
    </ThemedView>
  );
};

export default OptionsButtons;
