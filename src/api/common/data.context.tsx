import { router } from 'expo-router';
import type { PropsWithChildren } from 'react';
import { createContext, useEffect, useState } from 'react';

import type { Gender } from '@/types/common-ovok.types';
import type {
  IDataContext,
  PostQuestionnaireResponse,
  UpdateBloodPressure,
  UpdatePersonalInformation,
} from '@/types/data.context.interface';
import type {
  ICreateMedicationFormData,
  IMedicationValues,
} from '@/types/medication-request.interface';
import type { Daum } from '@/types/observation.interface';
import type { IQuestionnaireGetAllResponseData } from '@/types/questionnaire.interface';
import { getMeasurement } from '@/utils/get-measurement';
import { getMedicationValues } from '@/utils/get-medication-values';

import { AuthService } from './auth.service';
import { MedicationRequestService } from './medication-request.service';
import { ObservationService } from './observation.service';
import { QuestionnaireService } from './questionnaire.service';
import { QuestionnaireResponseService } from './questionnaire-response.service';

export const DataContext = createContext<IDataContext | null>(null);

const authService = new AuthService();
const observationService = new ObservationService();
const medicationRequestService = new MedicationRequestService();
const questionnaireService = new QuestionnaireService();
const questionnaireResponseService = new QuestionnaireResponseService();

export function DataProviderWrapper({ children }: PropsWithChildren) {
  const [id, setId] = useState<string>('');
  const [systolicId, setSystolicId] = useState<string>('');
  const [diastolicId, setDiastolicId] = useState<string>('');
  const [photoUrl, setPhotoUrl] = useState<string>('');
  const [firstName, setFirstName] = useState<string>('Jane');
  const [lastName, setLastName] = useState<string>('Doe');
  const [email, setEmail] = useState<string>('patient@email.com');
  const [birthDate, setBirthDate] = useState<string>('1980-01-01');
  const [gender, setGender] = useState<Gender>('female');
  const [heartRate, setHeartRate] = useState<string>('72');
  const [systolic, setSystolic] = useState<string>('140');
  const [diastolic, setDiastolic] = useState<string>('80');
  const [weight, setWeight] = useState<string>('82');
  const [temperature, setTemperature] = useState<string>('36.7');
  const [medicationValues, setMedicationValues] = useState<IMedicationValues[]>(
    []
  );
  const [questionnaires, setQuestionnaires] = useState<
    IQuestionnaireGetAllResponseData[]
  >([]);

  const updatePersonalInformation: UpdatePersonalInformation = ({
    newFirstName,
    newLastName,
    newBirthDate,
    newGender,
  }) => {
    authService
      .updateProfile(id, {
        name: [
          {
            firstName: [newFirstName],
            lastName: newLastName,
          },
        ],
        birthDate: newBirthDate,
        gender: newGender,
      })
      .then((data) => {
        setFirstName(data.name?.[0]?.firstName?.[0]);
        setLastName(data.name?.[0]?.lastName);
        setBirthDate(data.birthDate);
        setGender(data.gender);
        router.navigate('/(tabs)/(settings)/');
      })
      .catch((error) =>
        console.log(
          'Error in updateProfile, updatePersonalInformation: ',
          error
        )
      );
  };

  const createMedicationRequest = (
    createMedicationRequestFormData: ICreateMedicationFormData
  ) => {
    medicationRequestService
      .createMedicationRequest(createMedicationRequestFormData, id)
      .then((data) => {
        setMedicationValues((prev) => [
          ...prev,
          ...getMedicationValues([data]),
        ]);
        router.navigate('/(tabs)/(home)/medication');
      })
      .catch((error) =>
        console.log('Error while creating new medicationRequest: ', error)
      );
  };

  const updateBloodPressure: UpdateBloodPressure = (
    newSystolic: string,
    newDiastolic: string
  ) => {
    const systolicPromise = observationService.updateObservation({
      observationId: systolicId,
      patientId: id,
      observationCode: '8480-6',
      newObservationValue: newSystolic,
    });
    const diastolicPromise = observationService.updateObservation({
      observationId: diastolicId,
      patientId: id,
      observationCode: '8462-4',
      newObservationValue: newDiastolic,
    });
    Promise.all([systolicPromise, diastolicPromise])
      .then((dataArray) => {
        dataArray.forEach((data) => {
          if (data.code === '8480-6') {
            setSystolic(getMeasurement(data));
          } else if (data.code === '8462-4') {
            setDiastolic(getMeasurement(data));
          }
        });
        router.navigate('/(tabs)/(home)');
      })
      .catch((error) =>
        console.log('Error while updating blood pressure: ', error)
      );
  };

  const postQuestionnaireResponse: PostQuestionnaireResponse = (values) => {
    questionnaireResponseService
      .createQuestionnaireResponse({ ...values, patientId: id })
      .catch((error) =>
        console.log('Error while posting answer to questionnaire: ', error)
      );
  };

  useEffect(() => {
    authService
      .getUserInfo()
      .then((data) => {
        setId(data.profile?.id);
        setFirstName(data.profile?.name[0]?.given[0]);
        setLastName(data.profile?.name[0]?.family);
        setEmail(
          data.profile?.telecom?.find((entry: any) => entry.system === 'email')
            .value
        );
        setBirthDate(data.profile?.birthDate);
        setGender(data.profile?.gender);
        setPhotoUrl(data.profile?.photo?.[0]?.url);
      })
      .catch((error) => console.log('Error in getUserInfo: ', error));
  }, []);

  useEffect(() => {
    observationService
      .getAllObservations()
      .then((dataObject: { data: Daum[] }) => {
        dataObject.data.forEach((entry) => {
          const value = getMeasurement(entry);
          switch (entry.code) {
            case '8867-4':
              setHeartRate(value);
              break;
            case '8480-6':
              setSystolic(value);
              setSystolicId(entry.id);
              break;
            case '8462-4':
              setDiastolic(value);
              setDiastolicId(entry.id);
              break;
            case '8310-5':
              setTemperature(value);
              break;
            case '29463-7':
              setWeight(value);
              break;
          }
        });
      })
      .catch((error) =>
        console.log('Error while calling observation.getObservation(): ', error)
      );
  }, []);

  useEffect(() => {
    medicationRequestService
      .getAllMedicationRequests()
      .then((data) => {
        setMedicationValues(getMedicationValues(data));
      })
      .catch((error) =>
        console.log('Error while loading medication requests: ', error)
      );
  }, []);

  useEffect(() => {
    questionnaireService
      .getAllQuestionnaires()
      .then((data) => {
        setQuestionnaires(data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <DataContext.Provider
      value={{
        id,
        firstName,
        lastName,
        email,
        birthDate,
        gender,
        photoUrl,
        heartRate,
        systolic,
        diastolic,
        temperature,
        weight,
        medicationValues,
        questionnaires,
        updatePersonalInformation,
        createMedicationRequest,
        updateBloodPressure,
        postQuestionnaireResponse,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
