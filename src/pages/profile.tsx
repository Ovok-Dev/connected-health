import { Image, Pressable, Text, View } from 'react-native';

import BackgroundWhite from '@/ovok-ui/background-white';
import ButtonBasic from '@/ovok-ui/button-basic';
import { getIcon } from '@/utils/get-icon';

export default function Profile() {
  return (
    <BackgroundWhite>
      <ButtonBasic
        title="Personal Information"
        iconNameLeft="user"
        iconNameRight="arrow-right"
        bold={false}
      />
      <ButtonBasic
        title="Care Membership"
        iconNameLeft="crown"
        iconNameRight="arrow-right"
        bold={false}
      />
      <ButtonBasic
        title="Payment"
        iconNameLeft="moneys"
        iconNameRight="arrow-right"
        bold={false}
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
      />
      <Pressable className="mt-2 h-[54px] items-center justify-center rounded-lg border border-[rgb(215,221,234)] bg-white">
        <View className="flex-row items-center justify-center gap-2">
          <Image source={getIcon('logout')} width={24} height={24} />
          <Text className="text-[14px] text-[rgb(248,57,32)]">Logout</Text>
        </View>
      </Pressable>
    </BackgroundWhite>
  );
}
