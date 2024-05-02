export type ObservationStatus =
  | 'registered'
  | 'preliminary'
  | 'final'
  | 'amended'
  | 'corrected'
  | 'cancelled'
  | 'entered-in-error'
  | 'unknown';

export type ObservationMeasurement = {
  type: string;
  value: string | number;
};

export type ObservationComponent = {
  code: string;
  measurement: ObservationMeasurement;
};

export enum ObservationCode {
  MOOD = '52497-5',
  FEELING = '52497-6',
  QUESTIONNAIRE = '71755-3',
  CONTACTS = '10216-0',
}
