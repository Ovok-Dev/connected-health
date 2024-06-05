/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import { useNavigation } from 'expo-router';
import { useContext, useEffect, useMemo, useState } from 'react';
import { Image, Pressable, Text, TextInput, View } from 'react-native';
import type { DateData } from 'react-native-calendars';
import { Calendar } from 'react-native-calendars';
import { RadioGroup } from 'react-native-radio-buttons-group';

import { DataContext } from '@/api/common/data.context';
import BackgroundWhite from '@/ovok-ui/background-white';
import ButtonColorful from '@/ovok-ui/button-colorful';
import type { Gender } from '@/types/common-ovok.types';
import type { IDataContext } from '@/types/data.context.interface';
import { getIcon } from '@/utils/get-icon';
import { reverseDateOrder } from '@/utils/reverse-date-order';

const genderTypes: { value: Gender; label: string }[] = [
  {
    value: 'male',
    label: 'Male',
  },
  {
    value: 'female',
    label: 'Female',
  },
  {
    value: 'other',
    label: 'Other',
  },
  {
    value: 'unknown',
    label: 'Unknown',
  },
];

export default function PersonalInformation() {
  const {
    firstName: initialFirstName,
    lastName: initialLastName,
    birthDate: initialBirthDate,
    gender: initialGender,
    photoUrl,
    updatePersonalInformation,
  } = useContext(DataContext) as IDataContext;

  let initialGenderIndex: string = '0';
  genderTypes.forEach((el, index) => {
    if (el.value === initialGender) {
      initialGenderIndex = index.toString();
    }
  });

  const [firstName, setFirstName] = useState<string>(initialFirstName || '');
  const [lastName, setLastName] = useState<string>(initialLastName || '');
  const [birthDate, setBirthDate] = useState<string>(
    initialBirthDate || '1980-01-01'
  );
  const [genderId, setGenderId] = useState<string>(initialGenderIndex);
  const [calendarOpen, setCalendarOpen] = useState<boolean>(false);
  const [genderMenuOpen, setGenderMenuOpen] = useState<boolean>(false);

  const handleDayPress = (dateObject: DateData) => {
    const newBirthDate: string = reverseDateOrder(dateObject);
    setBirthDate(newBirthDate);
    setCalendarOpen(false);
  };

  const radioButtons = useMemo(() => {
    return genderTypes.map(({ label }, index) => {
      return {
        id: index.toString(),
        value: index.toString(),
        label,
      };
    });
  }, []);

  const handleGenderPress = (newId: string) => {
    setGenderId(newId);
    setGenderMenuOpen(false);
  };

  const gender: Gender = genderTypes[Number(genderId)].value;

  const genderLabel: string = genderTypes.find(
    (genderType, index) => index.toString() === genderId
  )!.label;

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ title: 'Personal Information' });
  }, [navigation]);

  return (
    <BackgroundWhite>
      <View className="items-center justify-center">
        <View className="my-12 h-[100px] w-[100px] overflow-hidden rounded-full">
          <Image
            source={photoUrl ? { uri: photoUrl } : getIcon('grace')}
            className="w-full flex-1"
            resizeMode="cover"
          />
        </View>
      </View>
      <View className="my-2 flex-row items-center gap-4">
        <View className="flex-1">
          <Text className="text-[14px] text-[rgb(14,14,14)] ">First Name</Text>
          <TextInput
            placeholder="First Name"
            value={firstName}
            onChangeText={(value) => setFirstName(value)}
            className="mt-2 rounded-lg bg-white px-2 py-1"
          />
        </View>
        <View className="flex-1">
          <Text className="text-[14px] text-[rgb(14,14,14)] ">Last Name</Text>
          <TextInput
            placeholder="Last Name"
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
          <Text className="text-[14px] text-[rgb(51,51,51)]">{birthDate}</Text>
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
            selectedId={genderId}
            onPress={handleGenderPress}
            containerStyle={{
              alignItems: 'flex-start',
              marginTop: 4,
              marginLeft: 8,
            }}
          />
        )}
      </View>
      <ButtonColorful
        onPress={() =>
          updatePersonalInformation({
            newFirstName: firstName,
            newLastName: lastName,
            newBirthDate: birthDate,
            newGender: gender,
          })
        }
      >
        Save
      </ButtonColorful>
    </BackgroundWhite>
  );
}
