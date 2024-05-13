import { Image } from 'react-native';

import BackgroundWhite from '@/ovok-ui/background-white';
import { getIcon } from '@/utils/get-icon';

export default function QuestionnaireIntro() {
  return (
    <BackgroundWhite>
      <Image source={getIcon('questionnaire-big')} className="h-auto w-full" />
    </BackgroundWhite>
  );
}
