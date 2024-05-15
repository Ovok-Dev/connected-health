import type { PropsWithChildren } from 'react';
import { Text, View } from 'react-native';

interface Props extends PropsWithChildren {
  title: string;
}

export default function RecordEntriesContainer({ children, title }: Props) {
  return (
    <View className="mt-6 rounded-xl bg-white p-4">
      <Text className="mb-2 text-[14px] font-semibold text-[rgb(29,29,29)]">
        {title}
      </Text>
      {children}
    </View>
  );
}
