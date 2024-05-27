/* eslint-disable react/react-in-jsx-scope */
import { router, useNavigation } from 'expo-router';
import { useEffect } from 'react';
import { Button, StatusBar, Text, View } from 'react-native';

import BackgroundWhite from '@/ovok-ui/background-white';
import ButtonMedication from '@/ovok-ui/button-medication';
import WeeklyCalendar from '@/ovok-ui/weekly-calendar';

export default function Medication() {
  const navigation = useNavigation();

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
        <ButtonMedication
          title="Lisinopril"
          schedule="Once daily"
          dosage="10mg daily"
          imageName="pills"
        />
        <ButtonMedication
          title="Amlodipine"
          schedule="Once daily"
          dosage="5mg daily"
          imageName="pills"
        />
        <ButtonMedication
          title="Paracetamol"
          schedule="Twice daily"
          dosage="5mg daily"
          imageName="pills"
        />
        <ButtonMedication
          title="Injection name here"
          schedule="Once daily"
          dosage="5mg daily"
          imageName="injection"
        />
      </BackgroundWhite>
    </View>
  );
}
