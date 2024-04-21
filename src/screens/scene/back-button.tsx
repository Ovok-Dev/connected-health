import { screenSize, windowWidth } from '@/components/sized-box';
import type { FC } from 'react';
import React from 'react';
import {
  Platform,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { SvgXml } from 'react-native-svg';

type Props = {
  readonly onPress: () => void;
  readonly isAbsoluteLocation: boolean;
  readonly iconColor: string | null;
};
const BUTTON_SIZE = windowWidth / 11;
const backButtonSvg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" id="arrow-back-ios"><path fill="none" d="M0 0h24v24H0V0z" opacity=".87"></path><path d="M17.51 3.87L15.73 2.1 5.84 12l9.9 9.9 1.77-1.77L9.38 12l8.13-8.13z"></path></svg>
`;

export const BackButtonOnPicture: FC<Props> = (props: Props) => (
  <TouchableWithoutFeedback onPress={props.onPress}>
    <View
      style={props.isAbsoluteLocation ? styles.abBackButton : styles.backButton}
    >
      {/* <Image
        style={[styles.icon, { tintColor: props.iconColor ?? undefined }]}
        source={require('../../images/main_header.png')}
      /> */}
      <SvgXml
        width="24"
        height="24"
        xml={backButtonSvg}
        fill={props.iconColor ?? undefined}
      />
    </View>
  </TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
  backButton: {
    width: BUTTON_SIZE,
    height: BUTTON_SIZE,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 100,
  },
  abBackButton: {
    backgroundColor: 'rgba(0, 0, 0, 0.03)',
    position: 'absolute',
    left: screenSize.width / 20,
    top:
      Platform.OS === 'android'
        ? screenSize.width / 11
        : screenSize.height * 0.05,
    width: (BUTTON_SIZE * 4) / 3,
    height: (BUTTON_SIZE * 4) / 3,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    zIndex: 100,
  },
  icon: {
    height: (BUTTON_SIZE * 2) / 3,
    resizeMode: 'contain',
  },
  whiteIcon: {
    tintColor: 'white',
  },
});
