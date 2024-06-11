import { useState } from 'react';
import { Image, Text, View } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';

import { getIcon } from '@/utils/get-icon';

import TaskButton from './task-button';

const tasksIconLeft = getIcon('tasks-left');
const tasksIconRight = getIcon('tasks-right');

export default function TodaysTasks() {
  const [tasksSideDisplayed, setTasksSideDisplayed] = useState<
    'left' | 'right'
  >('left');

  const medicationTask = (
    <TaskButton
      taskType="medication"
      badgeNumber={1}
      href="/(tabs)/(home)/medication"
    />
  );
  const questionnaireTask = (
    <TaskButton
      taskType="questionnaire"
      badgeNumber={0}
      href="/(tabs)/(home)/questionnaires"
    />
  );
  const consultationTask = (
    <TaskButton
      taskType="consultation"
      badgeNumber={2}
      href="/(tabs)/(home)/consultation"
    />
  );
  const vitalsCheckTask = (
    <TaskButton
      taskType="vitals"
      badgeNumber={0}
      href="/(tabs)/(home)/vitals-check"
    />
  );
  const learnTask = (
    <TaskButton taskType="learn" badgeNumber={1} href="/(tabs)/(home)/learn" />
  );

  const renderRightActions = () => {
    return (
      <View className="w-full flex-row gap-12">
        {vitalsCheckTask}
        {learnTask}
      </View>
    );
  };

  return (
    <View className="mt-6 flex-1">
      <View className="mb-2 flex-1 flex-row justify-between">
        <Text className="text-[16px] font-semibold text-[rgb(29,29,29)]">
          Today's Tasks
        </Text>
        <Image
          source={
            tasksSideDisplayed === 'left' ? tasksIconLeft : tasksIconRight
          }
          width={20}
          height={8}
          className="self-start"
        />
      </View>
      <View>
        <Swipeable
          renderRightActions={renderRightActions}
          onSwipeableOpen={() => setTasksSideDisplayed('right')}
          onSwipeableClose={() => setTasksSideDisplayed('left')}
        >
          <View className="flex-1 flex-row gap-12">
            {medicationTask}
            {questionnaireTask}
            {consultationTask}
          </View>
        </Swipeable>
      </View>
      <View className="flex-1 flex-row justify-between gap-3">
        <View className="flex-column items-center">
          {/* <Image
            source={}
          /> */}
        </View>
      </View>
    </View>
  );
}
