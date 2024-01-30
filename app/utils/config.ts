import {Dimensions, Platform, StatusBar} from 'react-native';
import DeviceInfo from 'react-native-device-info';

export const STATUSBAR_HEIGHT: Readonly<number | undefined> =
  Platform.OS === 'android'
    ? StatusBar.currentHeight
    : DeviceInfo.isTablet()
    ? 20
    : 44;

interface DeviceDimension {
    height: number,
    width: number
}

export const defaultDeviceSize: Readonly<DeviceDimension> = {
  height: 812,
  width: 375,
};

const deviceHeight: Readonly<number> =
  Dimensions.get('screen').height || defaultDeviceSize.height;
const deviceWidth: Readonly<number> = Dimensions.get('screen').width || defaultDeviceSize.width;

export const hp = (value: number): number => {
  return (deviceHeight * value) / 100;
};

export const wp = (value: number): number => {
  return (deviceWidth * value) / 100;
};

export const ICON_SF: Readonly<number> = hp(100) / defaultDeviceSize.height;
export const Width_SF: Readonly<number> = wp(100) / defaultDeviceSize.width;

export const fp = (val: number): number => {
  return val * ICON_SF;
};

export const hpp = (val: number): number => {
  return val * ICON_SF;
};

export const wpp = (val: number): number => {
  return val * Width_SF;
};