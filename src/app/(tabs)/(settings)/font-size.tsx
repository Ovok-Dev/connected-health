import { useNavigation } from 'expo-router';
import React, { useEffect, useState } from 'react';

import BackgroundWhite from '@/ovok-ui/background-white';
import CustomRadioButton from '@/ovok-ui/custom-radio-button';

export default function FontSize() {
  const navigation = useNavigation();

  const [selectedSize, setSelectedSize] = useState<
    'regular' | 'large' | 'x-large'
  >('regular');

  useEffect(() => {
    navigation.setOptions({ title: 'Font Size' });
  }, [navigation]);

  return (
    <BackgroundWhite>
      <CustomRadioButton
        selected={selectedSize === 'regular'}
        fontSize={14}
        textRight="14px"
        onPress={() => setSelectedSize('regular')}
      >
        Regular
      </CustomRadioButton>
      <CustomRadioButton
        selected={selectedSize === 'large'}
        fontSize={20}
        textRight="20px"
        onPress={() => setSelectedSize('large')}
      >
        Large
      </CustomRadioButton>
      <CustomRadioButton
        selected={selectedSize === 'x-large'}
        fontSize={24}
        textRight="24px"
        onPress={() => setSelectedSize('x-large')}
      >
        XLarge
      </CustomRadioButton>
    </BackgroundWhite>
  );
}
