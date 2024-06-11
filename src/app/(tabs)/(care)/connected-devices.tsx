import { useNavigation } from 'expo-router';
import { useEffect, useState } from 'react';
import { Text } from 'react-native';

import BackgroundWhite from '@/ovok-ui/background-white';
import ButtonBasic from '@/ovok-ui/button-basic';

export default function ConnectedDevices() {
  const [blackBoxConnected, setBlackBoxConnected] = useState<boolean>(true);
  const [careKitCardioConnected, setCareKitCardioConnected] =
    useState<boolean>(true);
  const [appleWatchConnected, setAppleWatchConnected] = useState<boolean>(true);
  const [bloodBoxConnected, setBloodBoxConnected] = useState<boolean>(false);
  const [careKitGlucoseConnected, setCareKitGlucoseConnected] =
    useState<boolean>(false);
  const [study20drt5Connected, setStudy20drt5Connected] =
    useState<boolean>(false);

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ title: 'Connected Devices' });
  }, [navigation]);

  return (
    <BackgroundWhite>
      <ButtonBasic
        title="BlackBox"
        iconNameLeft="black-box"
        iconNameRight={blackBoxConnected ? 'disconnect' : 'connect'}
        onPress={() => setBlackBoxConnected((prev) => !prev)}
      />
      <ButtonBasic
        title="Care Kit_Cardio"
        iconNameLeft="care-kit-cardio"
        iconNameRight={careKitCardioConnected ? 'disconnect' : 'connect'}
        onPress={() => setCareKitCardioConnected((prev) => !prev)}
      />
      <ButtonBasic
        title="Apple Watch"
        iconNameLeft="apple-watch"
        iconNameRight={appleWatchConnected ? 'disconnect' : 'connect'}
        onPress={() => setAppleWatchConnected((prev) => !prev)}
      />
      <Text className="mb-3 mt-6 text-[16px] font-semibold text-[rgb(29,29,29)]">
        Connect a Device
      </Text>
      <ButtonBasic
        title="Blood Box"
        iconNameLeft="blood-box"
        iconNameRight={bloodBoxConnected ? 'disconnect' : 'connect'}
        onPress={() => setBloodBoxConnected((prev) => !prev)}
      />
      <ButtonBasic
        title="Care Kit Glucose Monitor"
        iconNameLeft="care-kit-cardio"
        iconNameRight={careKitGlucoseConnected ? 'disconnect' : 'connect'}
        onPress={() => setCareKitGlucoseConnected((prev) => !prev)}
      />
      <ButtonBasic
        title="Study 20DRT5 Device"
        iconNameLeft="device"
        iconNameRight={study20drt5Connected ? 'disconnect' : 'connect'}
        onPress={() => setStudy20drt5Connected((prev) => !prev)}
      />
    </BackgroundWhite>
  );
}
