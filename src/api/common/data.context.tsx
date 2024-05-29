import type { PropsWithChildren } from 'react';
import { createContext, useEffect, useState } from 'react';

import type { IDataContext } from '@/types/data.context.interface';

import { AuthService } from './auth.service';

export const DataContext = createContext<IDataContext | null>(null);

export function DataProviderWrapper({ children }: PropsWithChildren) {
  const [firstName, setFirstName] = useState<string>('');

  useEffect(() => {
    const authService = new AuthService();
    authService.getUserInfo().then((data) => {
      const newFirstName = data.profile.name[0].given[0];
      setFirstName(newFirstName);
    });
  }, []);

  return (
    <DataContext.Provider
      value={{
        firstName,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
