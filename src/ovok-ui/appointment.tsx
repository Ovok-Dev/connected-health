import { router } from 'expo-router';
import { Button, Image, Text, View } from 'react-native';

import { getIcon } from '@/utils/get-icon';

interface Props {
  imageName: string;
  time: string;
  practitioner: string;
  specialization: string;
}

export default function Appointment({
  imageName,
  time,
  practitioner,
  specialization,
}: Props) {
  return (
    <View className="my-3 h-[96px] flex-row rounded-lg bg-[white]">
      <View className="mr-3 items-center justify-center">
        <Image source={getIcon(imageName)} width={60} height={80} />
      </View>
      <View className="flex-1 justify-center gap-2">
        <Text className="text-[12px]">{time}</Text>
        <Text className="text-[14px] font-medium">{practitioner}</Text>
        <Text className="text-[12px]">{specialization}</Text>
      </View>
      <View className="mb-2 mr-2 items-end justify-between">
        <Image
          source={getIcon('three-dots-vertical')}
          width={20}
          height={20}
          className="m-2"
        />
        <Button
          title="Go to video"
          onPress={() => router.navigate('/(tabs)/(home)/video-call')}
        />
      </View>
    </View>
  );
}
