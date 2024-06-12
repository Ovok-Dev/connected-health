import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';
import { Dimensions, Image, Pressable, Text, View } from 'react-native';

export default function Start() {
  const { height } = Dimensions.get('window');
  const imageHeight = height - 220;

  return (
    <Link href="/(app)/invitation" asChild className=" w-full flex-1">
      <Pressable className="flex-1">
        <LinearGradient
          colors={['rgb(238, 185, 51)', 'rgb(82, 83, 146)']}
          className="flex-1"
        >
          <View style={{ height: imageHeight }}>
            <Image
              source={require('../../../assets/images/minxli-hero-image.png')}
              className="w-full"
              style={{ height: imageHeight }}
            />
          </View>
          <View className="mx-3 flex-1 items-center justify-start">
            <View className="m-6 mt-9">
              <Text className="text-center font-jost text-[32px] font-bold leading-normal text-white">
                Welcome to Minxli
              </Text>
            </View>
            <View>
              <Text className="text-center font-jost text-[18px] leading-normal text-white">
                Minxli operates on an exclusive invitation basis. Please ensure
                you have received an invitation from from your healthcare
                provider & care team to register.
              </Text>
            </View>
          </View>
        </LinearGradient>
      </Pressable>
    </Link>
  );
}
