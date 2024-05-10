import { useState } from 'react';
import { Image, Pressable, Text, TextInput, View } from 'react-native';
import type { DateData } from 'react-native-calendars';
import { Calendar } from 'react-native-calendars';
import NumericInput from 'react-native-numeric-input';

import BackgroundWhite from '@/ovok-ui/background-white';
import ButtonColorful from '@/ovok-ui/button-colorful';
import { getIcon } from '@/utils/get-icon';

export default function AddMedication() {
  const [medicineName, setMedicineName] = useState<string>('');
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const [frequency, setFrequency] = useState<number>(0);
  const [dose, setDose] = useState<string>('');
  const [startDateCalendarOpen, setStartDateCalendarOpen] =
    useState<boolean>(false);
  const [endDateCalendarOpen, setEndDateCalendarOpen] =
    useState<boolean>(false);

  const saveButtonDisabled: boolean =
    medicineName && startDate && endDate && frequency && dose ? false : true;

  const handleStartDateDayPress = (dateObject: DateData) => {
    setStartDate(dateObject.dateString);
    setStartDateCalendarOpen(false);
  };

  const handleEndDateDayPress = (dateObject: DateData) => {
    setEndDate(dateObject.dateString);
    setEndDateCalendarOpen(false);
  };

  return (
    <BackgroundWhite>
      <View className="flex-1">
        <Text className="text-[14px]">Medicine Name</Text>
        <TextInput
          value={medicineName}
          onChangeText={(value) => setMedicineName(value)}
          autoCorrect={false}
          className="rounded-lg bg-[white]"
        />
      </View>
      <View className="flex-1 flex-row gap-3">
        <View className="flex-1">
          <Text className="text-[14px]">Start Date</Text>
          <Pressable className="flex-1 flex-row rounded-lg bg-[white] p-2">
            <Image source={getIcon('calendar')} width={20} height={20} />
            <Text className="ml-2 text-[14px]">
              {startDate ? startDate : 'DD/MM'}
            </Text>
          </Pressable>
          {startDateCalendarOpen && (
            <Calendar onDayPress={handleStartDateDayPress} />
          )}
        </View>
      </View>
      <View className="flex-1 flex-row gap-3">
        <View className="flex-1">
          <Text className="text-[14px]">End Date</Text>
          <Pressable className="flex-1 flex-row rounded-lg bg-[white] p-2">
            <Image source={getIcon('calendar')} width={20} height={20} />
            <Text className="ml-2 text-[14px]">
              {endDate ? endDate : 'DD/MM'}
            </Text>
          </Pressable>
          {endDateCalendarOpen && (
            <Calendar onDayPress={handleEndDateDayPress} />
          )}
        </View>
      </View>
      <View className="flex-1 flex-row gap-3">
        <View className="flex-1">
          <Text className="text-[14px]">Frequency</Text>
          <NumericInput
            type="up-down"
            valueType="integer"
            value={frequency}
            onChange={(value) => setFrequency(value)}
            containerStyle={{
              backgroundColor: 'white',
              borderRadius: 8,
            }}
          />
        </View>
        <View className="flex-1">
          <Text className="text-[14px]">Frequency</Text>
          <TextInput
            value={dose}
            onChangeText={(value) => setDose(value)}
            autoCorrect={false}
            keyboardType="numeric"
            className="rounded-lg bg-[white]"
          />
        </View>
        <ButtonColorful disabled={saveButtonDisabled}>Save</ButtonColorful>
      </View>
    </BackgroundWhite>
  );
}
