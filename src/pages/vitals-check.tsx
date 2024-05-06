import { useState } from 'react';
import { Image, StatusBar, Text, View } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';

import BackgroundWhite from '@/ovok-ui/background-white';
import ButtonBasic from '@/ovok-ui/button-basic';
import type { SelectOption } from '@/ovok-ui/render-select';
import { renderSelectButton, renderSelectItem } from '@/ovok-ui/render-select';
import WeeklyCalendar from '@/ovok-ui/weekly-calendar';
import { getIcon } from '@/utils/get-icon';

const vitalsOptions: SelectOption[] = [
  {
    title: 'Blood Pressure',
    value: 'blood-pressure',
  },
  {
    title: 'Heart Rate',
    value: 'heart-rate',
  },
];

const timeOptions: SelectOption[] = [
  {
    title: 'This Month',
    value: 'this-month',
  },
  {
    title: 'Last Two Months very very long',
    value: 'last-two-months',
  },
];

export default function VitalsCheck() {
  const [selectedVitals, setSelectedVitals] = useState<SelectOption>(
    vitalsOptions[0]
  );
  const [selectedTimeSpan, setSelectedTimeSpan] = useState<SelectOption>(
    timeOptions[0]
  );

  // should be deleted
  console.log(selectedVitals, selectedTimeSpan);

  return (
    <View className="flex-1" style={{ marginTop: StatusBar.currentHeight }}>
      <WeeklyCalendar />
      <BackgroundWhite coversFullPage={false}>
        <ButtonBasic
          title="Take one Lisinopril"
          subtitle="10mg"
          taskType="medication"
          iconNameRight="done"
        />
        <ButtonBasic
          title="Walk for 20 minutes"
          taskType="exercise"
          iconNameRight="not-done"
        />
        <ButtonBasic
          title="Check BP"
          taskType="measurement"
          iconNameRight="not-done"
        />
        <View className="mt-3 flex-1">
          <Text className="text-[16px] font-semibold leading-[1.8] text-[rgb(27,27,27)]">
            Vital Trends
          </Text>
        </View>
        <View className="mt-3 flex-1 flex-row gap-3">
          <View className="radius-lg h-[50px] flex-1 flex-row items-center bg-[white]">
            <Image
              source={getIcon('diagram')}
              width={24}
              height={24}
              className="mx-3"
            />
            <SelectDropdown
              data={vitalsOptions}
              onSelect={(value) => setSelectedVitals(value)}
              renderButton={renderSelectButton}
              renderItem={renderSelectItem}
              defaultValue={vitalsOptions[0]}
            />
          </View>
          <View className="radius-lg h-[50px] flex-1 flex-row items-center bg-[white]">
            <Image
              source={getIcon('calendar')}
              width={24}
              height={24}
              className="mx-3"
            />
            <SelectDropdown
              data={timeOptions}
              onSelect={(value) => setSelectedTimeSpan(value)}
              renderButton={renderSelectButton}
              renderItem={renderSelectItem}
              defaultValue={timeOptions[0]}
            />
          </View>
        </View>
      </BackgroundWhite>
    </View>
  );
}
