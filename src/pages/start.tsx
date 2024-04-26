import { LinearGradient } from 'expo-linear-gradient';
import { Image, Text, View } from 'react-native';

export default function Start() {
  return (
    <View className="flex-1 items-center">
      <LinearGradient
        colors={['#5D8890', '#525490']}
        className="width-full flex-1"
      >
        <Image
          source={require('../../assets/images/hero-background-image.png')}
          className="h-[66%]"
        />
        <View className="mx-3 flex-1 items-center justify-start">
          <View className="m-6">
            <Text className="text-center font-jost text-[32px] font-bold leading-normal text-white">
              Welcome to Connected Health
            </Text>
          </View>
          <View>
            <Text className="text-center font-jost text-[18px] leading-normal text-white">
              Connected Health operates on an exclusive invitation basis. Please
              ensure you have received an invitation from from your healthcare
              provider & care team to register.
            </Text>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}
