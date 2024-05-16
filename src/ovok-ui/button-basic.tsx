import { Image, Pressable, Text, View } from 'react-native';

import { Color } from '@/types/colors';
import type { Task } from '@/types/task.types';
import { getIcon } from '@/utils/get-icon';
import { getTaskColor } from '@/utils/get-task-color';

interface Props {
  title: string;
  subtitle?: string;
  taskType?: Task;
  iconNameLeft?: string;
  iconNameRight?: string;
  badgeNumber?: number;
  borderInvisible?: boolean;
}

export default function ButtonBasic({
  title,
  subtitle,
  taskType,
  iconNameLeft,
  iconNameRight,
  badgeNumber,
  borderInvisible = false,
}: Props) {
  let iconLeft: any;
  if (iconNameLeft) {
    iconLeft = getIcon(iconNameLeft);
  } else if (taskType) {
    iconLeft = getIcon(taskType);
  } else {
    iconLeft = null;
  }

  const iconRight = iconNameRight
    ? getIcon(iconNameRight)
    : getIcon('three-dots');

  const renderRightSide = () => {
    if (iconNameRight === 'selected') {
      return (
        <View className="mr-3 h-[25px] w-[60px] items-center justify-center rounded-[3px] bg-[rgb(100,204,39)]">
          <Text className="px-2 py-1 text-[12px] text-white">Selected</Text>
        </View>
      );
    } else if (iconNameRight === 'select') {
      return (
        <View className="mr-3 h-[25px] items-center justify-center rounded-[3px] bg-[rgba(57,99,156,0.1)]">
          <Text className="px-2 py-1 text-[12px] text-[rgb(57,99,156)]">
            Select
          </Text>
        </View>
      );
    } else if (iconNameRight === 'disconnect') {
      return (
        <View className="mr-3 h-[25px] items-center justify-center rounded-[3px] bg-[rgb(248,57,32)]">
          <Text className="px-2 py-1 text-[12px] text-white">Disconnect</Text>
        </View>
      );
    } else if (iconNameRight === 'connect') {
      return (
        <View className="mr-3 h-[25px] items-center justify-center rounded-[3px] bg-[rgb(57,99,156)]">
          <Text className="px-2 py-1 text-[12px] text-white">Connect</Text>
        </View>
      );
    } else if (badgeNumber) {
      return (
        <View
          className="h-[22px] w-[22px] items-center justify-center rounded-full"
          style={{ backgroundColor: Color.BadgeRed }}
        >
          <Text className="text-[white]">{badgeNumber}</Text>
        </View>
      );
    } else {
      return <Image source={iconRight} width={38} height={35} />;
    }
  };

  return (
    <Pressable
      className="my-1 flex-row items-center rounded-lg border bg-[white]"
      style={{
        height: subtitle ? 62 : 60,
        borderColor: borderInvisible ? 'rgb(246,246,246)' : 'rgb(215,221,234)',
      }}
    >
      <View
        className={
          iconNameLeft === 'hiv-monitoring'
            ? 'bg-blue m-3 h-[44px] w-[44px] items-center justify-center rounded-full border border-[rgb(57,99,156)]'
            : 'mx-2 h-[50px] w-[44px] items-center justify-center rounded-md'
        }
        style={{
          backgroundColor: taskType ? getTaskColor(taskType) : 'white',
        }}
      >
        {(iconNameLeft || taskType) && (
          <Image source={iconLeft} width={32} height={32} />
        )}
      </View>
      <View className="flex-column flex-1 justify-center">
        <Text className="text-[14px] font-semibold leading-[1.8] text-[rgb(14,16,18)]">
          {title}
        </Text>
        {subtitle && (
          <Text className="text-[10px] leading-[1.8] text-[rgb(74,84,94)]">
            {subtitle}
          </Text>
        )}
      </View>
      <View className="mx-3 items-center justify-center">
        {renderRightSide()}
      </View>
    </Pressable>
  );
}
