import React, {useCallback} from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';
import Animated, {
  BounceInUp,
  FlipInYLeft,
  FlipInYRight,
  LinearTransition,
  ZoomInUp,
} from 'react-native-reanimated';

import {Fonts, common} from '../utils/preStyles';
import {STATUSBAR_HEIGHT, fp, hp, hpp, wp} from '../utils/config';
import {colors} from '../utils/colors';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList, RouteNames} from '../utils/types';

const image = require('../assets/images/2.jpeg');

export default function SplashScreen(): React.JSX.Element {
  const navigation = useNavigation<StackNavigationProp<any>>();

  const navigateHome = useCallback(() => {
    // console.log('Pressing');

    navigation.navigate(RouteNames.Home);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <MaskedView
        style={common.full_screen}
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
                  <Animated.View style={[]}>
                    <View style={[styles.centerContainer, styles.centerContainerDimension, styles.shadow]} />
                  </Animated.View>
                </Animated.View>
              </Animated.View>
            </Animated.View>
          </View>
        }>
        <View style={[common.full_screen, common.center, styles.subContainer]}>
          <Pressable style={styles.centerContainerDimension} onPress={navigateHome}>
            <Image
              // source={{
                //   // uri: 'https://images.unsplash.com/photo-1585131552912-34847f8a5c60?q=80&w=3410&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              //   uri: 'https://images.unsplash.com/photo-1590156118008-98c92159207b?q=80&w=3435&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              // }}
              source={image}
              style={styles.imageDimension}
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
  },
  centerContainerDimension: {
    width: wp(85),
    height: wp(85),
  },
  imageDimension: {
    width: hp(40),
    height: wp(100),
    transform: [{translateY: -hp(5)}],
  },
  title: {
    fontFamily: Fonts.S_700,
    fontSize: fp(42),
    letterSpacing: 5,
    color: colors.bgS,
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
