import { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

import BackgroundWhite from '@/ovok-ui/background-white';
import ButtonColorful from '@/ovok-ui/button-colorful';

export default function AddCredicCard() {
  const [name, setName] = useState<string>('');
  const [cardNumber, setCardNumber] = useState<string>('');
  const [expires, setExpires] = useState<string>('');
  const [cvv, setCvv] = useState<string>('');

  return (
    <BackgroundWhite>
      <View className="flex-1">
        <Text className="text-[14px] text-[rgb(14,14,14)] ">Name</Text>
        <TextInput
          placeholder="Name on Card"
          value={name}
          onChangeText={(value) => setName(value)}
          className="mt-2 rounded-lg bg-white px-2 py-1"
        />
      </View>
      <View className="mt-2 flex-1">
        <Text className="text-[14px] text-[rgb(14,14,14)] ">Card Number</Text>
        <TextInput
          placeholder="XXXX XXXX XXXX XXXX"
          value={cardNumber}
          onChangeText={(value) => setCardNumber(value)}
          className="mt-2 rounded-lg bg-white px-2 py-1"
        />
      </View>
      <View className="my-2 flex-row items-center gap-4">
        <View className="flex-1">
          <Text className="text-[14px] text-[rgb(14,14,14)] ">Expires</Text>
          <TextInput
            placeholder="MM/YYYY"
            value={expires}
            onChangeText={(value) => setExpires(value)}
            className="mt-2 rounded-lg bg-white px-2 py-1"
          />
        </View>
        <View className="flex-1">
          <Text className="text-[14px] text-[rgb(14,14,14)] ">CVV</Text>
          <TextInput
            placeholder="XXX"
            value={cvv}
            onChangeText={(value) => setCvv(value)}
            className="mt-2 rounded-lg bg-white px-2 py-1"
          />
        </View>
      </View>
      <ButtonColorful>Save</ButtonColorful>
    </BackgroundWhite>
  );
}
