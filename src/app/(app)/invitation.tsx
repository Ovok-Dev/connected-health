import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';
import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';

export default function Invitation() {
  return (
    <View className="flex-1">
      <LinearGradient colors={['#5D8890', '#525490']} className="flex-1">
        <Image
          source={require('../../../assets/images/invitation-image.png')}
          className="h-[66%] w-full"
        />
        <View className="mx-3 flex-1 items-center justify-start">
          <View className="mb-2">
            <Text className="text-center font-jost text-[32px] font-bold leading-normal text-white">
              Have an invite ?
            </Text>
          </View>
          <View className="mb-4">
            <Text className="text-center font-jost text-[16px] leading-normal text-white">
              Dive into a new era of personalized digital healthcare with
              Care360.
            </Text>
          </View>
          <View>
            <View className="mb-4 flex-row justify-between gap-4">
              <Link href="/benefits" asChild>
                <Pressable className="flex-1 items-center rounded-xl bg-[white] px-12 py-4">
                  <Text className="text-[18px] font-medium tracking-[0.3px] text-[#525490]">
                    Sign up
                  </Text>
                </Pressable>
              </Link>
              <Link href="/ovok-login" asChild>
                <Pressable className="flex-1 items-center rounded-xl bg-[white] px-12 py-4">
                  <Text className="text-[18px] font-medium tracking-[0.3px] text-[#525490]">
                    Login
                  </Text>
                </Pressable>
              </Link>
            </View>
            <View>
              <Pressable className="rounded-xl border border-[rgba(255,255,255,0.3)] bg-[rgba(255,255,255,0.14)] px-12 py-4">
                <Text className="text-[16px] font-medium text-[white]">
                  Scan and Start Your Care Journey
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}
