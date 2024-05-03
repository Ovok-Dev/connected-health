import { Image, Text, View } from 'react-native';

import { Color } from '@/types/colors';
import { getIcon } from '@/utils/get-icon';

interface Props {
  heartRate: string;
  bloodPressure: string;
  temperature: string;
  weight: string;
}

const heartIcon = getIcon('heart');
const pressureIcon = getIcon('pressure');
const temperatureIcon = getIcon('temperature');
const weightIcon = getIcon('weight');

export default function ValuesOverview({
  heartRate,
  bloodPressure,
  temperature,
  weight,
}: Props) {
  return (
    <View className="mt-4 w-full gap-4">
      <View className="flex-1 flex-row gap-3">
        <View
          className="flex-column flex-1 rounded-lg p-3"
          style={{ backgroundColor: Color.Blue }}
        >
          <Image source={heartIcon} width={16} height={16} />
          <Text
            className="text-[12px] font-medium leading-[1.8]"
            style={{ color: Color.BlueText }}
          >
            Heart Rate
          </Text>
          <View className="mt-1 flex-row items-center">
            <Text className="text-[20px] font-medium leading-normal text-[rgb(12,17,21)]">
              {heartRate + ' '}
            </Text>
            <Text className="text-[14px] leading-normal">bpm</Text>
          </View>
        </View>
        <View
          className="flex-column flex-1 rounded-lg p-3"
          style={{ backgroundColor: Color.Red }}
        >
          <Image source={pressureIcon} width={16} height={16} />
          <Text
            className="text-[12px] font-medium leading-[1.8]"
            style={{ color: Color.RedText }}
          >
            Blood Pressure
          </Text>
          <View className="mt-1 flex-row items-center">
            <Text className="text-[20px] font-medium leading-normal text-[rgb(12,17,21)]">
              {bloodPressure + ' '}
            </Text>
            <Text className="text-[14px] leading-normal">mmHg</Text>
          </View>
        </View>
      </View>
      <View className="flex-1 flex-row gap-3">
        <View
          className="flex-column flex-1 rounded-lg p-3"
          style={{ backgroundColor: Color.Yellow }}
        >
          <Image source={temperatureIcon} width={16} height={16} />
          <Text
            className="text-[12px] font-medium leading-[1.8]"
            style={{ color: Color.YellowText }}
          >
            Temperature
          </Text>
          <View className="mt-1 flex-row items-center">
            <Text className="text-[20px] font-medium leading-normal text-[rgb(12,17,21)]">
              {temperature + ' '}
            </Text>
            <Text className="text-[14px] leading-normal">° C</Text>
          </View>
        </View>
        <View
          className="flex-column flex-1 rounded-lg p-3"
          style={{ backgroundColor: Color.Green }}
        >
          <Image source={weightIcon} width={16} height={16} />
          <Text
            className="text-[12px] font-medium leading-[1.8]"
            style={{ color: Color.GreenText }}
          >
            Weight
          </Text>
          <View className="mt-1 flex-row items-center">
            <Text className="text-[20px] font-medium leading-normal text-[rgb(12,17,21)]">
              {weight + ' '}
            </Text>
            <Text className="text-[14px] leading-normal">Kg</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
