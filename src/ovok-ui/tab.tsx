import type { ReactNode } from 'react';
import { useState } from 'react';
import { View } from 'react-native';

import TabButton from './tab-button';

export interface ITabScreen {
  value: string;
  label: string;
  screen: ReactNode;
}

interface Props {
  tabScreens: ITabScreen[];
}

export default function Tabs({ tabScreens }: Props) {
  const [selectedTabValue, setSelectedTabValue] = useState<string>(
    tabScreens[0].value
  );

  const renderTabButtons = () => {
    return tabScreens.map((tabScreen) => {
      return (
        <TabButton
          key={tabScreen.value}
          value={tabScreen.value}
          selected={tabScreen.value === selectedTabValue}
          setSelectedTabValue={setSelectedTabValue}
        >
          {tabScreen.label}
        </TabButton>
      );
    });
  };

  const renderTabScreen = () => {
    const selectedTabScreen = tabScreens.find((tabScreen) => {
      return tabScreen.value === selectedTabValue;
    })!.screen;
    return selectedTabScreen;
  };

  return (
    <View>
      <View className="mb-6 flex-row gap-3">{renderTabButtons()}</View>
      {renderTabScreen()}
    </View>
  );
}
