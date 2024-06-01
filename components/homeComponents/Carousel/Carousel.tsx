import { View, Text, Dimensions, Image, TouchableOpacity } from 'react-native';
import Animated, { useSharedValue } from 'react-native-reanimated';
import { router } from 'expo-router';
import { BUTTONS_DATA } from './constants';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';
import { styles } from './styles/Carousel.styles';

const { width } = Dimensions.get('window');
const CARD_LENGTH = width * 0.8;
const SPACING = width * 0.02;
const SIDE_CARD_LENGTH = (width * 0.18) / 2;

const Carousel = () => {
  const colorScheme = useColorScheme();
  let scrollX = useSharedValue<number>(0);

  const handleScroll = (event: any) => {
    scrollX.value = event.nativeEvent.contentOffset.x;
  };

  return (
    <Animated.View
      style={[
        styles.carouselContainer,
        { backgroundColor: Colors[colorScheme ?? 'light'].background },
      ]}
    >
      <Animated.ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={handleScroll}
        decelerationRate='fast'
        snapToInterval={CARD_LENGTH + SPACING * 4.3}
        snapToAlignment='center'
      >
        {BUTTONS_DATA.map((item, index) => (
          <TouchableOpacity
            onPress={() => router.navigate(item.redirectTo)}
            key={item.id}
            style={[
              styles.card,
              {
                width: CARD_LENGTH,
                marginLeft: index === 0 ? SIDE_CARD_LENGTH : SPACING,
                marginRight:
                  index === BUTTONS_DATA.length - 1
                    ? SIDE_CARD_LENGTH
                    : SPACING,
              },
            ]}
          >
            <Image source={item.image} style={styles.image} />
            <View
              style={[
                styles.whiteBoard,
                { backgroundColor: Colors[colorScheme ?? 'light'].background },
              ]}
            >
              <Text style={styles.itemTitle}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </Animated.ScrollView>
    </Animated.View>
  );
};

export default Carousel;
