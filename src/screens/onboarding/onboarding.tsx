import React from 'react';

import { useIsFirstTime } from '@/core/hooks';
import { Button, FocusAwareStatusBar, SafeAreaView, Text, View } from '@/ui';

import { Cover } from './cover';
export const Onboarding = () => {
  const [_, setIsFirstTime] = useIsFirstTime();
  return (
    <View className="flex justify-center items-center h-full">
      <FocusAwareStatusBar />
      <View className="flex-1 w-full">
        <Cover />
      </View>
      <View className="justify-end ">
        <Text className="my-3 text-center text-5xl font-bold">
          Welcome to Immerza
        </Text>
      </View>
      <SafeAreaView className="mt-6">
        <Button
          label="Let's Get Started "
          onPress={() => {
            setIsFirstTime(false);
          }}
        />
      </SafeAreaView>
    </View>
  );
};
