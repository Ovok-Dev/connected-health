import { useAuth } from '@/core';
import { AddHealthDevices, HealthConnect, HealthDevices } from '@/screens';
import { ActivityIndicator, Pressable, Text, View } from '@/ui';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios';
import type { Patient } from 'fhir/r4';
import * as React from 'react';

// import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type HealthStackParamList = {
  Health: { userId: string; deviceUserId: string | null };
  HealthDevices: { userId: string; deviceUserId: string | null };
  AddHealthDevices: { userId: string; deviceToken: string | null };
};

const Stack = createNativeStackNavigator<HealthStackParamList>();

export const HealthNavigator = () => {
  const profile: Patient = useAuth.use.token()?.profile as Patient;
  const [deviceToken, setDeviceToken] = React.useState<string | null>(null);
  const [deviceUserId, setDeviceUserId] = React.useState<string | null>(null);
  const GoToAddHealthDevices = () => {
    const { navigate } = useNavigation();
    return (
      <Pressable
        onPress={() =>
          navigate('HealthDevices', {
            userId: profile.id as string,
            deviceUserId,
          })
        }
        className="p-2"
      >
        <Text className="text-primary-300">Activity</Text>
      </Pressable>
    );
  };

  const createMetriportDeviceUser = React.useCallback(async () => {
    try {
      const userResponse = await axios.post(
        'https://api.sandbox.metriport.com/user',
        '',
        {
          params: {
            appUserId: profile.id,
          },
          headers: {
            'x-api-key':
              'SmllVFFfZkY5WWdQbGM3TWYxcm4tOjY1OGRkMDVjLWfZkY5WWdQbGM3TWYxcm4tOjY1OGRkMDVj',
          },
        }
      );

      const tokenResponse = await axios.get(
        'https://api.sandbox.metriport.com/user/connect/token',
        {
          params: {
            userId: userResponse.data.userId,
          },
          headers: {
            'x-api-key':
              'SmllVFFfZkY5WWdQbGM3TWYxcm4tOjY1OGRkMDVjLWfZkY5WWdQbGM3TWYxcm4tOjY1OGRkMDVj',
          },
        }
      );

      setDeviceToken(tokenResponse.data.token);
      setDeviceUserId(userResponse.data.userId);
    } catch (error) {
      console.error('Error creating Metriport device user:', error);
    }
  }, [profile.id]);

  React.useEffect(() => {
    // Call the memoized function
    createMetriportDeviceUser();
  }, [createMetriportDeviceUser]);

  if (!useAuth.use.token()?.profile) {
    return <View></View>;
  }

  if (!deviceToken && !deviceUserId) {
    return (
      <View className="flex-1  justify-center">
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <Stack.Navigator>
      <Stack.Group
        screenOptions={{
          // eslint-disable-next-line react/no-unstable-nested-components
          headerRight: () => <GoToAddHealthDevices />,
        }}
      >
        <Stack.Screen
          name="Health"
          component={HealthConnect}
          initialParams={{ userId: profile.id, deviceUserId: deviceUserId }}
        />

        <Stack.Screen
          name="AddHealthDevices"
          component={AddHealthDevices}
          initialParams={{ userId: profile.id, deviceToken: deviceToken }}
        />
        <Stack.Screen
          name="HealthDevices"
          component={HealthDevices}
          initialParams={{ userId: profile.id, deviceUserId: deviceUserId }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};
