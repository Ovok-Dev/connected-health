import { View } from 'react-native';

import BackgroundWhite from '@/ovok-ui/background-white';
import ButtonBasic from '@/ovok-ui/button-basic';

export default function VitalsCheck() {
  return (
    <View className="flex-1">
      <BackgroundWhite>
        <ButtonBasic
          title="Take one Lisinopril"
          subtitle="10mg"
          taskType="medication"
          iconNameRight="done"
        />
        <ButtonBasic
          title="Walk for 20 minutes"
          taskType="exercise"
          iconNameRight="not-done"
        />
        <ButtonBasic
          title="Check BP"
          taskType="measurement"
          iconNameRight="not-done"
        />
      </BackgroundWhite>
    </View>
  );
}
