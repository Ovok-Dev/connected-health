import type { RouteProp } from '@/navigation/types';
import * as React from 'react';
import { StyleSheet } from 'react-native';

import { ActivityIndicator, View } from '@/ui';
import { MetriportWidget } from '@metriport/react-native-sdk';
import { useRoute } from '@react-navigation/native';

export const AddHealthDevices = () => {
  const { params } = useRoute<RouteProp<'AddHealthDevices'>>();
  const deviceToken = params?.deviceToken;
  // const { navigate } = useNavigation();

  if (!deviceToken) {
    return (
      <View className="flex-1  justify-center">
        <ActivityIndicator />
      </View>
    );
  }
  return (
    <View>
      {deviceToken && (
        <MetriportWidget
          token={deviceToken}
          clientApiKey="SmllVFFfZkY5WWdQbGM3TWYxcm4tOjY1OGRkMDVjLWZjZGItNDc3MS1hMzY4LThhNmVhNTg4ZWQ3Mw"
          sandbox={true}
          style={styles.box}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    width: '100%',
    height: '100%',
  },
});
