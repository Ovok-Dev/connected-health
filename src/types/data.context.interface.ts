import type { Gender } from './common-ovok.types';
import type {
  ICreateMedicationFormData,
  IMedicationValues,
} from './medication-request.interface';
import type {
  IQuestionnaireGetAllResponseData,
  IQuestionnaireResponseValues,
} from './questionnaire.interface';

export type UpdatePersonalInformation = (data: {
  newFirstName: string;
  newLastName: string;
  newBirthDate: string;
  newGender: Gender;
}) => void;

export type CreateMedicationRequest = (
  createMedicationRequestFormData: ICreateMedicationFormData
) => void;

export type UpdateVitals = (newVitals: INewVitals) => void;

export type PostQuestionnaireResponse = (
  values: IQuestionnaireResponseValues
) => void;

export interface IDataContext {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  birthDate: string;
  gender: Gender;
  photoUrl: string;
  diastolic: string;
  systolic: string;
  heartRate: string;
  weight: string;
  temperature: string;
  medicationValues: IMedicationValues[];
  questionnaires: IQuestionnaireGetAllResponseData[];
  updatePersonalInformation: UpdatePersonalInformation;
  createMedicationRequest: CreateMedicationRequest;
  updateVitals: UpdateVitals;
  postQuestionnaireResponse: PostQuestionnaireResponse;
}

export interface INewVitals {
  newSystolic: string;
  newDiastolic: string;
  newHeartRate: string;
  newWeight: string;
  newTemperature: string;
}
