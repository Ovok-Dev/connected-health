import { useNavigation } from 'expo-router';
import { useEffect } from 'react';

import BackgroundWhite from '@/ovok-ui/background-white';
import ButtonBasic from '@/ovok-ui/button-basic';

export default function AddFromConnectedDevice() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ title: 'Add From Connected Device' });
  }, [navigation]);

  return (
    <BackgroundWhite>
      <ButtonBasic
        title="BlackBox"
        iconNameLeft="black-box"
        iconNameRight="selected"
      />
      <ButtonBasic
        title="Care Kit_Cardio"
        iconNameLeft="care-kit-cardio"
        iconNameRight="select"
      />
      <ButtonBasic
        title="Apple Watch"
        iconNameLeft="apple-watch"
        iconNameRight="select"
      />
    </BackgroundWhite>
  );
}
