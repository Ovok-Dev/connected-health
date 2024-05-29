import { Tabs } from 'expo-router';
import React from 'react';
import { Image } from 'react-native';

import { DataProviderWrapper } from '@/api/common/data.context';
import { getIcon } from '@/utils/get-icon';

const renderTabIcon = (iconName: string) => {
  return <Image source={getIcon(iconName)} width={24} height={24} />;
};

export default function TabLayout() {
  return (
    <DataProviderWrapper>
      <Tabs
        screenOptions={{ tabBarActiveTintColor: 'blue', headerShown: false }}
      >
        <Tabs.Screen
          name="(home)"
          options={{
            title: 'Home',
            tabBarIcon: () => renderTabIcon('tab-home'),
          }}
        />
        <Tabs.Screen
          name="(records)"
          options={{
            title: 'Records',
            tabBarIcon: () => renderTabIcon('tab-note'),
          }}
        />
        <Tabs.Screen
          name="(care)"
          options={{
            title: 'Care',
            tabBarIcon: () => renderTabIcon('tab-care'),
          }}
        />
        <Tabs.Screen
          name="(settings)"
          options={{
            title: 'Settings',
            tabBarIcon: () => renderTabIcon('tab-settings'),
          }}
        />
      </Tabs>
    </DataProviderWrapper>
  );
}
