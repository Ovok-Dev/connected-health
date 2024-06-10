import { useNavigation } from 'expo-router';
import { useEffect, useState } from 'react';

import BackgroundWhite from '@/ovok-ui/background-white';
import ButtonBasic from '@/ovok-ui/button-basic';

export default function Language() {
  const navigation = useNavigation();

  const [selectedLanguage, setSelectedLanguage] = useState<
    'english' | 'german' | 'chinese' | 'arabic' | 'french'
  >('english');

  useEffect(() => {
    navigation.setOptions({ title: 'Language' });
  }, [navigation]);

  return (
    <BackgroundWhite>
      <ButtonBasic
        title="English"
        iconNameLeft="uk"
        iconNameRight={
          selectedLanguage === 'english' ? 'checkmark-black' : undefined
        }
        bold={false}
        onPress={() => setSelectedLanguage('english')}
      />
      <ButtonBasic
        title="German"
        iconNameLeft="germany"
        bold={false}
        iconNameRight={
          selectedLanguage === 'german' ? 'checkmark-black' : undefined
        }
        onPress={() => setSelectedLanguage('german')}
      />
      <ButtonBasic
        title="Chinese"
        iconNameLeft="china"
        bold={false}
        iconNameRight={
          selectedLanguage === 'chinese' ? 'checkmark-black' : undefined
        }
        onPress={() => setSelectedLanguage('chinese')}
      />
      <ButtonBasic
        title="Arabic"
        iconNameLeft="arabic"
        bold={false}
        iconNameRight={
          selectedLanguage === 'arabic' ? 'checkmark-black' : undefined
        }
        onPress={() => setSelectedLanguage('arabic')}
      />
      <ButtonBasic
        title="French"
        iconNameLeft="france"
        bold={false}
        iconNameRight={
          selectedLanguage === 'french' ? 'checkmark-black' : undefined
        }
        onPress={() => setSelectedLanguage('french')}
      />
    </BackgroundWhite>
  );
}
