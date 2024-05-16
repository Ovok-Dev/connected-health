import { Dimensions, Image, Pressable, Text, View } from 'react-native';

import { getIcon } from '@/utils/get-icon';

interface Props {
  iconName: string;
  personName: string;
  messageBeginning: string;
  isOnline?: boolean;
  numberNewMessages?: number;
}

export default function ButtonChat({
  iconName,
  personName,
  messageBeginning,
  isOnline = false,
  numberNewMessages = 0,
}: Props) {
  const { width } = Dimensions.get('window');

  return (
    <Pressable className="my-3 h-[64px] flex-row items-center rounded-lg bg-white">
      <View className="mx-3 h-[44px] w-[44px] items-center justify-center overflow-hidden rounded-full">
        <Image
          source={getIcon(iconName)}
          resizeMode="cover"
          className="flex-1"
          style={{ width: '100%' }}
        />
      </View>
      <View
        className="absolute top-4 rounded-full p-1"
        style={{
          backgroundColor: isOnline ? 'rgb(4,224,0)' : 'rgb(255,149,34)',
          right: width - 80,
        }}
      />
      <View className="flex-1 justify-center gap-2">
        <Text className="text-[12px] font-medium text-[rgb(14,16,18)]">
          {personName}
        </Text>
        <Text className="mr-3 text-[10px] leading-normal text-[rgb(51,51,51)]">
          {messageBeginning}
        </Text>
      </View>
      {numberNewMessages > 0 && (
        <View className="mx-3 items-center justify-center">
          <Text className="rounded-sm bg-[rgb(57,99,156)] p-2 text-[12px] text-white">
            {numberNewMessages}
          </Text>
        </View>
      )}
    </Pressable>
  );
}
