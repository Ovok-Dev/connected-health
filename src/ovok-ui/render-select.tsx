import { Image, Text, View } from 'react-native';

import { getIcon } from '@/utils/get-icon';

export interface SelectOption {
  title: string;
  value: string;
}

export function renderSelectButton(selectedOption: SelectOption) {
  return (
    <View className="flex-1 flex-row">
      <Text className="max-w-[100px] text-[12px] leading-[1.2]">
        {!selectedOption ? 'No value' : selectedOption.title}
      </Text>
      <Image
        source={getIcon('arrow-down')}
        width={16}
        height={16}
        className="mx-2"
      />
    </View>
  );
}

export function renderSelectItem(option: SelectOption) {
  return (
    <View className="m-1 w-full">
      <Text className="text-[14px] font-semibold leading-[1.2]">
        {option.title}
      </Text>
    </View>
  );
}
