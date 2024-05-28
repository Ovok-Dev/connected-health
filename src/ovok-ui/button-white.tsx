import type { Href } from 'expo-router';
import { router } from 'expo-router';
import type { PropsWithChildren } from 'react';
import type { FieldValues, UseFormHandleSubmit } from 'react-hook-form';
import { Pressable, Text } from 'react-native';

interface Props extends PropsWithChildren {
  disabled?: boolean;
  href?: Href<string>;
  handleSubmit?: UseFormHandleSubmit<FieldValues, undefined>;
  onSubmit?: any;
}

export default function ButtonWhite({
  children,
  disabled = false,
  href,
  handleSubmit,
  onSubmit,
}: Props) {
  const backgroundColor: string = disabled
    ? 'bg-[rgba(255,255,255,0.5)]'
    : 'bg-[white]';

  return (
    <Pressable
      className={`my-9 flex-row justify-center rounded-xl ${backgroundColor} py-4`}
      onPress={
        onSubmit && handleSubmit
          ? handleSubmit(onSubmit)
          : () => href && !disabled && router.push(href)
      }
    >
      <Text className="text-[18px] font-medium tracking-[0.3px] text-[#525490]">
        {children}
      </Text>
    </Pressable>
  );
}
