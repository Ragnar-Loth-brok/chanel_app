import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Animated, {
  Extrapolation,
  LinearTransition,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

import {common} from '../utils/preStyles';
import {colors} from '../utils/colors';
import {IMAGE_HEIGHT, IMAGE_URLS, MAX_LENGTH} from '../utils/dummy';
import {hp} from '../utils/config';
import {GestureDetector, Gesture} from 'react-native-gesture-handler';
import ImageUI from '../components/home/ImageUI';

export default function HomeScreen(): React.JSX.Element {
  const position = useSharedValue<number>(0);
  const updatedPosition = useSharedValue<number>(0);

  const pan = Gesture.Pan()
    .onStart(e => {
      // console.log(position.value);
    })
    .onUpdate(e => {
      if (
        position.value + updatedPosition.value + e.translationY < 50 &&
        position.value + updatedPosition.value + e.translationY >
          -MAX_LENGTH * IMAGE_HEIGHT
      ) {
        updatedPosition.value = position.value + e.translationY;
      }
    })
    .onEnd(e => {
      if (updatedPosition.value + e.translationY < 50) {
        position.value += e.translationY;
        const value = -Math.round(position.value / IMAGE_HEIGHT);
        updatedPosition.value = value * -IMAGE_HEIGHT;
      } else {
        position.value = 0;
        updatedPosition.value = 0;
      }
    });

  return (
    <View style={[common.full_screen, styles.container]}>
      <GestureDetector gesture={pan}>
        <View>
          {IMAGE_URLS.map(item => {
            return (
              <ImageUI
                updatedPosition={updatedPosition}
                imageData={item}
                key={item.id}
              />
            );
          })}
        </View>
      </GestureDetector>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bgP,
  },
});
