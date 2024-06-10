import { useLocalSearchParams, useNavigation } from 'expo-router';
import { useContext, useEffect, useMemo, useState } from 'react';
import { Dimensions, Text, TextInput, View } from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';

import { DataContext } from '@/api/common/data.context';
import BackgroundWhite from '@/ovok-ui/background-white';
import ButtonColorful from '@/ovok-ui/button-colorful';
import QuestionnaireCompletionMessage from '@/ovok-ui/questionnaire-completion-message';
import type { IDataContext } from '@/types/data.context.interface';
import type {
  IQuestionnaireGetAllResponseData,
  IQuestionnaireItem,
} from '@/types/questionnaire.interface';

export default function Questionnaire() {
  const { questionnaires, postQuestionnaireResponse } = useContext(
    DataContext
  ) as IDataContext;
  const params = useLocalSearchParams<{ questionnaireId: string }>();
  const questionnaire: IQuestionnaireGetAllResponseData = questionnaires.find(
    (entry) => entry.id === params.questionnaireId
  )!;
  const questions: IQuestionnaireItem[] = questionnaire.item;

  const [questionNumber, setQuestionNumber] = useState<number>(1);
  const [selectedAnswer, setSelectedAnswer] = useState<string | undefined>();
  const [textInput, setTextInput] = useState<string>('');
  const [displayCompletionMessage, setDisplayCompletionMessage] =
    useState<boolean>(false);

  const currentQuestion: IQuestionnaireItem = questions[questionNumber - 1];
  const { width } = Dimensions.get('window');
  const navigation = useNavigation();

  const radioButtons = useMemo(() => {
    return currentQuestion.answerOption?.map((answer, index) => {
      return {
        id: index.toString(),
        label: answer.valueString,
        value: (index + 1).toString(),
      };
    });
  }, [currentQuestion.answerOption]);

  const renderChoiceQuestion = () => {
    return (
      <View className="mt-3">
        <RadioGroup
          radioButtons={radioButtons}
          selectedId={selectedAnswer}
          onPress={(selectedId) => setSelectedAnswer(selectedId)}
          containerStyle={{
            alignItems: 'flex-start',
            marginTop: 12,
            marginLeft: 8,
          }}
        />
      </View>
    );
  };

  const renderOpenChoiceQuestion = () => {
    return (
      <TextInput
        placeholder={currentQuestion.text}
        value={textInput}
        onChangeText={(value) => setTextInput(value)}
        className="mt-3 h-40 w-full justify-start rounded-lg bg-[white] p-3"
        placeholderClassName="font-light text-[14px]"
      />
    );
  };

  const getContinueButtonDisabled = (): boolean => {
    if (!selectedAnswer && currentQuestion.type === 'choice') {
      return true;
    }
    if (!textInput && currentQuestion.type === 'open-choice') {
      return true;
    }
    return false;
  };

  const handleContinue = () => {
    postQuestionnaireResponse({
      questionnaireId: questionnaire.id,
      questionId: currentQuestion.linkId,
      answerText:
        currentQuestion.type === 'choice'
          ? (selectedAnswer &&
              currentQuestion.answerOption[Number(selectedAnswer)]
                .valueString) ||
            ''
          : textInput,
    });
    if (questionNumber === questions.length) {
      setDisplayCompletionMessage(true);
    } else {
      setSelectedAnswer(undefined);
      setQuestionNumber((prev) => prev + 1);
    }
  };

  useEffect(() => {
    navigation.setOptions({ title: 'Questionnaire' });
  }, [navigation]);

  if (displayCompletionMessage) {
    return (
      <QuestionnaireCompletionMessage>
        Thank you for completing the survey!
      </QuestionnaireCompletionMessage>
    );
  }

  return (
    <BackgroundWhite>
      <View className="flex-row justify-center">
        <View
          className="h-[6px] bg-[rgb(57,99,156)]"
          style={{
            width: ((questionNumber - 1) / questions.length) * width,
          }}
        />
        <View
          className="h-[6px] bg-[rgba(57,99,156,0.4)]"
          style={{
            width: width - ((questionNumber - 1) / questions.length) * width,
          }}
        />
      </View>
      <View className="mt-12 flex-row">
        <Text className="mr-2 text-[16px] font-semibold leading-normal text-[rgb(14,16,18)]">
          {questionNumber}.
        </Text>
        <Text className="flex-1 text-[16px] font-semibold leading-normal text-[rgb(14,16,18)]">
          {currentQuestion.text}
        </Text>
      </View>
      {currentQuestion.type === 'choice'
        ? renderChoiceQuestion()
        : renderOpenChoiceQuestion()}
      <ButtonColorful
        disabled={getContinueButtonDisabled()}
        onPress={handleContinue}
      >
        Continue
      </ButtonColorful>
    </BackgroundWhite>
  );
}
