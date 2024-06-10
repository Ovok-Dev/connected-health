import type { Task } from '@/types/task.types';

import VitalsCheckTask from './vitals-check-task';

interface IVitalsCheckTaskValues {
  title: string;
  subtitle?: string;
  taskType: Task;
  initialIsDone: boolean;
}

export default function VitalsCheckTasks() {
  const vitalsCheckTaskValues: IVitalsCheckTaskValues[] = [
    {
      title: 'Take one Lisinopril',
      subtitle: '10mg',
      taskType: 'medication',
      initialIsDone: true,
    },
    {
      title: 'Walk for 20 minutes',
      taskType: 'exercise',
      initialIsDone: false,
    },
    {
      title: 'Check Blood Pressure',
      taskType: 'measurement',
      initialIsDone: false,
    },
  ];

  const renderVitalsCheckTasks = () => {
    return vitalsCheckTaskValues.map((entry) => {
      return (
        <VitalsCheckTask
          subtitle={entry.subtitle}
          title={entry.title}
          initialIsDone={entry.initialIsDone}
          taskType={entry.taskType}
        />
      );
    });
  };
  return <>{renderVitalsCheckTasks()}</>;
}
