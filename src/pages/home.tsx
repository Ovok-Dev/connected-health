import { useState } from 'react';
import { View } from 'react-native';

import BackgroundWhite from '@/ovok-ui/background-white';
import ButtonBasic from '@/ovok-ui/button-basic';
import DashboardHeader from '@/ovok-ui/dashboard-header';
import EmptyData from '@/ovok-ui/empty-data';
import SearchInput from '@/ovok-ui/search-input';
import SwitchButtons from '@/ovok-ui/swittch-buttons';
import TodaysTasks from '@/ovok-ui/todays-tasks';
import ValuesOverview from '@/ovok-ui/values-overview';

const renderTasks = (tasks: any) => {
  if (tasks.length === 0) {
    return <EmptyData />;
  }
  return tasks.map((task: any) => {
    return (
      <ButtonBasic
        key={task.title}
        title={task.title}
        subtitle={task.subtitle}
        taskType={task.type}
      />
    );
  });
};

export default function DashboardHIVMonitoring() {
  const [displayHIVMonitoring /* setDisplayHIVMonitoring */] = useState(false);
  const [selectedButton, setSelectedButton] = useState<'care-plans' | 'trials'>(
    'care-plans'
  );
  // carePlans and trials should later use the CarePlan interface
  const [carePlans /* setCarePlans */] = useState([
    {
      type: 'medication',
      title: 'Hypertension Management',
      subtitle: '12/08/2023',
    },
    {
      type: 'consultation',
      title: 'Chronic Pain Therapy',
      subtitle: '12/08/2023',
    },
    {
      type: 'caretask',
      title: 'Cancer Chemotherapy',
      subtitle: '12/08/2023',
    },
    {
      type: 'medication',
      title: 'Plan name here',
      subtitle: '12/08/2023',
    },
  ]);
  const [trials /* setTrials */] = useState([
    {
      type: 'document',
      title: 'BP Monitoring Device Study',
      subtitle: '10 mins read',
    },
    {
      type: 'document',
      title: 'Understand Blood Pressure',
      subtitle: '25 mins read',
    },
  ]);

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
        <View className="mt-3">
          <ButtonBasic
            title="HIV Monitoring"
            subtitle="Create Care Plans"
            iconNameLeft="hiv-monitoring"
            iconNameRight="arrow-right"
          />
        </View>
      )}
      <TodaysTasks />
      <SwitchButtons
        selectedButton={selectedButton}
        setSelectedButton={setSelectedButton}
      />
      <View className="my-3 flex-1">
        {selectedButton === 'care-plans'
          ? renderTasks(carePlans)
          : renderTasks(trials)}
      </View>
    </BackgroundWhite>
  );
}
