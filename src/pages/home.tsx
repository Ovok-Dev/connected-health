import { useState } from 'react';

import BackgroundWhite from '@/ovok-ui/background-white';
import ButtonBasic from '@/ovok-ui/button-basic';
import DashboardHeader from '@/ovok-ui/dashboard-header';
import SearchInput from '@/ovok-ui/search-input';
import SwitchButtons from '@/ovok-ui/swittch-buttons';
import TodaysTasks from '@/ovok-ui/todays-tasks';
import ValuesOverview from '@/ovok-ui/values-overview';

export default function DashboardHIVMonitoring() {
  const [displayHIVMonitoring /* setDisplayHIVMonitoring */] = useState(false);
  const [selectedButton, setSelectedButton] = useState<'care-plans' | 'trials'>(
    'care-plans'
  );

  return (
    <BackgroundWhite>
      <DashboardHeader />
      <SearchInput />
      <ValuesOverview
        heartRate="92"
        bloodPressure="140/88"
        temperature="36.2"
        weight="80"
      />
      {displayHIVMonitoring && (
        <ButtonBasic
          title="HIV Monitoring"
          subtitle="Create Care Plans"
          iconNameLeft="hiv-monitoring"
          iconNameRight="arrow-right"
        />
      )}
      <TodaysTasks />
      <SwitchButtons
        selectedButton={selectedButton}
        setSelectedButton={setSelectedButton}
      />
    </BackgroundWhite>
  );
}
