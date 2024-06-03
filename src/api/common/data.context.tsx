import type { PropsWithChildren } from 'react';
import { createContext, useEffect, useState } from 'react';

import type { Gender } from '@/types/common-ovok.types';
import type {
  IDataContext,
  UpdatePersonalInformation,
} from '@/types/data.context.interface';
import type { Daum } from '@/types/observation.interface';

import { AuthService } from './auth.service';
import { ObservationService } from './observation.service';

export const DataContext = createContext<IDataContext | null>(null);

const authService = new AuthService();
const observationService = new ObservationService();

export function DataProviderWrapper({ children }: PropsWithChildren) {
  const [id, setId] = useState<string>('');
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [birthDate, setBirthDate] = useState<string>('');
  const [gender, setGender] = useState<Gender | undefined>();
  const [heartRate, setHeartRate] = useState<string>('72');
  const [systolic, setSystolic] = useState<string>('140');
  const [diastolic, setDiastolic] = useState<string>('80');
  const [weight, setWeight] = useState<string>('82');
  const [temperature, setTemperature] = useState<string>('36.7');

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
      })
      .catch((error) =>
        console.log(
          'Error in updateProfile, updatePersonalInformation: ',
          error
        )
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
      })
      .catch((error) => console.log('Error in getUserInfo: ', error));
  }, []);

  useEffect(() => {
    observationService
      .getObservation()
      .then((dataObject: { data: Daum[] }) => {
        dataObject.data.forEach((entry) => {
          const value =
            entry.measurement?.value.split(':')[1].slice(0, -1) || '';
          switch (entry.code) {
            case '8867-4':
              setHeartRate(value);
              break;
            case '8480-6':
              setSystolic(value);
              break;
            case '8462-4':
              setDiastolic(value);
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

  return (
    <DataContext.Provider
      value={{
        firstName,
        lastName,
        email,
        birthDate,
        gender,
        updatePersonalInformation,
        heartRate,
        systolic,
        diastolic,
        temperature,
        weight,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
