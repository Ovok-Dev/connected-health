import type { Href } from 'expo-router';
import { router } from 'expo-router';
import type { PropsWithChildren } from 'react';
import { Image, Pressable, Text } from 'react-native';

import { getIcon } from '@/utils/get-icon';

interface Props extends PropsWithChildren {
  iconName: string;
  href?: Href<string>;
}

export default function ButtonRecord({ children, iconName, href }: Props) {
  return (
    <Pressable
      className="m-2 h-[110px] flex-1 items-center justify-center gap-3 rounded-xl bg-white"
      onPress={() => href && router.push(href)}
    >
      <Image source={getIcon(iconName)} width={27} height={27} />
      <Text className="text-[12px] text-[rgb(51,51,51)]">{children}</Text>
    </Pressable>
  );
}
