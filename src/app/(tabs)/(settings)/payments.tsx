import { useNavigation } from 'expo-router';
import { useEffect } from 'react';
import { Text } from 'react-native';

import BackgroundWhite from '@/ovok-ui/background-white';
import ButtonBasic from '@/ovok-ui/button-basic';

export default function Payments() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ title: 'Payment' });
  }, [navigation]);

  return (
    <BackgroundWhite>
      <Text className="text-[16px] font-semibold text-[rgb(29,29,29)]">
        Payments
      </Text>
      <ButtonBasic
        title="**** **** **** 5261"
        subtitle="Expires 09/28"
        iconNameLeft="mastercard"
      />
      <ButtonBasic
        title="**** **** **** 4322"
        subtitle="Expires 09/28"
        iconNameLeft="visa"
      />
      <Text className="mt-6 text-[16px] font-semibold text-[rgb(29,29,29)]">
        Add New
      </Text>
      <ButtonBasic
        title="Mobile Money"
        subtitle="Mobile Money (MTN/Vodafone/Airtel/Tigo)"
        iconNameLeft="mobile-money"
        iconNameRight="arrow-right"
        bold={false}
      />
      <ButtonBasic
        title="Add Credit Card"
        iconNameLeft="card"
        iconNameRight="arrow-right"
        bold={false}
        href="/(tabs)/(settings)/add-credit-card"
      />
      <ButtonBasic
        title="Link PayPal"
        iconNameLeft="paypal"
        iconNameRight="arrow-right"
        bold={false}
      />
    </BackgroundWhite>
  );
}
