import { Image, Pressable, Text, View } from 'react-native';

import { getIcon } from '@/utils/get-icon';

interface Props {
  title: string;
  topic: string;
  time: string;
  iconName: string;
}

export default function Notification({ title, topic, time, iconName }: Props) {
  return (
    <Pressable className="my-3 h-[70px] flex-1 flex-row rounded-lg border border-[rgb(243,243,243)] bg-[white]">
      <View className="flex-column w-[55px] items-center justify-center">
        <Image source={getIcon(iconName)} width={24} height={24} />
      </View>
      <View className="flex-column flex-1 justify-center gap-1">
        <Text className="text-[12px] text-[rgb(74,84,94)]">
          {topic} - {time} ago
        </Text>
        <Text className="text-[14px] font-medium text-[rgb(14,16,18)]">
          {title}
        </Text>
      </View>
    </Pressable>
  );
}
