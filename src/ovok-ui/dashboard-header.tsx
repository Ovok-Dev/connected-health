import { Image, Text, View } from 'react-native';

import { getIcon } from '@/utils/get-icon';

export default function DashboardHeader() {
  const iconBell = getIcon('bell');
  const iconGrace = getIcon('grace');

  return (
    <View className="flex-1 flex-row justify-between">
      <View className="flex-column justify-center">
        <Text className="text-[12px] leading-[1.8] text-[rgb(130,130,130)]">
          Saturday, 12 Aug
        </Text>
        <Text className="text-[24px] font-semibold leading-[1.8] text-[rgb(29,29,29)]">
          Hi, Grace
        </Text>
      </View>
      <View className="flex-row items-center justify-center">
        <View className="mr-2 h-[44px] w-[44px] items-center justify-center">
          <Image source={iconBell} width={44} height={44} />
        </View>
        <View className="h-[44px] w-[44px] items-center justify-center">
          <Image source={iconGrace} width={44} height={44} />
        </View>
      </View>
    </View>
  );
}