/* eslint-disable react/react-in-jsx-scope */
import { router, useNavigation } from 'expo-router';
import { useContext, useEffect, useState } from 'react';
import { Button, StatusBar, Text, View } from 'react-native';

import { MedicationRequestService } from '@/api/common/medication-request.service';
import { DataContext } from '@/context/data.context';
import BackgroundWhite from '@/ovok-ui/background-white';
import ButtonMedication from '@/ovok-ui/button-medication';
import WeeklyCalendar from '@/ovok-ui/weekly-calendar';
import type { IGetAllCarePlansResponseData } from '@/types/careplan.interface';
import type { IDataContext } from '@/types/data.context.interface';
import type {
  IMedicationValues,
  MedicationRequestResponseData,
} from '@/types/medication-request.interface';
import { getMedicationValues } from '@/utils/get-medication-values';

const medicationRequestService = new MedicationRequestService();

export default function Medication() {
  const {
    carePlans,
    setSelectedCarePlan,
    medicationValues,
    setMedicationValues,
  } = useContext(DataContext) as IDataContext;

  const [selectedDate, setSelectedDate] = useState<string>(
    new Date().toDateString()
  );

  const renderMedications = () => {
    if (!medicationValues) return null;
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

  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({ title: 'Medication' });
  }, [navigation]);

  useEffect(() => {
    const selectedDateObject = new Date(selectedDate);
    const carePlan: IGetAllCarePlansResponseData | undefined = carePlans.find(
      (plan) => {
        const planStartDateObject = new Date(plan.period.start);
        const planEndDateObject = new Date(plan.period.end);
        const isCurrentPlan: boolean =
          selectedDateObject.getTime() >= planStartDateObject.getTime() &&
          selectedDateObject.getTime() <= planEndDateObject.getTime();
        return isCurrentPlan;
      }
    );
    if (!carePlan) {
      setSelectedCarePlan(null);
      setMedicationValues([]);
      return;
    }
    setSelectedCarePlan(carePlan);
    Promise.all(
      carePlan.activity.map(async (activity) => {
        if (activity.reference.type === 'MedicationRequest') {
          const medicationRequestId: string = activity.reference.id;
          const medicationRequestData =
            await medicationRequestService.getMedicationRequest(
              medicationRequestId
            );
          return medicationRequestData;
        }
      }) as Promise<
        MedicationRequestResponseData & { medicationName: string }
      >[]
    )
      .then((data) => {
        const result: IMedicationValues[] = getMedicationValues(data);
        setMedicationValues(result);
      })
      .catch((error) =>
        console.log('Error while rendering medication plan: ', error)
      );
  }, [carePlans, selectedDate, setMedicationValues, setSelectedCarePlan]);

  return (
    <View className="flex-1" style={{ marginTop: StatusBar.currentHeight }}>
      <WeeklyCalendar
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
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
