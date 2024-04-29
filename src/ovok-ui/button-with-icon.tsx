import type { PropsWithChildren } from 'react';
import { Image, Pressable, Text, View } from 'react-native';

interface Props extends PropsWithChildren {
  iconName: string;
}

export default function ButtonWithIcon({ children, iconName }: Props) {
  let icon;

  switch (iconName) {
    case 'monitoring':
      icon = require('../../assets/images/icon-monitoring.png');
      break;
    case 'care':
      icon = require('../../assets/images/icon-care.png');
      break;
    case 'team':
      icon = require('../../assets/images/icon-team.png');
      break;
    case 'activities':
      icon = require('../../assets/images/icon-activities.png');
      break;
  }

  return (
    <View className="mb-6">
      <Pressable className="flex-row rounded-xl border border-[grey] bg-[rgba(255,255,255,0.06)] p-4">
        <View className="mr-3">
          <Image source={icon} />
        </View>
        <View>
          <Text className="tracking-[0.3px] text-[white]">{children}</Text>
        </View>
      </Pressable>
    </View>
  );
}
