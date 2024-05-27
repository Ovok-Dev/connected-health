import { useNavigation } from 'expo-router';
import { useEffect, useState } from 'react';
import { Image, Pressable, Text, TextInput, View } from 'react-native';
import type { DateData } from 'react-native-calendars';
import { Calendar } from 'react-native-calendars';

import BackgroundWhite from '@/ovok-ui/background-white';
import ButtonColorful from '@/ovok-ui/button-colorful';
import { getIcon } from '@/utils/get-icon';

export default function AddMedication() {
  const [medicineName, setMedicineName] = useState<string>('');
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const [frequency, setFrequency] = useState<string>('');
  const [dose, setDose] = useState<string>('');
  const [startDateCalendarOpen, setStartDateCalendarOpen] =
    useState<boolean>(false);
  const [endDateCalendarOpen, setEndDateCalendarOpen] =
    useState<boolean>(false);

  const saveButtonDisabled: boolean =
    medicineName && startDate && endDate && frequency && dose ? false : true;

  const handleStartDateCalendarButton = () => {
    setStartDateCalendarOpen((prev) => !prev);
    setEndDateCalendarOpen(false);
  };

  const handleEndDateCalendarButton = () => {
    setEndDateCalendarOpen((prev) => !prev);
    setStartDateCalendarOpen(false);
  };

  const handleDayPress = (dateObject: DateData) => {
    if (startDateCalendarOpen) {
      setStartDate(dateObject.dateString);
    } else if (endDateCalendarOpen) {
      setEndDate(dateObject.dateString);
    }
    setStartDateCalendarOpen(false);
    setEndDateCalendarOpen(false);
  };

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ title: 'Add Medication' });
  }, [navigation]);

  return (
    <BackgroundWhite>
      <View className="mt-3">
        <Text className="text-[14px]">Medicine Name</Text>
        <TextInput
          value={medicineName}
          onChangeText={(value) => setMedicineName(value)}
          autoCorrect={false}
          className="mt-2 h-[40px] rounded-lg bg-[white] px-3"
        />
      </View>
      <View className="my-3 flex-1 flex-row justify-center gap-3">
        <View className="flex-1">
          <Text className="text-[14px]">Start Date</Text>
          <Pressable
            className="mt-2 flex-1 flex-row rounded-lg bg-[white] p-2"
            onPress={handleStartDateCalendarButton}
          >
            <Image source={getIcon('calendar')} width={20} height={20} />
            <Text className="ml-2 text-[14px] leading-normal">
              {startDate ? startDate : 'DD/MM'}
            </Text>
          </Pressable>
        </View>
        <View className="flex-1">
          <Text className="text-[14px]">End Date</Text>
          <Pressable
            className="align-center mt-2 flex-1 flex-row rounded-lg bg-[white] p-2"
            onPress={handleEndDateCalendarButton}
          >
            <Image source={getIcon('calendar')} width={20} height={20} />
            <Text className="ml-2 text-[14px] leading-normal">
              {endDate ? endDate : 'DD/MM'}
            </Text>
          </Pressable>
        </View>
      </View>
      {(startDateCalendarOpen || endDateCalendarOpen) && (
        <Calendar onDayPress={handleDayPress} />
      )}
      <View className="my-3 flex-1 flex-row gap-3">
        <View className="flex-1">
          <Text className="text-[14px]">Frequency (per day)</Text>
          <TextInput
            value={frequency}
            onChangeText={(value) => setFrequency(value)}
            autoCorrect={false}
            keyboardType="numeric"
            className="mt-2 h-[40px] rounded-lg bg-[white] px-3"
          />
        </View>
        <View className="flex-1">
          <Text className="text-[14px]">Dose (mg)</Text>
          <TextInput
            value={dose}
            onChangeText={(value) => setDose(value)}
            autoCorrect={false}
            keyboardType="numeric"
            className="mt-2 h-[40px] rounded-lg bg-[white] px-3"
          />
        </View>
      </View>
      <ButtonColorful disabled={saveButtonDisabled}>Save</ButtonColorful>
    </BackgroundWhite>
  );
}
