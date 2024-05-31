import type { PropsWithChildren } from 'react';
import { createContext, useEffect, useState } from 'react';

import type { IDataContext } from '@/types/data.context.interface';

import { AuthService } from './auth.service';

export const DataContext = createContext<IDataContext | null>(null);

export function DataProviderWrapper({ children }: PropsWithChildren) {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  useEffect(() => {
    const authService = new AuthService();
    authService.getUserInfo().then((data) => {
      const newFirstName = data.profile.name[0].given[0];
      const newLastName = data.profile.name[0].family;
      const newEmail = data.profile.telecom.find(
        (entry: any) => entry.system === 'email'
      ).value;
      setFirstName(newFirstName);
      setLastName(newLastName);
      setEmail(newEmail);
    });
  }, []);

  return (
    <DataContext.Provider
      value={{
        firstName,
        lastName,
        email,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
