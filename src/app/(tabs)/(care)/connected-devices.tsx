import { Text } from 'react-native';

import BackgroundWhite from '@/ovok-ui/background-white';
import ButtonBasic from '@/ovok-ui/button-basic';

export default function ConnectedDevices() {
  return (
    <BackgroundWhite>
      <ButtonBasic
        title="BlackBox"
        iconNameLeft="black-box"
        iconNameRight="disconnect"
      />
      <ButtonBasic
        title="Care Kit_Cardio"
        iconNameLeft="care-kit-cardio"
        iconNameRight="disconnect"
      />
      <ButtonBasic
        title="Apple Watch"
        iconNameLeft="apple-watch"
        iconNameRight="disconnect"
      />
      <Text className="mb-3 mt-6 text-[16px] font-semibold text-[rgb(29,29,29)]">
        Connect a Device
      </Text>
      <ButtonBasic
        title="Blood Box"
        iconNameLeft="blood-box"
        iconNameRight="connect"
      />
      <ButtonBasic
        title="Care Kit Glucose Monitor"
        iconNameLeft="care-kit-cardio"
        iconNameRight="connect"
      />
      <ButtonBasic
        title="Study 20DRT5 Device"
        iconNameLeft="device"
        iconNameRight="connect"
      />
    </BackgroundWhite>
  );
}
