import { useState } from 'react';
import { StatusBar, View } from 'react-native';

import Appointment from '@/ovok-ui/appointment';
import BackgroundWhite from '@/ovok-ui/background-white';
import SwitchButtons from '@/ovok-ui/switch-buttons';
import WeeklyCalendar from '@/ovok-ui/weekly-calendar';

export default function Consultation() {
  const [selectedButton, setSelectedButton] = useState<string>('upcoming');
  const [upcomingAppointments /*setUpcomingAppointments*/] = useState([
    {
      imageName: 'john-doe',
      time: '12:00 PM',
      practitioner: 'Dr. John Doe',
      specialization: 'Cardiologist',
    },
    {
      imageName: 'leah-cole',
      time: '03:00 PM',
      practitioner: 'Dr. Leah Cole',
      specialization: 'Pediatrics',
    },
  ]);
  const [pastAppointments /*setPastAppointments*/] = useState([
    {
      imageName: 'john-doe',
      time: 'Sat Aug 19 09:00 AM',
      practitioner: 'Dr. John Doe',
      specialization: 'Cardiologist',
    },
    {
      imageName: 'leah-cole',
      time: 'Fri Aug 18 02:00 PM',
      practitioner: 'Dr. Leah Cole',
      specialization: 'Pediatrics',
    },
    {
      imageName: 'leah-cole',
      time: 'Fri Aug 18 05:00 PM',
      practitioner: 'Dr. Leah Cole',
      specialization: 'Pediatrics',
    },
    {
      imageName: 'leah-cole',
      time: 'Sat Aug 19 09:00 AM',
      practitioner: 'Dr. Leah Cole',
      specialization: 'Pediatrics',
    },
    {
      imageName: 'john-doe',
      time: 'Fri Aug 19 09:00 AM',
      practitioner: 'Dr. John Doe',
      specialization: 'Cardiologist',
    },
  ]);

  const renderAppointments = () => {
    const appointments =
      selectedButton === 'upcoming' ? upcomingAppointments : pastAppointments;
    return appointments.map((appointmentData) => {
      return (
        <Appointment
          key={appointmentData.time + appointmentData.practitioner}
          imageName={appointmentData.imageName}
          time={appointmentData.time}
          practitioner={appointmentData.practitioner}
          specialization={appointmentData.specialization}
        />
      );
    });
  };

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
      </BackgroundWhite>
    </View>
  );
}
