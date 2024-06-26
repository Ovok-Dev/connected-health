import { Dimensions, Image, Text, View } from 'react-native';

import BackgroundCircles from '@/ovok-ui/background-circles';
import ButtonWhite from '@/ovok-ui/button-white';
import ButtonWithIcon from '@/ovok-ui/button-with-icon';

export default function Benefits() {
  const { height } = Dimensions.get('window');

  return (
    <BackgroundCircles>
      <View className={`${height < 650 ? 'my-12' : 'my-24'}`}>
        <Image
          source={require('../../../assets/images/image-two-stars.png')}
          className="absolute left-[123px] top-[-15px] rotate-[-87.41deg]"
        />
        <View className="mx-6">
          <View className="mb-9">
            <Text className="font-jost text-[24px] font-light text-[white]">
              Discover
            </Text>
            <Text className="font-jost text-[38px] font-bold text-[white]">
              the Benefits
            </Text>
          </View>
          <ButtonWithIcon iconName="monitoring">
            Real time HEALTH monitoring
          </ButtonWithIcon>
          <ButtonWithIcon iconName="care">
            Personalise Clinical CARE
          </ButtonWithIcon>
          <ButtonWithIcon iconName="team">
            Direct CARE TEAM ACCESS
          </ButtonWithIcon>
          <ButtonWithIcon iconName="activities">
            Daily Health Activities
          </ButtonWithIcon>
          <ButtonWhite href="/(app)/data-consent">Continue</ButtonWhite>
        </View>
      </View>
    </BackgroundCircles>
  );
}
