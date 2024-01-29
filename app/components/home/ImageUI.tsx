import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import Animated, {
  Extrapolation,
  SharedValue,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

import {ImageStructure} from '../../utils/types';
import {IMAGE_HEIGHT, INIT_IMAGE_HEIGHT, MAX_LENGTH} from '../../utils/dummy';

interface Props {
  imageData: ImageStructure;
  updatedPosition: SharedValue<number>;
}

export default function ImageUI({
  imageData,
  updatedPosition,
}: Props): React.JSX.Element {
  const maxHeight = useSharedValue(IMAGE_HEIGHT);
  const minHeight = useSharedValue(INIT_IMAGE_HEIGHT);

  const animateImage = useAnimatedStyle(() => {
    const height = interpolate(
      updatedPosition.value,
      [(imageData.id - 2) * -IMAGE_HEIGHT, (imageData.id - 1) * -IMAGE_HEIGHT],
      [minHeight.value, maxHeight.value],
      Extrapolation.CLAMP,
    );

    return {
      height: withSpring(height),
      transform: [{translateY: withSpring(updatedPosition.value)}],
    };
  }, []);

  useEffect(() => {
    if (MAX_LENGTH === imageData.id + 1) {
      maxHeight.value = IMAGE_HEIGHT + 2 * INIT_IMAGE_HEIGHT;
      minHeight.value = 2 * INIT_IMAGE_HEIGHT;
    }
  }, []);

  return (
    <View>
      <Animated.Image
        source={{uri: imageData.url}}
        // style={[styles.image2, animateImage2]}
        style={[animateImage]}
        resizeMode="cover"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {},
});
