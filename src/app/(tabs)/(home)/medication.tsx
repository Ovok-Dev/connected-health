/* eslint-disable react/react-in-jsx-scope */
import { router, useNavigation } from 'expo-router';
import { useContext, useEffect } from 'react';
import { Button, StatusBar, Text, View } from 'react-native';

import { DataContext } from '@/api/common/data.context';
import BackgroundWhite from '@/ovok-ui/background-white';
import ButtonMedication from '@/ovok-ui/button-medication';
import WeeklyCalendar from '@/ovok-ui/weekly-calendar';
import type { IDataContext } from '@/types/data.context.interface';

export default function Medication() {
  const { medicationValues } = useContext(DataContext) as IDataContext;
  const navigation = useNavigation();

  const renderMedications = () => {
    return medicationValues.map((entry) => {
      return (
        <ButtonMedication
          key={entry.medicationName}
          imageName="pills"
          title={entry.medicationName}
          dosage={entry.dose}
          schedule={entry.instruction}
        />
      );
    });
  };

  useEffect(() => {
    navigation.setOptions({ title: 'Medication' });
  }, [navigation]);

  return (
    <View className="flex-1" style={{ marginTop: StatusBar.currentHeight }}>
      <WeeklyCalendar />
      <BackgroundWhite coversFullPage={false}>
        <View className="flex-row justify-end">
          <Button
            onPress={() => router.push('/(tabs)/(home)/add-medication')}
            title="Add Medication"
            color="green"
          />
        </View>
        <Text className="my-3 text-[16px] font-semibold">
          Today's Medication
        </Text>
        {renderMedications()}
        <ButtonMedication
          title="Heparin"
          schedule="Once daily"
          dosage="5mg daily"
          imageName="injection"
        />
      </BackgroundWhite>
    </View>
  );
}
