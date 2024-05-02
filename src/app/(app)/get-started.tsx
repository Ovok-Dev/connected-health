import { StatusBar, Text, View } from 'react-native';

import BackgroundCircles from '@/ovok-ui/background-circles';
import ButtonWhite from '@/ovok-ui/button-white';
import { Input } from '@/ui';

export default function GetStarted() {
  return (
    <BackgroundCircles>
      <View
        className="mx-9"
        style={{
          marginTop: StatusBar.currentHeight
            ? 24 + StatusBar.currentHeight
            : 24,
        }}
      >
        <View className="mb-9">
          <Text className="mb-3 font-jost text-[28px] font-bold leading-[1.8] text-[white]">
            Get Started!
          </Text>
          <Text className="font-jost leading-[1.8] text-[white]">
            Getting started is just a tap away. Input your email and a password
            and we'll guide you forward.
          </Text>
        </View>
        <View className="mb-3 w-full">
          <Input
            placeholder="Enter your email"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            className="rounded-xl border border-[rgba(255,255,255,0.3)] bg-[rgba(255,255,255,0.06)] py-4 pl-6 text-[white]"
          />
        </View>
        <View className="w-full">
          <Input
            placeholder="Select a password"
            keyboardType="visible-password"
            autoCapitalize="none"
            autoCorrect={false}
            className="rounded-xl border border-[rgba(255,255,255,0.3)] bg-[rgba(255,255,255,0.06)] py-4 pl-6 text-[white]"
          />
        </View>
        <ButtonWhite>Continue</ButtonWhite>
      </View>
    </BackgroundCircles>
  );
}
