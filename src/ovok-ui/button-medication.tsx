import { useState } from 'react';
import { Dimensions, Image, Pressable, Text, View } from 'react-native';

import { getIcon } from '@/utils/get-icon';

interface Props {
  title: string;
  schedule: string;
  dosage: string;
  imageName: string;
}

export default function ButtonMedication({
  title,
  schedule,
  dosage,
  imageName,
}: Props) {
  const [selected, setSelected] = useState<boolean>(false);

  const { width } = Dimensions.get('window');

  return (
    <Pressable
      className="my-1 h-[96px] w-full rounded-lg border border-[rgb(243,243,243)] bg-[white]"
      onPress={() => setSelected((prev) => !prev)}
    >
      <View className="flex-1 flex-row">
        <View className="flex-column ml-3 flex-1 justify-center gap-2">
          <Text className="text-[14px] font-semibold text-[rgb(14,16,18)]">
            {title}
          </Text>
          <Text className="text-[12px] text-[rgb(74,84,94)]">
            Schedule: {schedule}
          </Text>
          <Text className="text-[12px] text-[rgb(74,84,94)]">
            Dosage: {dosage}
          </Text>
        </View>
        <View className="mr-3 items-center justify-center">
          <Image source={getIcon(imageName)} width={60} height={60} />
        </View>
        {selected && (
          <Image
            source={getIcon('checkmark')}
            width={24}
            height={24}
            className="absolute"
            style={{ left: width - 54 }}
          />
        )}
      </View>
    </Pressable>
  );
}
