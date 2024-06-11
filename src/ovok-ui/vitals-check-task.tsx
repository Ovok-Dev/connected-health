import { useState } from 'react';

import type { Task } from '@/types/task.types';

import ButtonBasic from './button-basic';

interface Props {
  title: string;
  subtitle?: string;
  taskType: Task;
  initialIsDone: boolean;
}

export default function VitalsCheckTask({
  title,
  subtitle,
  taskType,
  initialIsDone,
}: Props) {
  const [isDone, setIsDone] = useState<boolean>(initialIsDone);

  return (
    <ButtonBasic
      title={title}
      subtitle={subtitle}
      taskType={taskType}
      iconNameRight={isDone ? 'done' : 'not-done'}
      onPress={() => setIsDone((prev) => !prev)}
    />
  );
}
