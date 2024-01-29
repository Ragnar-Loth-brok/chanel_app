import {TransitionPresets, createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import SplashScreen from '../screens/SplashScreen';
import HomeScreen from '../screens/HomeScreen';
import { RootStackParamList, RouteNames } from '../utils/types';

const Stack = createStackNavigator<RootStackParamList>();
export default function RootNavigation(): React.JSX.Element {
  return (
    <Stack.Navigator
      initialRouteName={RouteNames.Splash}
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}>
      <Stack.Screen name={RouteNames.Splash} component={SplashScreen} />
      <Stack.Screen
        name={RouteNames.Home}
        component={HomeScreen}
        options={{
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
    </Stack.Navigator>
  );
}
