import { LinearGradient } from 'expo-linear-gradient';
import type { PropsWithChildren } from 'react';
import type { FieldValues, UseFormHandleSubmit } from 'react-hook-form';
import { Pressable, Text } from 'react-native';

interface Props extends PropsWithChildren {
  handleSubmit?: UseFormHandleSubmit<FieldValues, undefined>;
  onSubmit?: any;
}

export default function ButtonColorful({
  children,
  handleSubmit,
  onSubmit,
}: Props) {
  return (
    <Pressable
      onPress={handleSubmit && handleSubmit(onSubmit)}
      className="my-6 h-[60px] overflow-hidden rounded-xl"
    >
      <LinearGradient
        colors={['rgb(82, 83, 146)', 'rgb(238, 185, 51)']}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        className="flex-1 flex-row items-center justify-center rounded-xl py-4"
      >
        <Text className="text-[18px] font-medium tracking-[0.3px] text-[white]">
          {children}
        </Text>
      </LinearGradient>
    </Pressable>
  );
}
