import { Image, TextInput, View } from 'react-native';

import { getIcon } from '@/utils/get-icon';

const loopIcon = getIcon('loop');

export default function SearchInput() {
  return (
    <View className="mt-3 h-[50px] flex-1 flex-row items-center rounded-lg bg-[rgb(238,246,252)]">
      <View className="ml-2 w-[40px] items-center justify-center">
        <Image source={loopIcon} width={20} height={20} />
      </View>
      <View className="items-center">
        <TextInput
          placeholder="Search a record"
          placeholderClassName="text-[14px] text-[rgb(57,99,156)]"
          className=""
        />
      </View>
    </View>
  );
}
