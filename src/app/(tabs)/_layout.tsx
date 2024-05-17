import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue', headerShown: false }}>
      <Tabs.Screen
        name="(home)"
        options={{
          title: 'Home',
        }}
      />
      <Tabs.Screen
        name="(records)"
        options={{
          title: 'Records',
        }}
      />
      <Tabs.Screen
        name="(trials)"
        options={{
          title: 'Trials',
        }}
      />
      <Tabs.Screen
        name="(care)"
        options={{
          title: 'Care',
        }}
      />
      <Tabs.Screen
        name="(settings)"
        options={{
          title: 'Settings',
        }}
      />
    </Tabs>
  );
}
