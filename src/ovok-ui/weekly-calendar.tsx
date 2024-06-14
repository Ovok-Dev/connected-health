import type { Dispatch, SetStateAction } from 'react';
import { CalendarProvider, WeekCalendar } from 'react-native-calendars';

interface Props {
  selectedDate: string;
  setSelectedDate: Dispatch<SetStateAction<string>>;
}

export default function WeeklyCalendar({
  selectedDate,
  setSelectedDate,
}: Props) {
  return (
    <CalendarProvider date={selectedDate} style={{ maxHeight: 90 }}>
      <WeekCalendar
        firstDay={1}
        onDayPress={(date) => setSelectedDate(date.dateString)}
      />
    </CalendarProvider>
  );
}
