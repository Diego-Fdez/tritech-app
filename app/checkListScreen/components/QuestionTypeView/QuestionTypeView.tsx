import { View, Text } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import { Entypo } from '@expo/vector-icons';
import { styles } from '../../../temperatureTemplate/components/ClientPicker/styles/ClientPicker.styles';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';

interface QuestionTypePickerPropsInterface {
  setType: (type: string) => void;
}

const QUESTION_TYPES = [
  {
    id: '1',
    type: 'Párrafo',
  },
  {
    id: '2',
    type: 'Selección multiple',
  },
  {
    id: '3',
    type: 'Selección única',
  },
];

const QuestionTypeView = ({ setType }: QuestionTypePickerPropsInterface) => {
  const colorScheme = useColorScheme();

  return (
    <SelectDropdown
      data={QUESTION_TYPES}
      onSelect={(selectedItem) => {
        setType(selectedItem.type);
      }}
      renderButton={(selectedItem, isOpened) => {
        return (
          <View
            style={[
              { backgroundColor: Colors[colorScheme ?? 'light'].background },
              styles.dropdownButtonStyle,
            ]}
          >
            <Text
              style={[
                { color: Colors[colorScheme ?? 'light'].text },
                styles.dropdownButtonTxtStyle,
              ]}
            >
              {selectedItem ? selectedItem.type : 'Selecciona un tipo'}
            </Text>
            <Entypo
              name={isOpened ? 'chevron-small-up' : 'chevron-small-down'}
              size={28}
              color={Colors[colorScheme ?? 'light'].text}
            />
          </View>
        );
      }}
      renderItem={(item, isSelected) => {
        return (
          <View
            style={{
              ...styles.dropdownItemStyle,
              ...(isSelected && { backgroundColor: '#D2D9DF' }),
            }}
          >
            <Text style={styles.dropdownItemTxtStyle}>{item.type}</Text>
          </View>
        );
      }}
      showsVerticalScrollIndicator={false}
      dropdownStyle={styles.dropdownMenuStyle}
    />
  );
};

export default QuestionTypeView;
