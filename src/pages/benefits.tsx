import { LinearGradient } from 'expo-linear-gradient';
import { Image, Pressable, Text, View } from 'react-native';

export default function Benefits() {
  return (
    <View className="flex-1">
      <LinearGradient
        colors={['#4f506f', '#756233']}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        // 111.61
        className="flex-1"
      >
        <Image
          source={require('../../assets/images/image-two-stars.png')}
          className="absolute left-[123px] top-[62.84px] rotate-[-87.41deg]"
        />
        <View className="mx-6 my-24">
          <View className="mb-9">
            <Text className="font-jost text-[24px] font-light text-[white]">
              Discover
            </Text>
            <Text className="font-jost text-[38px] font-bold text-[white]">
              the Benefits
            </Text>
          </View>
          <View className="mb-6">
            <Pressable className="flex-row rounded-xl border border-[grey] bg-[#5f6083] p-4">
              <View className="mr-3">
                <Image
                  source={require('../../assets/images/icon-monitoring.png')}
                />
              </View>
              <View>
                <Text className="text-[white]">
                  Real Time HEALTH Monitoring
                </Text>
              </View>
            </Pressable>
          </View>
          <View className="mb-6">
            <Pressable className="flex-row rounded-xl border border-[grey] bg-[#5f6083] p-4">
              <View className="mr-3">
                <Image source={require('../../assets/images/icon-care.png')} />
              </View>
              <View>
                <Text className="text-[white]">Personalise Clinical CARE</Text>
              </View>
            </Pressable>
          </View>
          <View className="mb-6">
            <Pressable className="flex-row rounded-xl border border-[grey] bg-[#5f6083] p-4">
              <View className="mr-3">
                <Image source={require('../../assets/images/icon-team.png')} />
              </View>
              <View>
                <Text className="text-[white]">Direct CARE TEAM ACCESS</Text>
              </View>
            </Pressable>
          </View>
          <View className="mb-6">
            <Pressable className="flex-row rounded-xl border border-[grey] bg-[#5f6083] p-4">
              <View className="mr-3">
                <Image
                  source={require('../../assets/images/icon-activities.png')}
                />
              </View>
              <View>
                <Text className="text-[white]">Daily Health Activities</Text>
              </View>
            </Pressable>
          </View>
          <View>
            <Pressable className="mt-9 flex-row justify-center rounded-xl bg-[white] py-4">
              <Text className="text-[18px] font-medium text-[#525490]">
                Continue
              </Text>
            </Pressable>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}
