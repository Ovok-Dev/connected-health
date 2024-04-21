import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import type { RouteProp } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useColorScheme } from 'nativewind';
import type { ComponentType } from 'react';
import * as React from 'react';
import type { SvgProps } from 'react-native-svg';

import { Settings } from '@/screens';
import {
  Feed as FeedIcon,
  Settings as SettingsIcon,
  Style as StyleIcon,
  colors,
} from '@/ui';
import { HomeNavigator } from './home-navigator';

type TabParamList = {
  Home: undefined;
  HealthNavigater: undefined;
  Settings: undefined;
};

type TabType = {
  name: keyof TabParamList;
  component: ComponentType<any>;
  label: string;
};

type TabIconsType = {
  [key in keyof TabParamList]: (props: SvgProps) => JSX.Element;
};

const Tab = createBottomTabNavigator<TabParamList>();

const tabsIcons: TabIconsType = {
  Home: (props: SvgProps) => <StyleIcon {...props} />,
  HealthNavigater: (props: SvgProps) => <FeedIcon {...props} />,
  Settings: (props: SvgProps) => <SettingsIcon {...props} />,
};

export type TabList<T extends keyof TabParamList> = {
  navigation: NativeStackNavigationProp<TabParamList, T>;
  route: RouteProp<TabParamList, T>;
};

const tabs: TabType[] = [
  {
    name: 'Home',
    component: HomeNavigator,
    label: 'Home',
  },
  // {
  //   name: 'HealthNavigater',
  //   component: HealthNavigator,
  //   label: 'Heath',
  // },
  {
    name: 'Settings',
    component: Settings,
    label: 'Settings',
  },
];

type BarIconType = {
  name: keyof TabParamList;
  color: string;
};

const BarIcon = ({ color, name, ...reset }: BarIconType) => {
  const Icon = tabsIcons[name];
  return <Icon color={color} {...reset} />;
};

export const TabNavigator = () => {
  const { colorScheme } = useColorScheme();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarInactiveTintColor:
          colorScheme === 'dark' ? colors.charcoal[400] : colors.neutral[400],
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarIcon: ({ color }) => <BarIcon name={route.name} color={color} />,
      })}
    >
      <Tab.Group
        screenOptions={{
          headerShown: false,
        }}
      >
        {tabs.map(({ name, component, label }) => {
          return (
            <Tab.Screen
              key={name}
              name={name}
              component={component}
              options={{
                title: label,
                tabBarTestID: `${name}-tab`,
              }}
            />
          );
        })}
      </Tab.Group>
    </Tab.Navigator>
  );
};
