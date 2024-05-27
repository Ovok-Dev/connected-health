import { useNavigation } from 'expo-router';
import { useEffect } from 'react';

import BackgroundWhite from '@/ovok-ui/background-white';
import ButtonBasic from '@/ovok-ui/button-basic';

export default function Language() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ title: 'Language' });
  }, [navigation]);

  return (
    <BackgroundWhite>
      <ButtonBasic
        title="English"
        iconNameLeft="uk"
        iconNameRight="checkmark-black"
        bold={false}
      />
      <ButtonBasic title="German" iconNameLeft="germany" bold={false} />
      <ButtonBasic title="Chinese" iconNameLeft="china" bold={false} />
      <ButtonBasic title="Arabic" iconNameLeft="arabic" bold={false} />
      <ButtonBasic title="French" iconNameLeft="france" bold={false} />
    </BackgroundWhite>
  );
}
