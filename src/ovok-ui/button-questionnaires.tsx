/* eslint-disable react/react-in-jsx-scope */
import { router } from 'expo-router';
import { Dimensions, Image, Pressable, Text } from 'react-native';

import { getIcon } from '@/utils/get-icon';

interface Props {
  title: string;
  subtitle: string;
  href?: any;
  isNew?: boolean;
  completed?: boolean;
}

export default function ButtonQuestionnaires({
  title,
  subtitle,
  href,
  isNew = false,
  completed = false,
}: Props) {
  const { width } = Dimensions.get('window');

  return (
    <Pressable
      className="my-3 flex-1 items-start gap-2 rounded-lg p-3 pr-6"
      style={{
        backgroundColor: completed ? 'rgb(249,255,245)' : 'white',
        borderWidth: completed ? 1 : 0,
        borderColor: 'rgba(100,204,39,0.45)',
      }}
      onPress={() => href && router.push(href)}
    >
      {isNew && (
        <Text className="rounded-sm bg-[rgb(248,191,39)] px-2 py-1 text-[white]">
          New
        </Text>
      )}
      <Text className="text-[14px] font-semibold leading-[1.8] text-[rgb(14,16,18)]">
        {title}
      </Text>
      <Text className="text-[12px] text-[rgb(74,84,94)]">{subtitle}</Text>
      {completed && (
        <Image
          source={getIcon('checkmark')}
          width={24}
          height={24}
          className="absolute"
          style={{ left: width - 54 }}
        />
      )}
    </Pressable>
  );
}
