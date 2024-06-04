import { useNavigation } from 'expo-router';
import { useContext, useEffect, useState } from 'react';
import { Image, Pressable, Text, TextInput, View } from 'react-native';
import type { DateData } from 'react-native-calendars';
import { Calendar } from 'react-native-calendars';

import { DataContext } from '@/api/common/data.context';
import BackgroundWhite from '@/ovok-ui/background-white';
import ButtonColorful from '@/ovok-ui/button-colorful';
import type { IDataContext } from '@/types/data.context.interface';
import { getIcon } from '@/utils/get-icon';

export default function AddManually() {
  const {
    systolic: initialSystolic,
    diastolic: initialDiastolic,
    updateBloodPressure,
  } = useContext(DataContext) as IDataContext;

  const [date, setDate] = useState<string>(new Date().toDateString());
  const [systolic, setSystolic] = useState<string>(initialSystolic);
  const [diastolic, setDiastolic] = useState<string>(initialDiastolic);
  const [calendarOpen, setCalendarOpen] = useState<boolean>(false);

  const handleDayPress = (dateObject: DateData) => {
    setDate(dateObject.dateString);
    setCalendarOpen(false);
  };

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ title: 'Add Manually' });
  }, [navigation]);

  return (
    <BackgroundWhite>
      <View className="flex-1">
        <Text className="text-[14px] text-[rgb(51,51,51)]">Date</Text>
        <Pressable
          className="my-3 h-[52px] flex-1 flex-row items-center justify-between rounded-lg bg-[white] px-3"
          onPress={() => setCalendarOpen((prev) => !prev)}
        >
          <Text className="text-[14px] text-[rgb(51,51,51)]">{date}</Text>
          <Image source={getIcon('calendar')} width={24} height={24} />
        </Pressable>
        {calendarOpen && <Calendar onDayPress={handleDayPress} />}
      </View>
      <View className="mt-3 flex-1 flex-row gap-4">
        <View className="flex-column flex-1">
          <Text className="text-[14px] text-[rgb(51,51,51)]">Systolic</Text>
          <View className="my-3 h-[52px] flex-1 justify-center rounded-lg bg-[white] px-3">
            <TextInput
              placeholder={systolic.toString()}
              keyboardType="numeric"
              value={systolic.toString()}
              onChangeText={(value) => setSystolic(value)}
            />
          </View>
        </View>
        <View className="flex-column flex-1">
          <Text className="text-[14px] text-[rgb(51,51,51)]">Diastolic</Text>
          <View className="my-3 h-[52px] flex-1 justify-center rounded-lg bg-[white] px-3">
            <TextInput
              placeholder={diastolic.toString()}
              keyboardType="numeric"
              value={diastolic.toString()}
              onChangeText={(value) => setDiastolic(value)}
            />
          </View>
        </View>
      </View>
      <ButtonColorful onPress={() => updateBloodPressure(systolic, diastolic)}>
        Save
      </ButtonColorful>
    </BackgroundWhite>
  );
}
