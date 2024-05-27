import { useNavigation } from 'expo-router';
import { useEffect } from 'react';
import { Image, Text, View } from 'react-native';

import BackgroundWhite from '@/ovok-ui/background-white';
import ButtonBasic from '@/ovok-ui/button-basic';
import { getIcon } from '@/utils/get-icon';

export default function Care() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <BackgroundWhite>
      <Text className="text-[16px] font-semibold text-[rgb(29,29,29)]">
        Clinical Goals
      </Text>
      <View className="mt-4 rounded-xl bg-white py-1">
        <View className="flex-row py-2">
          <View className="justify-start">
            <Image
              source={getIcon('goal')}
              width={16}
              height={16}
              style={{ marginHorizontal: 12, marginTop: 2 }}
            />
          </View>
          <View className="flex-1">
            <Text className="text-[14px] leading-normal text-[rgb(51,51,51)]">
              Lower blood pressure to below 120/80 mmHg by October 2023.
            </Text>
          </View>
        </View>
        <View className="flex-row py-2">
          <View className="justify-start">
            <Image
              source={getIcon('goal')}
              width={16}
              height={16}
              style={{ marginHorizontal: 12, marginTop: 2 }}
            />
          </View>
          <View className="flex-1">
            <Text className="text-[14px] leading-normal text-[rgb(51,51,51)]">
              Reduce weight to 75 kg by October 2023.
            </Text>
          </View>
        </View>
        <View className="flex-row py-2">
          <View className="justify-start">
            <Image
              source={getIcon('goal')}
              width={16}
              height={16}
              style={{ marginHorizontal: 12, marginTop: 2 }}
            />
          </View>
          <View className="flex-1">
            <Text className="text-[14px] leading-normal text-[rgb(51,51,51)]">
              Engage in at least 10 minutes of relaxation or meditation daily.
            </Text>
          </View>
        </View>
      </View>
      <Text className="mt-6 text-[16px] font-semibold text-[rgb(29,29,29)]">
        Dietary Goals
      </Text>
      <View className="mt-4 rounded-xl bg-white py-1">
        <View className="flex-row py-2">
          <View className="justify-start">
            <Image
              source={getIcon('goal')}
              width={16}
              height={16}
              style={{ marginHorizontal: 12, marginTop: 2 }}
            />
          </View>
          <View className="flex-1">
            <Text className="text-[14px] leading-normal text-[rgb(51,51,51)]">
              Reduce salt intake.
            </Text>
          </View>
        </View>
        <View className="flex-row py-2">
          <View className="justify-start">
            <Image
              source={getIcon('goal')}
              width={16}
              height={16}
              style={{ marginHorizontal: 12, marginTop: 2 }}
            />
          </View>
          <View className="flex-1">
            <Text className="text-[14px] leading-normal text-[rgb(51,51,51)]">
              Eat 3 servings of vegetables per day.
            </Text>
          </View>
        </View>
      </View>
      <Text className="mt-6 text-[16px] font-semibold text-[rgb(29,29,29)]">
        Physical Activity Goals
      </Text>
      <View className="mt-4 rounded-xl bg-white py-1">
        <View className="flex-row py-2">
          <View className="justify-start">
            <Image
              source={getIcon('goal')}
              width={16}
              height={16}
              style={{ marginHorizontal: 12, marginTop: 2 }}
            />
          </View>
          <View className="flex-1">
            <Text className="text-[14px] leading-normal text-[rgb(51,51,51)]">
              Exercise for 30-45 minutes 3 times per week.
            </Text>
          </View>
        </View>
        <View className="flex-row py-2">
          <View className="justify-start">
            <Image
              source={getIcon('goal')}
              width={16}
              height={16}
              style={{ marginHorizontal: 12, marginTop: 2 }}
            />
          </View>
          <View className="flex-1">
            <Text className="text-[14px] leading-normal text-[rgb(51,51,51)]">
              Go for a family walk every Sunday evening.
            </Text>
          </View>
        </View>
      </View>
      <Text className="mt-6 text-[16px] font-semibold text-[rgb(29,29,29)]">
        Medication
      </Text>
      <View className="mt-4 rounded-xl bg-white py-1">
        <View className="flex-row py-2">
          <View className="justify-start">
            <Image
              source={getIcon('goal')}
              width={16}
              height={16}
              style={{ marginHorizontal: 12, marginTop: 2 }}
            />
          </View>
          <View className="flex-1">
            <Text className="text-[14px] leading-normal text-[rgb(51,51,51)]">
              Take your medication as prescribed
            </Text>
          </View>
        </View>
      </View>
      <Text className="mt-6 text-[16px] font-semibold text-[rgb(29,29,29)]">
        Other
      </Text>

      <ButtonBasic
        title="Chats"
        iconNameLeft="messages"
        iconNameRight="chat-pics"
        bold={false}
        borderInvisible
        href="/(tabs)/(care)/chats"
      />
      <ButtonBasic
        title="AI Care"
        iconNameLeft="ai"
        iconNameRight="arrow-right"
        bold={false}
        borderInvisible
      />
      <ButtonBasic
        title="Appointments"
        iconNameLeft="appointment"
        numberRight={2}
        bold={false}
        borderInvisible
        href="/(tabs)/(home)/consultation"
      />
      <ButtonBasic
        title="Learn"
        iconNameLeft="book"
        numberRight={1}
        bold={false}
        borderInvisible
        href="/(tabs)/(home)/learn"
      />
      <ButtonBasic
        title="Medication"
        iconNameLeft="medication-blue"
        numberRight={1}
        bold={false}
        borderInvisible
        href="/(tabs)/(home)/medication"
      />
      <ButtonBasic
        title="Questionnaire"
        iconNameLeft="questionnaire-blue"
        numberRight={3}
        bold={false}
        borderInvisible
        href="/(tabs)/(home)/questionnaires"
      />
      <ButtonBasic
        title="Consultation"
        iconNameLeft="appointment"
        numberRight={1}
        bold={false}
        borderInvisible
        href="/(tabs)/(home)/consultation"
      />
      <ButtonBasic
        title="Vitals"
        iconNameLeft="checkmark-blue"
        iconNameRight="arrow-right"
        bold={false}
        borderInvisible
        href="/(tabs)/(home)/vitals-check"
      />
      <ButtonBasic
        title="Connected Devices"
        iconNameLeft="watch"
        iconNameRight="arrow-right"
        bold={false}
        borderInvisible
        href="/(tabs)/(care)/connected-devices"
      />
    </BackgroundWhite>
  );
}
