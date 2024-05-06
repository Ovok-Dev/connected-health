import { Image, Text, View } from 'react-native';

import { getIcon } from '@/utils/get-icon';

export default function EmptyData() {
  return (
    <View className="h-[150px] flex-1 flex-row items-center justify-center">
      <Image source={getIcon('empty-box')} width={76} height={76} />
      <Text className="text[16px] ml-9">No data found!</Text>
    </View>
  );
}
