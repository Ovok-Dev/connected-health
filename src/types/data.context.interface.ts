import type { Gender } from './common-ovok.types';

export type UpdatePersonalInformation = (data: {
  newFirstName: string;
  newLastName: string;
  newBirthDate: string;
  newGender: Gender;
}) => void;
export interface IDataContext {
  firstName: string;
  lastName: string;
  email: string;
  birthDate: string;
  gender?: Gender;
  diastolic: string;
  systolic: string;
  heartRate: string;
  weight: string;
  temperature: string;
  updatePersonalInformation: UpdatePersonalInformation;
}
