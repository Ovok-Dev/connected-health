import { useNavigation } from 'expo-router';
import { useEffect, useState } from 'react';

import BackgroundWhite from '@/ovok-ui/background-white';
import ButtonBasic from '@/ovok-ui/button-basic';

export default function Preferences() {
  const navigation = useNavigation();

  const [darkModeOn, setDarkModeOn] = useState<boolean>(false);

  useEffect(() => {
    navigation.setOptions({ title: 'Preferences' });
  }, [navigation]);

  return (
    <BackgroundWhite>
      <ButtonBasic
        title="Dark Mode"
        iconNameLeft="moon"
        iconNameRight={darkModeOn ? 'switch' : 'switch-off'}
        bold={false}
        onPress={() => setDarkModeOn((prev) => !prev)}
      />
      <ButtonBasic
        title="Font Size"
        iconNameLeft="font-size"
        iconNameRight="arrow-right"
        bold={false}
        href="/(tabs)/(settings)/font-size"
      />
      <ButtonBasic
        title="Language"
        iconNameLeft="globe"
        iconNameRight="arrow-right"
        bold={false}
        href="/(tabs)/(settings)/language"
      />
    </BackgroundWhite>
  );
}
