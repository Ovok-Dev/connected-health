/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import type { PropsWithChildren } from 'react';
import { Image, Pressable, Text, View } from 'react-native';

import { getIcon } from '@/utils/get-icon';

interface Props extends PropsWithChildren {
  selected: boolean;
  fontSize: number;
  textRight: string;
  onPress: () => void;
}

export default function CustomRadioButton({
  children,
  selected = false,
  fontSize,
  textRight,
  onPress,
}: Props) {
  return (
    <Pressable
      className="my-2 flex-row items-center rounded-lg border border-['rgb(215,221,234)'] bg-[white]"
      onPress={onPress}
    >
      <View className="mx-2 h-[50px] w-[44px] items-center justify-center rounded-md">
        <Image
          source={
            selected
              ? getIcon('radio-button-selected')
              : getIcon('radio-button-unselected')
          }
          width={16}
          height={16}
        />
      </View>
      <View className="flex-column flex-1 justify-center">
        <Text
          className="text-[14px] leading-[1.8] text-[rgb(14,16,18)]"
          style={{ fontSize: fontSize ? fontSize : 14 }}
        >
          {children}
        </Text>
      </View>
      {textRight && (
        <View className="mx-3 flex-row items-center justify-end">
          <Text className="text-[14px] text-[rgba(51,51,51,0.5)]">
            {textRight}
          </Text>
        </View>
      )}
    </Pressable>
  );
}
