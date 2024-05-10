import { StatusBar, Text, View } from 'react-native';

import BackgroundWhite from '@/ovok-ui/background-white';
import WeeklyCalendar from '@/ovok-ui/weekly-calendar';

export default function Consultation() {
  return (
    <View className="flex-1" style={{ marginTop: StatusBar.currentHeight }}>
      <WeeklyCalendar />
      <BackgroundWhite coversFullPage={false}>
        <Text className="mt-3 text-[16px] font-semibold">
          Upcoming Appointments
        </Text>
      </BackgroundWhite>
    </View>
  );
}
