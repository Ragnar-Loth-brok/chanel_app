import React, {useEffect, useMemo} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Animated, {
  Extrapolation,
  FadeInDown,
  SharedValue,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

import {ImageStructure} from '../../utils/types';
import {
  IMAGE_HEIGHT,
  INIT_IMAGE_HEIGHT,
  MAX_LENGTH,
  MIN_IMAGE_HEIGHT,
} from '../../utils/dummy';
import {Fonts, common} from '../../utils/preStyles';
import {colors} from '../../utils/colors';
import {fp, hp, wp} from '../../utils/config';

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

  const animateImageContainer = useAnimatedStyle(() => {
    const height = interpolate(
      updatedPosition.value,
      [(imageData.id - 2) * -IMAGE_HEIGHT, (imageData.id - 1) * -IMAGE_HEIGHT],
      [minHeight.value, maxHeight.value],
      Extrapolation.CLAMP,
    );

    return {
      height: withSpring(height, {damping: 14}),
      transform: [
        {
          translateY: withSpring(updatedPosition.value, {damping: 12}),
        },
      ],
    };
  }, []);

  const animateTextContainer = useAnimatedStyle(() => {
    const translateY = interpolate(
      updatedPosition.value,
      [(imageData.id - 2) * -IMAGE_HEIGHT, (imageData.id - 1) * -IMAGE_HEIGHT],
      [0, INIT_IMAGE_HEIGHT],
      Extrapolation.CLAMP,
    );
    return {
      transform: [{translateY: withSpring(translateY, {damping: 14})}],
    };
  }, []);

  const animateText = useAnimatedStyle(() => {
    const opacity = interpolate(
      updatedPosition.value,
      [(imageData.id - 2) * -IMAGE_HEIGHT, (imageData.id - 1) * -IMAGE_HEIGHT],
      [0, 1],
      Extrapolation.CLAMP,
    );
    return {
      opacity: opacity,
    };
  }, []);

  const subTitleStyle = useMemo(() => {
    let top = hp(38);
    if (MAX_LENGTH === imageData.id + 1) {
      top = hp(54);
    }
    return {
      top: top,
    };
  }, [imageData.id]);

  useEffect(() => {
    if (MAX_LENGTH === imageData.id + 1) {
      maxHeight.value = IMAGE_HEIGHT + 2 * INIT_IMAGE_HEIGHT;
      minHeight.value = 2 * INIT_IMAGE_HEIGHT;
    }
  }, []);

  return (
    <Animated.View entering={FadeInDown} style={[animateImageContainer]}>
      <Image
        src={imageData.url}
        resizeMode="cover"
        style={[StyleSheet.absoluteFill, styles.imgDimension]}
      />
      <View style={[styles.titleContainer]}>
        <Animated.View
          style={[animateTextContainer, common.center, common.flex]}>
          <Text style={styles.title}>{imageData.title}</Text>
          <Animated.Text style={[styles.subTitle, subTitleStyle, animateText]}>
            {imageData.subTitle}
          </Animated.Text>
        </Animated.View>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
  imgDimension: {
    minHeight: MIN_IMAGE_HEIGHT,
  },
  titleContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  title: {
    fontFamily: Fonts.P_500,
    fontSize: fp(16),
    letterSpacing: 1,
    color: colors.bgS,
    textTransform: 'uppercase',
  },
  subTitle: {
    fontFamily: Fonts.P_500,
    fontSize: fp(28),
    letterSpacing: 1.5,
    color: colors.bgS,
    textAlign: 'center',
    lineHeight: fp(34),
    width: wp(80),
    position: 'absolute',
    textTransform: 'uppercase',
  },
});
