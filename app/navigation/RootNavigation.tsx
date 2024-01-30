import React from 'react';
import {TransitionPresets, createStackNavigator} from '@react-navigation/stack';

import SplashScreen from '../screens/SplashScreen';
import HomeScreen from '../screens/HomeScreen';

import {RootStackParamList, RouteConstants} from '../utils/types';

const Stack = createStackNavigator<RootStackParamList>();
export default function RootNavigation(): React.JSX.Element {
  return (
    <Stack.Navigator
      initialRouteName={RouteConstants.Splash}
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}>
      <Stack.Screen name={RouteConstants.Splash} component={SplashScreen} />
      <Stack.Screen
        name={RouteConstants.Home}
        component={HomeScreen}
        options={{
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
    </Stack.Navigator>
  );
}
