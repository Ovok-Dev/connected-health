import { LinearGradient } from 'expo-linear-gradient';
import type { Href } from 'expo-router';
import { router } from 'expo-router';
import type { PropsWithChildren } from 'react';
import { Pressable, Text } from 'react-native';

interface Props extends PropsWithChildren {
  onPress?: any;
  disabled?: boolean;
  href?: Href<string>;
}

export default function ButtonColorful({
  children,
  onPress,
  disabled,
  href,
}: Props) {
  return (
    <Pressable
      onPress={onPress ? onPress : () => href && !disabled && router.push(href)}
      className="my-6 h-[60px] overflow-hidden rounded-xl"
    >
      <LinearGradient
        colors={
          disabled
            ? ['rgba(82, 83, 146, 0.4)', 'rgba(238, 185, 51, 0.4)']
            : ['rgb(82, 83, 146)', 'rgb(238, 185, 51)']
        }
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
