import { Image, Text, View } from 'react-native';

import BackgroundWhite from '@/ovok-ui/background-white';
import { Color } from '@/types/colors';
import { getIcon } from '@/utils/get-icon';

export default function Care() {
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
      <View className="mt-4 rounded-xl bg-white py-1">
        <View className="flex-row py-2">
          <View className="items-center justify-center">
            <Image
              source={getIcon('messages')}
              width={16}
              height={16}
              style={{ marginHorizontal: 12 }}
            />
          </View>
          <View className="flex-1 flex-row items-center justify-between">
            <Text className="text-[14px] leading-normal text-[rgb(51,51,51)]">
              Chats
            </Text>
            <Image source={getIcon('chat-pics')} width={102} height={34} />
          </View>
        </View>
      </View>
      <View className="mt-4 rounded-xl bg-white py-1">
        <View className="flex-row py-2">
          <View className="items-center justify-center">
            <Image
              source={getIcon('ai')}
              width={16}
              height={16}
              style={{ marginHorizontal: 12 }}
            />
          </View>
          <View className="flex-1 flex-row items-center justify-between">
            <Text className="text-[14px] leading-normal text-[rgb(51,51,51)]">
              AI Care
            </Text>
            <Image
              source={getIcon('arrow-right')}
              width={24}
              height={24}
              style={{ marginHorizontal: 12 }}
            />
          </View>
        </View>
      </View>
      <View className="mt-4 rounded-xl bg-white py-1">
        <View className="flex-row py-2">
          <View className="items-center justify-center">
            <Image
              source={getIcon('appointment')}
              width={16}
              height={16}
              style={{ marginHorizontal: 12 }}
            />
          </View>
          <View className="flex-1 flex-row items-center justify-between">
            <Text className="text-[14px] leading-normal text-[rgb(51,51,51)]">
              Appointments
            </Text>
            <View className="mx-3 items-center justify-center">
              <Text
                className="rounded-full p-2"
                style={{ color: Color.GreenText, backgroundColor: Color.Green }}
              >
                2
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View className="mt-4 rounded-xl bg-white py-1">
        <View className="flex-row py-2">
          <View className="items-center justify-center">
            <Image
              source={getIcon('book')}
              width={16}
              height={16}
              style={{ marginHorizontal: 12 }}
            />
          </View>
          <View className="flex-1 flex-row items-center justify-between">
            <Text className="text-[14px] leading-normal text-[rgb(51,51,51)]">
              Learn
            </Text>
            <View className="mx-3 items-center justify-center">
              <Text
                className="rounded-full p-2"
                style={{
                  color: Color.YellowText,
                  backgroundColor: Color.Yellow,
                }}
              >
                1
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View className="mt-4 rounded-xl bg-white py-1">
        <View className="flex-row py-2">
          <View className="items-center justify-center">
            <Image
              source={getIcon('medication-blue')}
              width={16}
              height={16}
              style={{ marginHorizontal: 12 }}
            />
          </View>
          <View className="flex-1 flex-row items-center justify-between">
            <Text className="text-[14px] leading-normal text-[rgb(51,51,51)]">
              Medication
            </Text>
            <View className="mx-3 items-center justify-center">
              <Text
                className="rounded-full p-2"
                style={{
                  color: Color.YellowText,
                  backgroundColor: Color.Yellow,
                }}
              >
                1
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View className="mt-4 rounded-xl bg-white py-1">
        <View className="flex-row py-2">
          <View className="items-center justify-center">
            <Image
              source={getIcon('questionnaire-blue')}
              width={16}
              height={16}
              style={{ marginHorizontal: 12 }}
            />
          </View>
          <View className="flex-1 flex-row items-center justify-between">
            <Text className="text-[14px] leading-normal text-[rgb(51,51,51)]">
              Questionnaire
            </Text>
            <View className="mx-3 items-center justify-center">
              <Text
                className="rounded-full p-2"
                style={{ color: Color.BlueText, backgroundColor: Color.Blue }}
              >
                3
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View className="mt-4 rounded-xl bg-white py-1">
        <View className="flex-row py-2">
          <View className="items-center justify-center">
            <Image
              source={getIcon('appointment')}
              width={16}
              height={16}
              style={{ marginHorizontal: 12 }}
            />
          </View>
          <View className="flex-1 flex-row items-center justify-between">
            <Text className="text-[14px] leading-normal text-[rgb(51,51,51)]">
              Consultation
            </Text>
            <View className="mx-3 items-center justify-center">
              <Text
                className="rounded-full p-2"
                style={{
                  color: Color.YellowText,
                  backgroundColor: Color.Yellow,
                }}
              >
                1
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View className="mt-4 rounded-xl bg-white py-1">
        <View className="flex-row py-2">
          <View className="items-center justify-center">
            <Image
              source={getIcon('checkmark-blue')}
              width={16}
              height={16}
              style={{ marginHorizontal: 12 }}
            />
          </View>
          <View className="flex-1 flex-row items-center justify-between">
            <Text className="text-[14px] leading-normal text-[rgb(51,51,51)]">
              Vitals
            </Text>
            <Image
              source={getIcon('arrow-right')}
              width={24}
              height={24}
              style={{ marginHorizontal: 12 }}
            />
          </View>
        </View>
      </View>
      <View className="mt-4 rounded-xl bg-white py-1">
        <View className="flex-row py-2">
          <View className="items-center justify-center">
            <Image
              source={getIcon('watch')}
              width={16}
              height={16}
              style={{ marginHorizontal: 12 }}
            />
          </View>
          <View className="flex-1 flex-row items-center justify-between">
            <Text className="text-[14px] leading-normal text-[rgb(51,51,51)]">
              Connected Devices
            </Text>
            <Image
              source={getIcon('arrow-right')}
              width={24}
              height={24}
              style={{ marginHorizontal: 12 }}
            />
          </View>
        </View>
      </View>
    </BackgroundWhite>
  );
}
