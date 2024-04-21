import { getMetriportFormattedDate } from '@/core';
import type { RouteProp } from '@/navigation/types';
import {
  ActivityIndicator,
  Button,
  FocusAwareStatusBar,
  Text,
  View,
} from '@/ui';
import { useRoute } from '@react-navigation/native';
import axios from 'axios';
import * as React from 'react';

export const HealthDevices = () => {
  const { params } = useRoute<RouteProp<'HealthDevices'>>();
  const deviceUserId = params?.deviceUserId;
  const [activity, setActivity] = React.useState<any>(null);

  const fetchUserActivity = React.useCallback(async () => {
    try {
      const response = await axios.get(
        'https://api.sandbox.metriport.com/activity',
        {
          params: {
            userId: deviceUserId,
            date: getMetriportFormattedDate(new Date()),
          },
          headers: {
            'x-api-key':
              'SmllVFFfZkY5WWdQbGM3TWYxcm4tOjY1OGRkMDVjLWZjZGItNDc3MS1hMzY4LThhNmVhNTg4ZWQ3Mw',
          },
        }
      );

      // console.log(
      //   'Received user activity data:',
      //   JSON.stringify(response.data, null, 2)
      // );

      setActivity(response.data[0].summary);
    } catch (error) {
      console.error('Error fetching user activity:', error);
    }
  }, [deviceUserId]);

  React.useEffect(() => {
    // Call the memoized function
    fetchUserActivity();
  }, [fetchUserActivity]);

  return (
    <View className="flex-col  items-center justify-center py-16 ">
      <FocusAwareStatusBar />
      <Text variant="h2">{"Today's Activity"}</Text>

      {activity ? (
        <View className="flex-col py-10">
          <View className="flex-row">
            <Text className="px-3" variant="lg">
              {'Steps Count'}
            </Text>
            <Text variant="lg" className="font-bold">
              {activity.movement.steps_count}
            </Text>
          </View>

          <View className="flex-row ">
            <Text className="px-3" variant="lg">
              {'Average km/h'}
            </Text>
            <Text variant="lg" className="font-bold">
              {activity.movement.speed.avg_km_h}
            </Text>
          </View>

          <View className="flex-row">
            <Text className="px-3" variant="lg">
              {'distance_m'}
            </Text>
            <Text variant="lg" className="font-bold">
              {activity.movement.distance_meters}
            </Text>
          </View>

          <View className="flex-row">
            <Text className="px-3" variant="lg">
              {'energy expenditure'}
            </Text>
            <Text variant="lg" className="font-bold">
              {activity.energy_expenditure.active_kcal}
            </Text>
          </View>

          <View className="flex-row">
            <Text className="px-3" variant="lg">
              {'active seconds'}
            </Text>
            <Text variant="lg" className="font-bold">
              {activity.durations.active_seconds}
            </Text>
          </View>
        </View>
      ) : (
        <ActivityIndicator />
      )}
      <Button label="Refresh" onPress={() => fetchUserActivity()} />
    </View>
  );
};
