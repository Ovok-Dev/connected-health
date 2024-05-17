import { Text, View } from 'react-native';

import BackgroundWhite from '@/ovok-ui/background-white';
import Notification from '@/ovok-ui/notification';

export default function Notifications() {
  return (
    <BackgroundWhite>
      <View className="mt-3">
        <Text className="my-3 text-[16px] font-semibold text-[rgb(29,29,29)]">
          Today
        </Text>
      </View>
      <Notification
        title='You got study offer "Study XYZ"'
        topic="Study Alert"
        time="1h"
        iconName="study"
      />
      <Notification
        title="Appoint with Dr. Jhon at 09:00 AM"
        topic="Appointment"
        time="1h 24m"
        iconName="appointment"
      />
      <Notification
        title="Take Lisinopril 10mg"
        topic="Medication"
        time="3h"
        iconName="medication-blue"
      />
      <Notification
        title="Walk for 25mins"
        topic="Caretask"
        time="16h"
        iconName="walk"
      />
      <View className="mt-3">
        <Text className="my-3 text-[16px] font-semibold text-[rgb(29,29,29)]">
          This Week
        </Text>
      </View>
      <Notification
        title="Take Amlodipine 5mg"
        topic="Medication"
        time="1d"
        iconName="medication-blue"
      />
      <Notification
        title='You got study offer "Study XYZ"'
        topic="Study Alert"
        time="3d"
        iconName="study"
      />
      <Notification
        title="Appoint with Dr. Jhon at 09:00 AM"
        topic="Appointment"
        time="3d"
        iconName="appointment"
      />
      <Notification
        title="Walk for 25mins"
        topic="Caretask"
        time="7d"
        iconName="walk"
      />
    </BackgroundWhite>
  );
}
