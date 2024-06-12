import { router, useNavigation } from 'expo-router';
import { useContext, useEffect, useState } from 'react';
import { Button, StatusBar, View } from 'react-native';

import { DataContext } from '@/api/common/data.context';
import Appointment from '@/ovok-ui/appointment';
import BackgroundWhite from '@/ovok-ui/background-white';
import SwitchButtons from '@/ovok-ui/switch-buttons';
import WeeklyCalendar from '@/ovok-ui/weekly-calendar';
import type { IGetAllAppointmentsResponseData } from '@/types/appointment.interface';
import type { IDataContext } from '@/types/data.context.interface';

export default function Consultation() {
  const { appointments } = useContext(DataContext) as IDataContext;

  const [selectedButton, setSelectedButton] = useState<string>('upcoming');

  const renderAppointments = () => {
    const upcomingAppointments: IGetAllAppointmentsResponseData[] = [];
    const pastAppointments: IGetAllAppointmentsResponseData[] = [];
    appointments.forEach((appointment) => {
      const currentTime = new Date().getTime();
      const appointmentTime = new Date(appointment.startDate).getTime();
      if (currentTime <= appointmentTime) {
        upcomingAppointments.push(appointment);
      } else {
        pastAppointments.push(appointment);
      }
    });
    const selectedAppointments =
      selectedButton === 'upcoming' ? upcomingAppointments : pastAppointments;
    return selectedAppointments.map((appointment) => {
      const appointmentTimeString = new Date(
        appointment.startDate
      ).toLocaleDateString();
      const imageName =
        appointment.participant?.[0]?.actor?.display === 'John Doe'
          ? 'john-doe'
          : 'leah-cole';
      const specialization =
        appointment.participant?.[0]?.actor?.display === 'John Doe'
          ? 'Cardiologist'
          : 'Pediatricist';
      return (
        <Appointment
          key={appointment.id}
          imageName={imageName}
          time={appointmentTimeString}
          practitioner={appointment.participant?.[0]?.actor?.display}
          specialization={specialization}
        />
      );
    });
  };

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ title: 'Consultation' });
  }, [navigation]);

  return (
    <View className="flex-1" style={{ marginTop: StatusBar.currentHeight }}>
      <WeeklyCalendar />
      <BackgroundWhite coversFullPage={false}>
        <SwitchButtons
          selectedButton={selectedButton}
          setSelectedButton={setSelectedButton}
          firstButton="upcoming"
          secondButton="past"
          textFirstButton="Upcoming Appointments"
          textSecondButton="Past Appointments"
        />
        <View className="mt-6">{renderAppointments()}</View>
        <Button
          title="Go to video"
          onPress={() => router.navigate('/(tabs)/(home)/video-call')}
        />
      </BackgroundWhite>
    </View>
  );
}
