import { LinearGradient } from 'expo-linear-gradient';
import { Linking, Pressable, Text, View } from 'react-native';

import BackgroundCircles from '@/ovok-ui/background-circles';
import { Input } from '@/ui';

export default function OvokLogin() {
  return (
    <BackgroundCircles>
      <View className="mt-[300px] flex-1 rounded-[20px_20px_0_0] bg-[white]">
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
          <View className="h-[90px] overflow-hidden rounded-xl">
            <LinearGradient
              colors={['rgb(82, 83, 146)', 'rgb(238, 185, 51)']}
              start={{ x: 0, y: 0.5 }}
              end={{ x: 1, y: 0.5 }}
              className="h-12 flex-1 flex-row rounded-xl"
            >
              <Pressable className="flex-1 flex-row justify-center py-6">
                <Text className="text-[28px] font-medium text-[white]">
                  Login
                </Text>
              </Pressable>
            </LinearGradient>
          </View>
        </View>
        <View>
          <Text className="text-[rbga(29,29,29,0.6)]">
            Don't have an account?
          </Text>
          <Text
            className="font-medium text-[rbga(29,29,29,0.6)] underline"
            onPress={() => Linking.openURL('')}
          >
            Signup
          </Text>
        </View>
      </View>
    </BackgroundCircles>
  );
}
