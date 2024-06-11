import { useNavigation } from 'expo-router';
import { useEffect, useState } from 'react';

import BackgroundWhite from '@/ovok-ui/background-white';
import ButtonBasic from '@/ovok-ui/button-basic';

export default function AddFromConnectedDevice() {
  const [blackBoxSelected, setBlackBoxSelected] = useState<boolean>(true);
  const [careKitCardioSelected, setCareKitCardioSelected] =
    useState<boolean>(false);
  const [appleWatchSelected, setAppleWatchSelected] = useState<boolean>(false);

  const handleSelectedDeviceChange = (type: string) => {
    if (type === 'black-box') {
      setBlackBoxSelected(true);
      setCareKitCardioSelected(false);
      setAppleWatchSelected(false);
    } else if (type === 'care-kit-cardio') {
      setBlackBoxSelected(false);
      setCareKitCardioSelected(true);
      setAppleWatchSelected(false);
    } else if (type === 'apple-watch') {
      setBlackBoxSelected(false);
      setCareKitCardioSelected(false);
      setAppleWatchSelected(true);
    }
  };

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ title: 'Add From Connected Device' });
  }, [navigation]);

  return (
    <BackgroundWhite>
      <ButtonBasic
        title="BlackBox"
        iconNameLeft="black-box"
        iconNameRight={blackBoxSelected ? 'selected' : 'select'}
        onPress={() => handleSelectedDeviceChange('black-box')}
      />
      <ButtonBasic
        title="Care Kit_Cardio"
        iconNameLeft="care-kit-cardio"
        iconNameRight={careKitCardioSelected ? 'selected' : 'select'}
        onPress={() => handleSelectedDeviceChange('care-kit-cardio')}
      />
      <ButtonBasic
        title="Apple Watch"
        iconNameLeft="apple-watch"
        iconNameRight={appleWatchSelected ? 'selected' : 'select'}
        onPress={() => handleSelectedDeviceChange('apple-watch')}
      />
    </BackgroundWhite>
  );
}
