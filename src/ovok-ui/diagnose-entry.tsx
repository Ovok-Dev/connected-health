import type { PropsWithChildren } from 'react';
import { Text, View } from 'react-native';

interface Props extends PropsWithChildren {
  code: string;
  codeColor: string;
  date: string;
  hasBorderBottom?: boolean;
}

export default function DiagnoseEntry({
  children,
  code,
  codeColor,
  date,
  hasBorderBottom = true,
}: Props) {
  return (
    <View
      className="border-gray-200 py-3"
      style={{ borderBottomWidth: hasBorderBottom ? 1 : 0 }}
    >
      <View className="flex-row justify-between">
        <Text
          className="rounded-sm px-2 py-1 text-[10px] text-white"
          style={{ backgroundColor: codeColor }}
        >
          {code}
        </Text>
        <Text className="text-[12px] text-[rgb(74,84,94)]">{date}</Text>
      </View>
      <View className="mt-2">
        <Text className="text-[12px] leading-normal text-[rgb(51,51,51)]">
          {children}
        </Text>
      </View>
    </View>
  );
}
