import type { Daum } from '@/types/observation.interface';

export function getMeasurement(entry: Daum): string {
  const value = entry.measurement?.value.split(':')[1].slice(0, -1) || '';
  return value;
}
