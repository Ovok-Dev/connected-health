import { useNavigation } from 'expo-router';
import { useContext, useEffect } from 'react';
import { View } from 'react-native';

import { DataContext } from '@/api/common/data.context';
import BackgroundWhite from '@/ovok-ui/background-white';
import DiagnoseEntry from '@/ovok-ui/diagnose-entry';
import RecordEntriesContainer from '@/ovok-ui/record-entries-container';
import RecordEntry from '@/ovok-ui/record-entry';
import Tabs from '@/ovok-ui/tab';
import type { IDataContext } from '@/types/data.context.interface';

export default function MedicalHistory() {
  const { medicationValues } = useContext(DataContext) as IDataContext;

  const renderMedications = () => {
    return medicationValues.map((entry) => {
      return (
        <RecordEntry
          key={entry.medicationName}
          category={entry.medicationName}
          value={`${entry.dose} - ${entry.instruction}`}
          hasBorderBottom={false}
        />
      );
    });
  };

  const tabScreenGeneral = (
    <>
      <RecordEntriesContainer title="Allergies">
        <RecordEntry category="Drug" value="No known allergies" />
        <RecordEntry category="Food" value="Lactose, Nuts" />
        <RecordEntry
          category="Environmental"
          value="No known allergies"
          hasBorderBottom={false}
        />
      </RecordEntriesContainer>
      <RecordEntriesContainer title="Diagnoses">
        <DiagnoseEntry
          code="60.42"
          codeColor="rgb(78,149,255)"
          date="Fri, Aug 18, 2023"
        >
          Lorem ipsum dolor sit amet consectetur. Sit maecenas et diam platea
          ut. Orci urna gravida felis id leo eget quisque sodales. Faucibus eget
          id gravida tincidunt.
        </DiagnoseEntry>
        <DiagnoseEntry
          code="102.3"
          codeColor="rgb(77,224,74)"
          date="Fri, Aug 18, 2023"
        >
          Lorem ipsum dolor sit amet consectetur. Sit maecenas et diam platea
          ut. Orci urna gravida felis id leo eget quisqu.
        </DiagnoseEntry>
        <DiagnoseEntry
          code="123.5"
          codeColor="rgb(134,78,255)"
          date="Fri, Aug 18, 2023"
          hasBorderBottom={false}
        >
          Lorem ipsum dolor sit amet consectetur maecenas et.
        </DiagnoseEntry>
      </RecordEntriesContainer>
      <RecordEntriesContainer title="Medication">
        {medicationValues.length > 0 && renderMedications()}
      </RecordEntriesContainer>
    </>
  );

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ title: 'Medical History' });
  }, [navigation]);

  return (
    <BackgroundWhite>
      <Tabs
        tabScreens={[
          {
            value: 'general',
            label: 'General',
            screen: tabScreenGeneral,
          },
          {
            value: 'prescriptions',
            label: 'Prescriptions',
            screen: <View />,
          },
          {
            value: 'referrals',
            label: 'Referrals',
            screen: <View />,
          },
          {
            value: 'dental',
            label: 'Dental',
            screen: <View />,
          },
          {
            value: 'vaccination',
            label: 'Vaccination',
            screen: <View />,
          },
        ]}
      />
    </BackgroundWhite>
  );
}
