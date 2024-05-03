import { Image, Text, View } from 'react-native';

import { COLORS } from '@/types/colors';
import { getIcon } from '@/utils/get-icon';

interface Props {
  taskType: string;
  badgeNumber: number;
}

interface TaskValues {
  backgroundColor: string;
  title: string;
}

function getTaskValues(taskType: string): TaskValues {
  let backgroundColor: string = '';
  let title: string = '';
  switch (taskType) {
    case 'medication':
      backgroundColor = COLORS.Green;
      title = 'Medication';
      break;
    case 'questionnaire':
      backgroundColor = COLORS.Red;
      title = 'Questionnaire';
      break;
    case 'caretask':
      backgroundColor = COLORS.Blue;
      title = 'Caretask';
      break;
    case 'consultation':
      backgroundColor = COLORS.Yellow;
      title = 'Consultation';
      break;
    case 'vitals':
      backgroundColor = COLORS.VitalsGreen;
      title = 'Vitals';
      break;
    case 'learn':
      backgroundColor = COLORS.Purple;
      title = 'Learn';
      break;
    default:
      console.log('Incorrect task type.');
  }
  return { backgroundColor, title };
}

export default function TaskButton({ taskType, badgeNumber }: Props) {
  const { backgroundColor, title } = getTaskValues(taskType);

  return (
    <View className="items-center">
      <View
        className="my-3 h-[48px] w-[48px] items-center justify-center rounded-lg"
        style={{ backgroundColor }}
      >
        {badgeNumber > 0 && (
          <View
            className="absolute bottom-[36px] left-[36px] h-[16px] w-[16px] items-center justify-center rounded-full"
            style={{ backgroundColor: COLORS.BadgeRed }}
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
