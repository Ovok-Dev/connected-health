import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';
import { Dimensions, Image, Pressable, Text, View } from 'react-native';

export default function Start() {
  const { height } = Dimensions.get('window');

  return (
    <Link href="/invitation" asChild className=" w-full flex-1">
      <Pressable className="flex-1">
        <LinearGradient
          colors={['rgb(93,136,144)', 'rgb(82,84,144)']}
          className="flex-1"
        >
          <View style={{ height: height - 300 }}>
            <Image
              source={require('../../../assets/images/background-image-hero.png')}
              className="w-full"
              style={{ height: height - 300 }}
            />
          </View>
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
