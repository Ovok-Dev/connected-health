import type { Href } from 'expo-router';
import { router } from 'expo-router';
import type { PropsWithChildren } from 'react';
import { Pressable, Text } from 'react-native';

interface Props extends PropsWithChildren {
  disabled?: boolean;
  href?: Href<string>;
  onPress?: any;
}

export default function ButtonWhite({
  children,
  disabled = false,
  href,
  onPress,
}: Props) {
  const backgroundColor: string = disabled
    ? 'bg-[rgba(255,255,255,0.5)]'
    : 'bg-[white]';

  return (
    <Pressable
      className={`my-9 flex-row justify-center rounded-xl ${backgroundColor} py-4`}
      onPress={onPress ? onPress : () => href && !disabled && router.push(href)}
    >
      <Text className="text-[18px] font-medium tracking-[0.3px] text-[#525490]">
        {children}
      </Text>
    </Pressable>
  );
}
