import type { PropsWithChildren } from 'react';
import type { GestureResponderEvent } from 'react-native';
import { Image, Pressable, Text, View } from 'react-native';

import { getIcon } from '@/utils/get-icon';

interface Props extends PropsWithChildren {
  title: string;
  imageName: string;
  onPress?: (event: GestureResponderEvent) => void;
}

export default function LearningCard({
  children,
  title,
  imageName,
  onPress,
}: Props) {
  return (
    <Pressable
      className="my-3 flex-1 flex-row rounded-lg bg-[white]"
      onPress={onPress}
    >
      <Image
        source={getIcon(imageName)}
        width={66}
        height={76}
        borderRadius={8}
        style={{ margin: 8 }}
      />
      <View className="m-1 flex-1">
        <Text className="text-[14px] font-medium leading-normal">{title}</Text>
        <Text className="mt-1 text-[12px] leading-normal">{children}</Text>
      </View>
    </Pressable>
  );
}
