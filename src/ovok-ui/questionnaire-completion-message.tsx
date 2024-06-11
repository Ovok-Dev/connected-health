import type { PropsWithChildren } from 'react';
import { Text, View } from 'react-native';

import BackgroundWhite from './background-white';

export default function QuestionnaireCompletionMessage({
  children,
}: PropsWithChildren) {
  return (
    <BackgroundWhite>
      <View className="items-center justify-center">
        <Text className="text-[16px] font-semibold leading-normal text-[rgb(14,16,18)]">
          {children}
        </Text>
      </View>
    </BackgroundWhite>
  );
}
