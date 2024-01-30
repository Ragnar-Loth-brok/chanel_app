import React, {useCallback, useEffect} from 'react';
import {View, StyleSheet, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import MaskedView from '@react-native-masked-view/masked-view';
import Animated, {
  BounceInUp,
  FadeInUp,
  FlipInYRight,
  LinearTransition,
  ZoomInUp,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

import {Fonts, common} from '../utils/preStyles';
import {fp, hp, hpp, wp} from '../utils/config';
import {colors} from '../utils/colors';
import {RootStackParamList, RouteConstants} from '../utils/types';
import {CONSTANT_STRING} from '../utils/string';

const image = require('../assets/images/2.jpeg');

export default function SplashScreen(): React.JSX.Element {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const animate = useSharedValue<number>(0);

  const navigateHome = useCallback(() => {
    navigation.navigate(RouteConstants.Home);
  }, [navigation]);

  const animateImage = useAnimatedStyle(() => {
    const scale = interpolate(animate.value, [0, 1], [2, 1]);
    return {
      transform: [{scale: withSpring(scale)}],
    };
  }, []);

  const animateContainer = useAnimatedStyle(() => {
    const scale = interpolate(animate.value, [0, 1], [1, 1.1]);
    const translateY = interpolate(
      animate.value,
      [0, 0.3, 0.7, 1],
      [0, 5, -5, 0],
    );
    return {
      transform: [
        {scale: withSpring(scale)},
        {translateY: withSpring(translateY)},
      ],
    };
  }, []);

  useEffect(() => {
    animate.value = withDelay(500, withTiming(1, {duration: 5000}));
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Text
        layout={LinearTransition}
        entering={FadeInUp.delay(1000)}
        style={styles.title}>
        {CONSTANT_STRING.name}
      </Animated.Text>
      <MaskedView
        style={[common.full_screen]}
        maskElement={
          <View style={[common.full_screen, common.center]}>
            <Animated.View
              layout={LinearTransition}
              entering={FlipInYRight.delay(1000).springify().duration(4000)}>
              <Animated.View
                layout={LinearTransition}
                entering={ZoomInUp.delay(1000).duration(3000).springify()}>
                <Animated.View
                  layout={LinearTransition}
                  entering={BounceInUp.delay(1000).springify()}>
                  <Animated.View style={[animateContainer]}>
                    <View
                      style={[
                        styles.centerContainer,
                        styles.centerContainerDimension,
                        styles.shadow,
                      ]}
                    />
                  </Animated.View>
                </Animated.View>
              </Animated.View>
            </Animated.View>
          </View>
        }>
        <View style={[common.full_screen, common.center, styles.subContainer]}>
          <Pressable
            style={[styles.centerContainerDimension]}
            onPress={navigateHome}>
            <Animated.Image
              layout={LinearTransition}
              source={image}
              style={[styles.imageDimension, animateImage]}
              resizeMode="cover"
            />
          </Pressable>
        </View>
      </MaskedView>
      {/*  */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgS,
  },
  subContainer: {
    backgroundColor: colors.bgP,
  },
  centerContainer: {
    borderRadius: wp(50),
    backgroundColor: colors.bgP,
    marginTop: hpp(50),
  },
  centerContainerDimension: {
    width: wp(85),
    height: wp(85),
  },
  imageDimension: {
    width: hp(40),
    height: wp(100),
  },
  title: {
    position: 'absolute',
    fontFamily: Fonts.S_700,
    fontSize: fp(42),
    letterSpacing: 5,
    color: colors.bgP,
    alignSelf: 'center',
    marginTop: hpp(150),
  },
  shadow: {
    shadowColor: colors.bgP,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,
    elevation: 21,
  },
});
