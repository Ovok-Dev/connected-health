import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';
import { Image, Pressable, Text, View } from 'react-native';

export default function Start() {
  return (
    <Link href="/invitation" asChild className=" w-full flex-1">
      <Pressable className="flex-1">
        <LinearGradient colors={['#5D8890', '#525490']} className="flex-1">
          <Image
            source={require('../../../assets/images/hero-background-image.png')}
            className="h-[66%] w-full"
          />
          <View className="mx-3 flex-1 items-center justify-start">
            <View className="m-6">
              <Text className="text-center font-jost text-[32px] font-bold leading-[1.8] text-white">
                Welcome to Connected Health
              </Text>
            </View>
            <View>
              <Text className="text-center font-jost text-[18px] leading-[1.8] text-white">
                Connected Health operates on an exclusive invitation basis.
                Please ensure you have received an invitation from from your
                healthcare provider & care team to register.
              </Text>
            </View>
          </View>
        </LinearGradient>
      </Pressable>
    </Link>
  );
}
