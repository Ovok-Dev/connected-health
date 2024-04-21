import { Linking } from 'react-native';
import type { StoreApi, UseBoundStore } from 'zustand';

export function openLinkInBrowser(url: string) {
  Linking.canOpenURL(url).then((canOpen) => canOpen && Linking.openURL(url));
}

type WithSelectors<S> = S extends { getState: () => infer T }
  ? S & { use: { [K in keyof T]: () => T[K] } }
  : never;

export const createSelectors = <S extends UseBoundStore<StoreApi<object>>>(
  _store: S
) => {
  let store = _store as WithSelectors<typeof _store>;
  store.use = {};
  for (let k of Object.keys(store.getState())) {
    (store.use as any)[k] = () => store((s) => s[k as keyof typeof s]);
  }

  return store;
};

export const getMetriportFormattedDate = (
  dateString: Date | string
): string => {
  const today = new Date(dateString);

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0'); // Month is zero-based, so add 1 and pad with leading zero if needed.
  const day = String(today.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
};

export function timeAgoFromNow(dateTimeString: string): string {
  const dateTime = new Date(dateTimeString);
  const now = new Date();

  const timeDifference = now.getTime() - dateTime.getTime();

  // Define time intervals in milliseconds
  const minute = 60 * 1000;
  const hour = minute * 60;
  const day = hour * 24;
  const week = day * 7;
  const month = day * 30;
  const year = day * 365;

  if (timeDifference < minute) {
    const seconds = Math.round(timeDifference / 1000);
    return `${seconds} second${seconds === 1 ? '' : 's'} ago`;
  } else if (timeDifference < hour) {
    const minutes = Math.round(timeDifference / minute);
    return `${minutes} minute${minutes === 1 ? '' : 's'} ago`;
  } else if (timeDifference < day) {
    const hours = Math.round(timeDifference / hour);
    return `${hours} hour${hours === 1 ? '' : 's'} ago`;
  } else if (timeDifference < week) {
    const days = Math.round(timeDifference / day);
    return `${days} day${days === 1 ? '' : 's'} ago`;
  } else if (timeDifference < month) {
    const weeks = Math.round(timeDifference / week);
    return `${weeks} week${weeks === 1 ? '' : 's'} ago`;
  } else if (timeDifference < year) {
    const months = Math.round(timeDifference / month);
    return `${months} month${months === 1 ? '' : 's'} ago`;
  } else {
    const years = Math.round(timeDifference / year);
    return `${years} year${years === 1 ? '' : 's'} ago`;
  }
}

export function calculateTimeDifferenceInMinutes(
  dateTimeString1: string,
  dateTimeString2: string
): number {
  const date1 = new Date(dateTimeString1);
  const date2 = new Date(dateTimeString2);

  if (isNaN(date1.getTime()) || isNaN(date2.getTime())) {
    throw new Error('Invalid datetime strings');
  }

  const timeDifferenceInMilliseconds = Math.abs(
    date2.getTime() - date1.getTime()
  );
  const timeDifferenceInMinutes = timeDifferenceInMilliseconds / (1000 * 60); // Result in minutes as a float

  return Number(timeDifferenceInMinutes.toFixed(1)); // Round to one decimal point
}
