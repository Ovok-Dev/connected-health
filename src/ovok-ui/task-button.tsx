import { Image, Text, View } from 'react-native';

import { Color } from '@/types/colors';
import type { Task } from '@/types/task.types';
import { getIcon } from '@/utils/get-icon';
import { getTaskColor } from '@/utils/get-task-color';

interface Props {
  taskType: Task;
  badgeNumber: number;
}

function getTaskTitle(taskType: Task): string {
  let title: string = '';
  switch (taskType) {
    case 'medication':
      title = 'Medication';
      break;
    case 'questionnaire':
      title = 'Questionnaire';
      break;
    case 'caretask':
      title = 'Caretask';
      break;
    case 'consultation':
      title = 'Consultation';
      break;
    case 'vitals':
      title = 'Vitals';
      break;
    case 'learn':
      title = 'Learn';
      break;
  }
  return title;
}

export default function TaskButton({ taskType, badgeNumber }: Props) {
  const title: string = getTaskTitle(taskType);
  const backgroundColor: Color = getTaskColor(taskType);

  return (
    <View className="items-center">
      <View
        className="my-3 h-[48px] w-[48px] items-center justify-center rounded-lg"
        style={{ backgroundColor }}
      >
        {badgeNumber > 0 && (
          <View
            className="absolute bottom-[36px] left-[36px] h-[16px] w-[16px] items-center justify-center rounded-full"
            style={{ backgroundColor: Color.BadgeRed }}
          >
            <Text className="text-[12px] text-[white]">{badgeNumber}</Text>
          </View>
        )}
        <Image source={getIcon(taskType)} width={24} height={24} />
      </View>
      <View className="mt-1">
        <Text className="text-center text-[14px] text-[black]">{title}</Text>
      </View>
    </View>
  );
}
