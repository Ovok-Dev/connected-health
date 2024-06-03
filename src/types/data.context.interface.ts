import type { Gender } from './common-ovok.types';
import type {
  ICreateMedicationFormData,
  IMedicationValues,
} from './medication-request.interface';

export type UpdatePersonalInformation = (data: {
  newFirstName: string;
  newLastName: string;
  newBirthDate: string;
  newGender: Gender;
}) => void;

export type CreateMedicationRequest = (
  createMedicationRequestFormData: ICreateMedicationFormData
) => void;

export interface IDataContext {
  id: string;
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
  medicationValues: IMedicationValues[];
  updatePersonalInformation: UpdatePersonalInformation;
  createMedicationRequest: CreateMedicationRequest;
}