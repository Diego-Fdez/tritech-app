import { View, Image, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from './styles/NavView.styles';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';

const NavView = () => {
  const colorScheme = useColorScheme();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.back()}>
        <MaterialIcons
          name='arrow-back-ios'
          size={24}
          color={Colors[colorScheme ?? 'light'].text}
        />
      </TouchableOpacity>
      <Image
        source={require('@/assets/images/tritech.webp')}
        style={styles.logo}
      />
    </View>
  );
};

export default NavView;
