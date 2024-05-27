import { Stack } from 'expo-router';
import { View } from 'react-native';

export default function HomeTabLayout() {
  return (
    <View className="m-0 w-full flex-1 p-0">
      <Stack
        screenOptions={{
          headerShown: true,
          headerTitleAlign: 'center',
        }}
      >
        <Stack.Screen name="index" />
      </Stack>
    </View>
  );
}
