import type { PropsWithChildren } from 'react';
import { Pressable, Text } from 'react-native';

interface Props extends PropsWithChildren {
  disabled?: boolean;
  onPress?: () => void;
}

export default function ButtonWhiteOnPress({
  children,
  disabled = false,
  onPress,
}: Props) {
  const backgroundColor: string = disabled
    ? 'bg-[rgba(255,255,255,0.5)]'
    : 'bg-[white]';

  return (
    <Pressable
      className={`my-9 flex-row justify-center rounded-xl ${backgroundColor} py-4`}
      onPress={disabled ? undefined : onPress}
    >
      <Text className="text-[18px] font-medium tracking-[0.3px] text-[#525490]">
        {children}
      </Text>
    </Pressable>
  );
}
