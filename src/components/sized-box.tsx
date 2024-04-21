import * as React from 'react';
import { Dimensions, Platform, View } from 'react-native';

type ISizedBoxProps = {
  height: number | undefined;
  width: number | undefined;
  children?: React.ReactNode;
};
const { width, height } = Dimensions.get('window');

const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

export const isSmallDevice = (): boolean => {
  return Dimensions.get('window').height < 700;
};
export const isMediumDevice = (): boolean => {
  return Dimensions.get('window').height < 800;
};

export const isSmallestDevice = (): boolean => {
  return Dimensions.get('window').height < 600;
};

export const SizedBox: React.FC<ISizedBoxProps> = (props) => {
  return (
    <View style={{ width: props.width ?? 0, height: props.height ?? 0 }}>
      {props.children}
    </View>
  );
};

export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;

export const screenSize = {
  width,
  height,
  bottomBar: Platform.select({
    ios: 95,
    android: 65,
  }),
  appBar: 65,
};

const scale = (size: number): number =>
  (windowWidth / guidelineBaseWidth) * size;
export const verticalScale = (size: number): number =>
  (height / guidelineBaseHeight) * size;
export const moderateScale = (size: number, factor: number = 0.5): number =>
  size + (scale(size) - size) * factor;
