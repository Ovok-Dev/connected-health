import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';
import { Dimensions, Pressable, StatusBar, Text, View } from 'react-native';

import BackgroundCircles from '@/ovok-ui/background-circles';
import { Input } from '@/ui';

export default function OvokLogin() {
  const { height } = Dimensions.get('window');

  return (
    <BackgroundCircles>
      <View
        className="flex-1 justify-end"
        style={{
          height: StatusBar.currentHeight
            ? height + StatusBar.currentHeight
            : height,
        }}
      >
        <View
          className="rounded-[20px_20px_0_0] bg-[white]"
          style={{ height: 500 }}
        >
          <View className="mx-12 flex-1">
            <View className="mt-9">
              <Text className="text-[28px] font-bold leading-[1.8] text-[rgb(52,54,114)]">
                Login
              </Text>
              <Text className="leading-[1.8] text-[rgb(29,29,29)]">
                Please enter your email and your password.
              </Text>
            </View>
            <Input
              className="mt-6 w-full rounded-xl border border-[rgb(82-84-144)] p-4"
              placeholder="Enter your email"
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
            />
            <Input
              className="mt-3 w-full rounded-xl border border-[rgb(82-84-144)] p-4"
              placeholder="Enter your password"
              keyboardType="visible-password"
              autoCorrect={false}
              autoCapitalize="none"
            />
            <Pressable className="my-6 h-[60px] overflow-hidden rounded-xl">
              <LinearGradient
                colors={['rgb(82, 83, 146)', 'rgb(238, 185, 51)']}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
                className="flex-1 flex-row items-center justify-center rounded-xl py-4"
              >
                <Text className="text-[18px] font-medium tracking-[0.3px] text-[white]">
                  Login
                </Text>
              </LinearGradient>
            </Pressable>
            <View className="flex-1 justify-end">
              <View className="mb-12">
                <Text className="text-center leading-[1.8] text-[rgba(29,29,29,0.6)]">
                  Don't have an account?
                </Text>
                <Link
                  className="text-center font-medium leading-[1.8] text-[rgb(52,54,114)] underline"
                  href="/get-started"
                >
                  Sign up
                </Link>
              </View>
            </View>
          </View>
        </View>
      </View>
    </BackgroundCircles>
  );
}
