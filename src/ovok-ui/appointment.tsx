import { Image, Text, View } from 'react-native';

import { getIcon } from '@/utils/get-icon';

export default function Appointment() {
  return (
    <View className="h-[96px] flex-row rounded-lg bg-[white]">
      <View className="mr-3 items-center justify-center">
        <Image source={getIcon('john-doe')} width={60} height={80} />
      </View>
      <View className="flex-1">
        <Text />
      </View>
    </View>
  );
}
