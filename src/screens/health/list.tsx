import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { Button, FocusAwareStatusBar, Text, View } from '@/ui';

export const HealthConnect = () => {
  const { navigate } = useNavigation();

  return (
    <View className="flex-1 ">
      <FocusAwareStatusBar />

      <View className="flex flex-col py-40 justify-center items-center">
        <Text variant="xl" numberOfLines={3} className="py-6 font-bold">
          {'Connect Google Fit'}
        </Text>
        <Button
          label="Add Health Devices"
          onPress={() =>
            navigate('AddHealthDevices', { userId: '', deviceToken: '' })
          }
        />
      </View>
    </View>
  );
};
