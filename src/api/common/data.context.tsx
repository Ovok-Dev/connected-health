import type { PropsWithChildren } from 'react';
import { createContext, useEffect, useState } from 'react';

import type { Gender } from '@/types/common-ovok.types';
import type {
  IDataContext,
  UpdatePersonalInformation,
} from '@/types/data.context.interface';

import { AuthService } from './auth.service';

export const DataContext = createContext<IDataContext | null>(null);

const authService = new AuthService();

export function DataProviderWrapper({ children }: PropsWithChildren) {
  const [id, setId] = useState<string>('');
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [birthDate, setBirthDate] = useState<string>('');
  const [gender, setGender] = useState<Gender | undefined>();

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
      .catch((error) => console.log(error));
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
      .catch((error) => console.log(error));
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
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
