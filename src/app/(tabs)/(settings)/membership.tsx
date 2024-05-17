/* eslint-disable react/react-in-jsx-scope */
import { LinearGradient } from 'expo-linear-gradient';
import { Image, Text, View } from 'react-native';

import BackgroundWhite from '@/ovok-ui/background-white';
import ButtonWhite from '@/ovok-ui/button-white';
import { getIcon } from '@/utils/get-icon';

export default function Membership() {
  return (
    <BackgroundWhite>
      <View className="flex-1 overflow-hidden rounded-xl">
        <LinearGradient
          colors={['rgba(82, 83, 146, 1)', 'rgba(238, 185, 51, 1)']}
          start={{ x: -0.4, y: 1 }}
          end={{ x: 1.4, y: 1.2 }}
          locations={[0.1791, 1.691]}
          className="flex-1"
        >
          <LinearGradient
            colors={[
              'rgba(82, 84, 144, 1)',
              'rgba(82, 84, 144, 0)',
              'rgba(93, 136, 144, 0.75)',
            ]}
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 3.4823 }}
            locations={[-0.0175, -0.0174, 1]}
            className="flex-1"
          >
            <View className="mx-6 mt-9 flex-1">
              <Text className="text-[16px] text-white">Care360 Pro</Text>
              <View className="mt-1 flex-row">
                <Text className="text-[32px] font-semibold text-white">
                  $99
                </Text>
                <Text className="text-[32px] font-light text-white">
                  /per month
                </Text>
              </View>
              <Text className="mb-3 mt-2 text-[16px] font-medium text-white">
                Features:
              </Text>
              <View className="my-2 flex-row items-center">
                <Image
                  source={getIcon('checkmark-black')}
                  width={24}
                  height={24}
                  className="mr-2"
                />
                <Text className="text-[13px] text-white opacity-90">
                  Lorem Ipsum Dolor Sit Amet
                </Text>
              </View>
              <View className="my-2 flex-row items-center">
                <Image
                  source={getIcon('checkmark-black')}
                  width={24}
                  height={24}
                  className="mr-2"
                />
                <Text className="text-[13px] text-white opacity-90">
                  Lorem Ipsum Dolor Sit Amet
                </Text>
              </View>
              <View className="my-2 flex-row items-center">
                <Image
                  source={getIcon('checkmark-black')}
                  width={24}
                  height={24}
                  className="mr-2"
                />
                <Text className="text-[13px] text-white opacity-90">
                  Lorem Ipsum Dolor Sit Amet
                </Text>
              </View>
              <View className="my-2 flex-row items-center">
                <Image
                  source={getIcon('checkmark-black')}
                  width={24}
                  height={24}
                  className="mr-2"
                />
                <Text className="text-[13px] text-white opacity-90">
                  Lorem Ipsum Dolor Sit Amet
                </Text>
              </View>
              <View className="my-2 flex-row items-center">
                <Image
                  source={getIcon('checkmark-black')}
                  width={24}
                  height={24}
                  className="mr-2"
                />
                <Text className="text-[13px] text-white opacity-90">
                  Lorem Ipsum Dolor Sit Amet
                </Text>
              </View>
              <View className="my-2 flex-row items-center">
                <Image
                  source={getIcon('checkmark-black')}
                  width={24}
                  height={24}
                  className="mr-2"
                />
                <Text className="text-[13px] text-white opacity-90">
                  Lorem Ipsum Dolor Sit Amet
                </Text>
              </View>
              <ButtonWhite>Upgrade</ButtonWhite>
            </View>
          </LinearGradient>
        </LinearGradient>
      </View>
      <Image
        source={getIcon('three-dots-colorful')}
        className="mt-9 self-center"
      />
    </BackgroundWhite>
  );
}
