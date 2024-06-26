import { useNavigation } from 'expo-router';
import { useContext, useEffect, useState } from 'react';
import { View } from 'react-native';

import { DataContext } from '@/context/data.context';
import BackgroundWhite from '@/ovok-ui/background-white';
import ButtonBasic from '@/ovok-ui/button-basic';
import DashboardHeader from '@/ovok-ui/dashboard-header';
import EmptyData from '@/ovok-ui/empty-data';
import SearchInput from '@/ovok-ui/search-input';
import SwitchButtons from '@/ovok-ui/switch-buttons';
import TodaysTasks from '@/ovok-ui/todays-tasks';
import ValuesOverview from '@/ovok-ui/values-overview';
import type { IDataContext } from '@/types/data.context.interface';

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
        iconNameRight="three-dots"
        href={{
          pathname: '/(tabs)/(home)/default',
          params: { title: task.title, pageTitle: task.title },
        }}
      />
    );
  });
};

export default function Home() {
  const { heartRate, diastolic, systolic, temperature, weight } = useContext(
    DataContext
  ) as IDataContext;

  const [displayHIVMonitoring /* setDisplayHIVMonitoring */] = useState(false);
  const [selectedButton, setSelectedButton] = useState<string>('care-plans');
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
      title: 'Immonuglobulin Therapy',
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

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <BackgroundWhite>
      <DashboardHeader />
      <SearchInput />
      <ValuesOverview
        heartRate={heartRate}
        bloodPressure={`${systolic}/${diastolic}`}
        temperature={temperature}
        weight={weight}
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
        firstButton="care-plans"
        secondButton="trials"
        textFirstButton="Care Plans"
        textSecondButton="Trials"
      />
      <View className="my-3 flex-1">
        {selectedButton === 'care-plans'
          ? renderTasks(carePlans)
          : renderTasks(trials)}
      </View>
    </BackgroundWhite>
  );
}
