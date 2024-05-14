import { Image, Text, View } from 'react-native';

import { getIcon } from '@/utils/get-icon';

interface Props {
  category: string;
  value: string;
  iconName?: string;
  hasBorderBottom?: boolean;
  active?: boolean;
}

export default function RecordEntry({
  iconName,
  category,
  value,
  hasBorderBottom = true,
  active,
}: Props) {
  return (
    <View
      className="w-full flex-row items-center border-gray-200 p-3"
      style={{ borderBottomWidth: hasBorderBottom ? 1 : 0 }}
    >
      {iconName && (
        <Image
          source={getIcon(iconName)}
          width={20}
          height={20}
          className="mr-3"
        />
      )}
      <View>
        <Text className="text-left text-[12px] text-[rgb(74,84,94)]">
          {category}
        </Text>
      </View>
      <View className=" flex-1 flex-row justify-end">
        <Text
          className="text-right text-[14px]"
          style={{ color: active ? 'rgb(4,199,0)' : 'rgb(51,51,51)' }}
        >
          {value}
        </Text>
      </View>
    </View>
  );
}
