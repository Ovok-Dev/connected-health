import type { PropsWithChildren } from 'react';
import type { PressableProps } from 'react-native';
import { Pressable, Text } from 'react-native';

interface Props extends PropsWithChildren {
  disabled?: boolean;
  onPress?: PressableProps['onPress'];
}

export default function ButtonWhite({ children, disabled, onPress }: Props) {
  const backgroundColor: string = disabled
    ? 'bg-[rgba(255,255,255,0.5)]'
    : 'bg-[white]';

  return (
    <Pressable
      className={`mt-9 flex-row justify-center rounded-xl ${backgroundColor} py-4`}
      onPress={onPress}
    >
      <Text className="text-[18px] font-medium text-[#525490]">{children}</Text>
    </Pressable>
  );
}
