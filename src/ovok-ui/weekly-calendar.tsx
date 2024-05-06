import { useState } from 'react';
import { CalendarProvider, WeekCalendar } from 'react-native-calendars';

export default function WeeklyCalendar() {
  const [date /* setDate*/] = useState(new Date().toDateString());

  return (
    <CalendarProvider date={date} style={{ maxHeight: 90 }}>
      <WeekCalendar firstDay={1} />
    </CalendarProvider>
  );
}
