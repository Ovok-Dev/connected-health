import { Image, Text } from 'react-native';

import BackgroundWhite from '@/ovok-ui/background-white';
import ButtonColorful from '@/ovok-ui/button-colorful';
import { getIcon } from '@/utils/get-icon';

export default function QuestionnaireIntro() {
  return (
    <BackgroundWhite>
      <Image source={getIcon('questionnaire-big')} className="h-auto w-full" />
      <Text className="mt-3 text-[20px] font-semibold leading-normal text-[rgb(14,16,18)]">
        Hypertension Experience Feedback Tool (HEFT)
      </Text>
      <Text className="my-3 text-[14px] leading-[1.8] text-[rgb(74,84,94)]">
        Your feedback is invaluable to us. This brief questionnaire seeks to
        gauge your satisfaction with your medication. Your honest responses will
        aid us in providing you with better, tailored care. The Hypertension
        Experience Feedback Tool (HEFT) will take just a few minutes of your
        time and will help us tailor our approach to best suit your needs.
      </Text>
      <ButtonColorful href="/(tabs)/(home)/questionnaire">Start</ButtonColorful>
    </BackgroundWhite>
  );
}
