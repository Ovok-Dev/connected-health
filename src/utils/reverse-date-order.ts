import type { DateData } from 'react-native-calendars';

export function reverseDateOrder(dateObject: DateData): string {
  return dateObject.dateString.split('/').reverse().join('-');
}
