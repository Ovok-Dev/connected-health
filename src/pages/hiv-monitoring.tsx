import { Image, Text, View } from 'react-native';

import BackgroundWhite from '@/ovok-ui/background-white';
import ButtonBasic from '@/ovok-ui/button-basic';

export default function HIVMonitoring() {
  return (
    <BackgroundWhite>
      <View className="h-[200px] items-center justify-center">
        <Image
          source={require('../../assets/images/image-grace.png')}
          width={150}
          height={150}
        />
      </View>
      <View>
        <Text className="text-center text-[24px] font-semibold leading-[1.8]">
          Hi, Grace!
        </Text>
        <Text className="text-center text-[12px] leading-[1.8] text-[rgb(130,130,130)]">
          Saturday, 12 Aug
        </Text>
      </View>
      <ButtonBasic
        title="HIV Monitoring"
        subtitle="Create Care Plans"
        iconNameLeft="hiv-monitoring"
        iconNameRight="arrow-right"
      />
    </BackgroundWhite>
  );
}
