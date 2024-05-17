/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import { useMemo, useState } from 'react';
import { Image, Pressable, Text, TextInput, View } from 'react-native';
import type { DateData } from 'react-native-calendars';
import { Calendar } from 'react-native-calendars';
import { RadioGroup } from 'react-native-radio-buttons-group';

import BackgroundWhite from '@/ovok-ui/background-white';
import ButtonColorful from '@/ovok-ui/button-colorful';
import { getIcon } from '@/utils/get-icon';

const genderTypes: { value: string; label: string }[] = [
  {
    value: '0',
    label: 'Male',
  },
  {
    value: '1',
    label: 'Female',
  },
  {
    value: '2',
    label: 'Do Not Wish to Specify',
  },
];

export default function PersonalInformation() {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [dateBirth, setDateBirth] = useState<string>('01/01/1980');
  const [gender, setGender] = useState<string>('0');
  const [calendarOpen, setCalendarOpen] = useState<boolean>(false);
  const [genderMenuOpen, setGenderMenuOpen] = useState<boolean>(false);

  const handleDayPress = (dateObject: DateData) => {
    setDateBirth(dateObject.dateString);
    setCalendarOpen(false);
  };

  const radioButtons = useMemo(() => {
    return genderTypes.map(({ value, label }, index) => {
      return {
        id: index.toString(),
        value,
        label,
      };
    });
  }, []);

  const handleGenderPress = (newId: string) => {
    setGender(newId);
    setGenderMenuOpen(false);
  };

  const genderLabel: string = genderTypes.find(
    (genderType) => genderType.value === gender
  )!.label;

  return (
    <BackgroundWhite>
      <View className="items-center justify-center">
        <View className="my-12 h-[100px] w-[100px] overflow-hidden rounded-full">
          <Image
            source={getIcon('grace')}
            className="w-full flex-1"
            resizeMode="contain"
          />
        </View>
      </View>
      <View className="my-2 flex-row items-center gap-4">
        <View className="flex-1">
          <Text className="text-[14px] text-[rgb(14,14,14)] ">First Name</Text>
          <TextInput
            placeholder="Grace"
            value={firstName}
            onChangeText={(value) => setFirstName(value)}
            className="mt-2 rounded-lg bg-white px-2 py-1"
          />
        </View>
        <View className="flex-1">
          <Text className="text-[14px] text-[rgb(14,14,14)] ">Last Name</Text>
          <TextInput
            placeholder="Agyei"
            value={lastName}
            onChangeText={(value) => setLastName(value)}
            className="mt-2 rounded-lg bg-white px-2 py-1"
          />
        </View>
      </View>
      <View className="mt-3 flex-1">
        <Text className="text-[14px] text-[rgb(51,51,51)]">Date of Birth</Text>
        <Pressable
          className="my-3 h-[52px] flex-1 flex-row items-center justify-between rounded-lg bg-[white] px-3"
          onPress={() => setCalendarOpen((prev) => !prev)}
        >
          <Text className="text-[14px] text-[rgb(51,51,51)]">{dateBirth}</Text>
          <Image source={getIcon('arrow-down')} width={24} height={24} />
        </Pressable>
        {calendarOpen && <Calendar onDayPress={handleDayPress} />}
      </View>
      <View className="mt-3 flex-1">
        <Text className="text-[14px] text-[rgb(51,51,51)]">Gender</Text>
        <Pressable
          className="my-3 h-[52px] flex-1 flex-row items-center justify-between rounded-lg bg-[white] px-3"
          onPress={() => setGenderMenuOpen((prev) => !prev)}
        >
          <Text className="text-[14px] text-[rgb(51,51,51)]">
            {genderLabel || 'none'}
          </Text>
          <Image source={getIcon('arrow-down')} width={24} height={24} />
        </Pressable>
        {genderMenuOpen && (
          <RadioGroup
            radioButtons={radioButtons}
            selectedId={gender}
            onPress={handleGenderPress}
            containerStyle={{
              alignItems: 'flex-start',
              marginTop: 4,
              marginLeft: 8,
            }}
          />
        )}
      </View>
      <ButtonColorful>Save</ButtonColorful>
    </BackgroundWhite>
  );
}
