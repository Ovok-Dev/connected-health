import React, { createContext, useContext } from 'react';

import { MedplumClient } from '@medplum/core';

interface MedplumContextType {
  medplum: MedplumClient;
  children?: React.ReactNode;
}

const MedplumContext = createContext<MedplumContextType | undefined>(undefined);

export const MedplumProvider: React.FC<{
  medplum: MedplumClient;
  children: React.ReactNode;
}> = ({ medplum, children }) => {
  return (
    <MedplumContext.Provider value={{ medplum }}>
      {children}
    </MedplumContext.Provider>
  );
};

export const useMedplum = () => {
  const context = useContext(MedplumContext);

  if (!context) {
    throw new Error('useMedplum must be used within a MedplumProvider');
  }
  return context.medplum;
};
