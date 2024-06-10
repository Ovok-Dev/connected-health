import { useNavigation } from 'expo-router';
import { useEffect, useState } from 'react';
import { Image, StatusBar, Text, View } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';

import BackgroundWhite from '@/ovok-ui/background-white';
import ButtonBasic from '@/ovok-ui/button-basic';
import Charts from '@/ovok-ui/charts';
import type { SelectOption } from '@/ovok-ui/render-select';
import { renderSelectButton, renderSelectItem } from '@/ovok-ui/render-select';
import VitalsCheckTasks from '@/ovok-ui/vitals-check-tasks';
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
    title: 'Last Week',
    value: 'last-week',
  },
  {
    title: 'Last Three Days',
    value: 'last-three-days',
  },
];

export default function VitalsCheck() {
  const [selectedVitals, setSelectedVitals] = useState<SelectOption>(
    vitalsOptions[0]
  );
  const [selectedTimeSpan, setSelectedTimeSpan] = useState<SelectOption>(
    timeOptions[0]
  );

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ title: 'Vitals Check' });
  }, [navigation]);

  return (
    <View className="flex-1" style={{ marginTop: StatusBar.currentHeight }}>
      <WeeklyCalendar />
      <BackgroundWhite coversFullPage={false}>
        <VitalsCheckTasks />
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
              defaultValue={selectedVitals}
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
              defaultValue={selectedTimeSpan}
            />
          </View>
        </View>
        <Charts
          selectedVitalsValue={selectedVitals.value}
          selectedTimeSpanValue={selectedTimeSpan.value}
        />
        <ButtonBasic
          title="Collect Vitals From Phone"
          iconNameLeft="phone"
          iconNameRight="arrow-right"
        />
        <ButtonBasic
          title="Add From Connected Device"
          iconNameLeft="watch"
          iconNameRight="arrow-right"
          href="/(tabs)/(home)/add-from-connected-device"
        />
        <ButtonBasic
          title="Add Manually"
          iconNameLeft="text"
          iconNameRight="arrow-right"
          href="/(tabs)/(home)/add-manually"
        />
      </BackgroundWhite>
    </View>
  );
}
