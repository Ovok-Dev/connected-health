import { useLocalSearchParams, useNavigation } from 'expo-router';
import { useContext, useEffect } from 'react';
import { Image, Text } from 'react-native';

import { DataContext } from '@/context/data.context';
import BackgroundWhite from '@/ovok-ui/background-white';
import ButtonColorful from '@/ovok-ui/button-colorful';
import type { IDataContext } from '@/types/data.context.interface';
import type { IQuestionnaireGetAllResponseData } from '@/types/questionnaire.interface';
import { getIcon } from '@/utils/get-icon';

export default function QuestionnaireIntro() {
  const { questionnaires } = useContext(DataContext) as IDataContext;
  const params = useLocalSearchParams<{ questionnaireId: string }>();
  const navigation = useNavigation();

  //@ts-ignore
  const questionnaire: IQuestionnaireGetAllResponseData =
    questionnaires.length > 0 &&
    questionnaires.find((entry) => entry.id === params.questionnaireId)!;

  useEffect(() => {
    navigation.setOptions({ title: 'Questionnaire' });
  }, [navigation]);

  return (
    <BackgroundWhite>
      <Image source={getIcon('questionnaire-big')} className="h-auto w-full" />
      <Text className="mt-3 text-[20px] font-semibold leading-normal text-[rgb(14,16,18)]">
        Hypertension Experience Feedback Tool (HEFT)
      </Text>
      <Text className="my-3 text-[14px] leading-[1.8] text-[rgb(74,84,94)]">
        {questionnaire.description}
      </Text>
      <ButtonColorful
        href={{
          pathname: '/(tabs)/(home)/questionnaire',
          params: { questionnaireId: questionnaire.id },
        }}
      >
        Start
      </ButtonColorful>
    </BackgroundWhite>
  );
}
