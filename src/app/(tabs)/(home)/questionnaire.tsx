import { useNavigation } from 'expo-router';
import { useEffect, useMemo, useState } from 'react';
import { Dimensions, Text, TextInput, View } from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';

import BackgroundWhite from '@/ovok-ui/background-white';
import ButtonColorful from '@/ovok-ui/button-colorful';

interface Question {
  question: string;
  answers: string[];
  extraField?: {
    placeholder: string;
    required: boolean;
  };
}

export default function Questionnaire() {
  const [questions /*setQuestion*/] = useState<Question[]>([
    {
      question:
        'Have you experienced any side-effects since starting your medication?',
      answers: ['Yes', 'No', "I don't know."],
    },
    {
      question: 'Have your symptoms improved since starting your medication?',
      answers: ['Yes', 'No', "I don't know."],
    },
    {
      question:
        'Some patients report that they find it difficult to take the medicine in a regular way. Have you ever deviated from the schedule?',
      answers: ['Yes', 'No', "I don't know."],
      extraField: {
        placeholder:
          'If you have ever missed the intake, how often have you not taken the medicine?',
        required: true,
      },
    },
  ]);
  const [questionNumber /* setQuestionNumber */] = useState<number>(3);
  const [selectedAnswer, setSelectedAnswer] = useState<string | undefined>();
  const [extraFieldInput, setExtraFieldInput] = useState<string>('');

  const currentQuestion: Question = questions[questionNumber - 1];

  const radioButtons = useMemo(() => {
    return currentQuestion.answers.map((answer, index) => {
      return {
        id: index.toString(),
        label: answer,
        value: (index + 1).toString(),
      };
    });
  }, [currentQuestion.answers]);

  const getContinueButtonDisabled = (): boolean => {
    if (!selectedAnswer) {
      return true;
    }
    if (currentQuestion.extraField && currentQuestion.extraField.required) {
      if (!extraFieldInput) {
        return true;
      }
    }
    return false;
  };

  const { width } = Dimensions.get('window');

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ title: 'Questionnaire' });
  }, [navigation]);

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
          {currentQuestion.question}
        </Text>
      </View>
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
      {currentQuestion.extraField && (
        <TextInput
          placeholder={currentQuestion.extraField.placeholder}
          value={extraFieldInput}
          onChangeText={(value) => setExtraFieldInput(value)}
          className="mt-3 h-40 w-full justify-start rounded-lg bg-[white] p-3"
          placeholderClassName="font-light text-[14px]"
        />
      )}
      <ButtonColorful disabled={getContinueButtonDisabled()}>
        Continue
      </ButtonColorful>
    </BackgroundWhite>
  );
}
