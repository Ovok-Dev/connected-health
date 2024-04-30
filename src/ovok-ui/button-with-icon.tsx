import type { PropsWithChildren } from 'react';
import { Image, Pressable, Text, View } from 'react-native';

import { getIcon } from '@/utils/get-icon';

interface Props extends PropsWithChildren {
  iconName: string;
}

export default function ButtonWithIcon({ children, iconName }: Props) {
  const icon = getIcon(iconName);

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
