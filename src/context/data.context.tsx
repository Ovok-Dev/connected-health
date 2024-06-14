import { router } from 'expo-router';
import type { PropsWithChildren } from 'react';
import { createContext, useEffect, useState } from 'react';

import { CarePlanService } from '@/api/common/care-plan.service';
import type { IGetAllAppointmentsResponseData } from '@/types/appointment.interface';
import type { IGetAllCarePlansResponseData } from '@/types/careplan.interface';
import type { Gender } from '@/types/common-ovok.types';
import type {
  IDataContext,
  PostQuestionnaireResponse,
  UpdatePersonalInformation,
  UpdateVitals,
} from '@/types/data.context.interface';
import type {
  ICreateMedicationFormData,
  IMedicationValues,
} from '@/types/medication-request.interface';
import type { Daum } from '@/types/observation.interface';
import type { IQuestionnaireGetAllResponseData } from '@/types/questionnaire.interface';
import { getMeasurement } from '@/utils/get-measurement';
import { getMedicationValues } from '@/utils/get-medication-values';

import { AppointmentService } from '../api/common/appointment.service';
import { AuthService } from '../api/common/auth.service';
import { MedicationRequestService } from '../api/common/medication-request.service';
import { ObservationService } from '../api/common/observation.service';
import { QuestionnaireService } from '../api/common/questionnaire.service';
import { QuestionnaireResponseService } from '../api/common/questionnaire-response.service';

export const DataContext = createContext<IDataContext | null>(null);

const authService = new AuthService();
const observationService = new ObservationService();
const medicationRequestService = new MedicationRequestService();
const questionnaireService = new QuestionnaireService();
const questionnaireResponseService = new QuestionnaireResponseService();
const appointmentService = new AppointmentService();
const carePlanService = new CarePlanService();

export function DataProviderWrapper({ children }: PropsWithChildren) {
  const [id, setId] = useState<string>('');
  const [systolicId, setSystolicId] = useState<string>('');
  const [diastolicId, setDiastolicId] = useState<string>('');
  const [heartRateId, setHeartRateId] = useState<string>('');
  const [weightId, setWeightId] = useState<string>('');
  const [temperatureId, setTemperatureId] = useState<string>('');
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
  const [appointments, setAppointments] = useState<
    IGetAllAppointmentsResponseData[]
  >([]);
  const [carePlans, setCarePlans] = useState<IGetAllCarePlansResponseData[]>(
    []
  );

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

  const updateVitals: UpdateVitals = ({
    newSystolic,
    newDiastolic,
    newHeartRate,
    newWeight,
    newTemperature,
  }) => {
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
    const heartRatePromise = observationService.updateObservation({
      observationId: heartRateId,
      patientId: id,
      observationCode: '8867-4',
      newObservationValue: newHeartRate,
    });
    const weightPromise = observationService.updateObservation({
      observationId: weightId,
      patientId: id,
      observationCode: '29463-7',
      newObservationValue: newWeight,
    });
    const temperaturePromise = observationService.updateObservation({
      observationId: temperatureId,
      patientId: id,
      observationCode: '8310-5',
      newObservationValue: newTemperature,
    });
    Promise.all([
      systolicPromise,
      diastolicPromise,
      heartRatePromise,
      weightPromise,
      temperaturePromise,
    ])
      .then((dataArray) => {
        dataArray.forEach((data) => {
          if (data.code === '8480-6') {
            setSystolic(getMeasurement(data));
          } else if (data.code === '8462-4') {
            setDiastolic(getMeasurement(data));
          } else if (data.code === '8867-4') {
            setHeartRate(getMeasurement(data));
          } else if (data.code === '29463-7') {
            setWeight(getMeasurement(data));
          } else if (data.code === '8310-5') {
            setTemperature(getMeasurement(data));
          }
        });
        router.navigate('/(tabs)/(home)');
      })
      .catch((error) => console.log('Error while updating vitals: ', error));
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
              setHeartRateId(entry.id);
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
              setTemperatureId(entry.id);
              break;
            case '29463-7':
              setWeight(value);
              setWeightId(entry.id);
              break;
          }
        });
      })
      .catch((error) =>
        console.log('Error while calling observation.getObservation(): ', error)
      );
  }, []);

  useEffect(() => {
    questionnaireService
      .getAllQuestionnaires()
      .then((data) => {
        setQuestionnaires(data.data);
      })
      .catch((error) =>
        console.log('Error while loading questionnaires: ', error)
      );
  }, []);

  useEffect(() => {
    appointmentService
      .getAllAppointments()
      .then((data) => {
        setAppointments(data);
      })
      .catch((error) =>
        console.log('Error while loading appointments: ', error)
      );
  }, []);

  useEffect(() => {
    carePlanService
      .getMostRecentUserCarePlan({ userId: id })
      .then((data) => {
        setCarePlans(data);
      })
      .catch((error) =>
        console.log('Error while loading most recent care plan: ', error)
      );
  }, [id]);

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
        questionnaires,
        appointments,
        carePlans,
        medicationValues,
        setMedicationValues,
        updatePersonalInformation,
        createMedicationRequest,
        updateVitals,
        postQuestionnaireResponse,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
