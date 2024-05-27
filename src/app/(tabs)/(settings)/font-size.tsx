import { useNavigation } from 'expo-router';
import React, { useEffect } from 'react';

import BackgroundWhite from '@/ovok-ui/background-white';
import CustomRadioButton from '@/ovok-ui/custom-radio-button';

export default function FontSize() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ title: 'Font Size' });
  }, [navigation]);

  return (
    <BackgroundWhite>
      <CustomRadioButton selected fontSize={14} textRight="14px">
        Regular
      </CustomRadioButton>
      <CustomRadioButton fontSize={20} textRight="20px">
        Large
      </CustomRadioButton>
      <CustomRadioButton fontSize={24} textRight="24px">
        XLarge
      </CustomRadioButton>
    </BackgroundWhite>
  );
}
