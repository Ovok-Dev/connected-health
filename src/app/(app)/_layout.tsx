import { SplashScreen, Stack } from 'expo-router';
import React, { useCallback, useEffect } from 'react';

import { useAuth } from '@/core';
import { View } from '@/ui';

export default function TabLayout() {
  const status = useAuth.use.status();
  // const [isFirstTime] = useIsFirstTime();
  const hideSplash = useCallback(async () => {
    await SplashScreen.hideAsync();
  }, []);
  useEffect(() => {
    if (status !== 'idle') {
      setTimeout(() => {
        hideSplash();
      }, 1000);
    }
  }, [hideSplash, status]);

  return (
    <View className="m-0 w-full flex-1 p-0">
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="index" />
      </Stack>
    </View>
  );

  //   if (isFirstTime) {
  //     return <Redirect href="/onboarding" />;
  //   }

  //   if (status === 'signOut') {
  //     return <Redirect href="/login" />;
  //   }
  //   return (
  //     <Tabs>
  //       <Tabs.Screen
  //         name="index"
  //         options={{
  //           title: 'Feed',
  //           tabBarIcon: ({ color }) => <FeedIcon color={color} />,
  //           headerRight: () => <CreateNewPostLink />,
  //           tabBarTestID: 'feed-tab',
  //         }}
  //       />

  //       <Tabs.Screen
  //         name="style"
  //         options={{
  //           title: 'Style',
  //           headerShown: false,
  //           tabBarIcon: ({ color }) => <StyleIcon color={color} />,
  //           tabBarTestID: 'style-tab',
  //         }}
  //       />
  //       <Tabs.Screen
  //         name="settings"
  //         options={{
  //           title: 'Settings',
  //           headerShown: false,
  //           tabBarIcon: ({ color }) => <SettingsIcon color={color} />,
  //           tabBarTestID: 'settings-tab',
  //         }}
  //       />
  //     </Tabs>
  //   );
  // }

  // const CreateNewPostLink = () => {
  //   return (
  //     <Link href="/feed/add-post" asChild>
  //       <Pressable>
  //         <Text className="px-3 text-primary-300">Create</Text>
  //       </Pressable>
  //     </Link>
  //   );
}
