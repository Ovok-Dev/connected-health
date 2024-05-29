import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from 'expo-router';
import { useEffect } from 'react';
import { Image, ImageBackground, Pressable, Text, View } from 'react-native';

import { useAuth } from '@/core';
import BackgroundWhite from '@/ovok-ui/background-white';
import ButtonBasic from '@/ovok-ui/button-basic';
import { getIcon } from '@/utils/get-icon';

export default function Profile() {
  const navigation = useNavigation();
  const signOut = useAuth.use.signOut();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <BackgroundWhite>
      <View className="mb-6 overflow-hidden rounded-xl">
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
            <ImageBackground
              source={require('../../../../assets/images/background-image-benefits.png')}
              resizeMode="cover"
              className="flex-1"
            >
              <View className="h-[190px] items-center justify-center gap-2">
                <View className="h-[72px] w-[72px] overflow-hidden rounded-full bg-white">
                  <Image
                    source={getIcon('grace')}
                    className="w-full flex-1"
                    resizeMode="contain"
                  />
                </View>
                <Text className="text-[24px] font-medium text-white">
                  Grace Agyei
                </Text>
                <Text className="text-[12px] text-white opacity-75">
                  example@domain.com
                </Text>
              </View>
            </ImageBackground>
          </LinearGradient>
        </LinearGradient>
      </View>
      <ButtonBasic
        title="Personal Information"
        iconNameLeft="user"
        iconNameRight="arrow-right"
        bold={false}
        href="/(tabs)/(settings)/personal-information"
      />
      <ButtonBasic
        title="Care Membership"
        iconNameLeft="crown"
        iconNameRight="arrow-right"
        bold={false}
        href="/(tabs)/(settings)/membership"
      />
      <ButtonBasic
        title="Payment"
        iconNameLeft="moneys"
        iconNameRight="arrow-right"
        bold={false}
        href="/(tabs)/(settings)/payments"
      />
      <ButtonBasic
        title="Study Offers"
        iconNameLeft="study-offers"
        iconNameRight="switch"
        bold={false}
      />
      <ButtonBasic
        title="Preferences"
        iconNameLeft="preferences"
        iconNameRight="arrow-right"
        bold={false}
        href="/(tabs)/(settings)/preferences"
      />
      <Pressable
        className="mt-2 h-[54px] items-center justify-center rounded-lg border border-[rgb(215,221,234)] bg-white"
        onPress={signOut}
      >
        <View className="flex-row items-center justify-center gap-2">
          <Image source={getIcon('logout')} width={24} height={24} />
          <Text className="text-[14px] text-[rgb(248,57,32)]">Logout</Text>
        </View>
      </Pressable>
    </BackgroundWhite>
  );
}
