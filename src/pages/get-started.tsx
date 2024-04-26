import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { Text, View } from 'react-native';

import type { Option } from '@/ui';
import { Input, Select } from '@/ui';

const areaCodeOptions: Option[] = [
  { value: '+233', label: '+233' },
  { value: '+49', label: '+49' },
];

export default function GetStarted() {
  const [areaCode, setAreaCode] = useState(areaCodeOptions[0].value);

  return (
    <View className="flex-1">
      <LinearGradient
        colors={['#4f506f', '#756233']}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        className="flex-1"
      >
        <View className="mx-9 mt-[350px]">
          <View>
            <Text className="mb-3 text-center font-jost font-bold text-[white]">
              Get Started!
            </Text>
            <Text className="mb-6 text-center font-jost text-[white]">
              Getting started is just a tap away. Input your number and we'll
              guide you forward.
            </Text>
          </View>
          <View className="flex-row">
            <Select
              label="Select"
              options={areaCodeOptions}
              value={areaCode}
              onSelect={(option) => setAreaCode(option)}
            />
            <Input label="phone" placeholder="Enter your number" />
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}
