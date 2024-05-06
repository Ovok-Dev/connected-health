import { useState } from 'react';
import { StatusBar, View } from 'react-native';
import { CalendarProvider, WeekCalendar } from 'react-native-calendars';

import BackgroundWhite from '@/ovok-ui/background-white';
import ButtonBasic from '@/ovok-ui/button-basic';

export default function VitalsCheck() {
  const [date /* setDate*/] = useState(new Date().toDateString());

  return (
    <View className="flex-1" style={{ marginTop: StatusBar.currentHeight }}>
      <CalendarProvider date={date} style={{ maxHeight: 90 }}>
        <WeekCalendar firstDay={1} />
      </CalendarProvider>
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
      </BackgroundWhite>
    </View>
  );
}
