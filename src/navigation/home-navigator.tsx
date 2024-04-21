import { Home } from '@/screens';
import { Scene } from '@/screens/scene';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
export type SceneStackParamList = {
  Home: {};
  Scene: { sceneId: string | null };
};

const Stack = createNativeStackNavigator<SceneStackParamList>();

export const HomeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Group
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Home} initialParams={{}} />

        <Stack.Screen
          name="Scene"
          component={Scene}
          initialParams={{ sceneId: null }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};
