import type { Dispatch, PropsWithChildren, SetStateAction } from 'react';
import { Pressable, Text } from 'react-native';

interface Props extends PropsWithChildren {
  value: string;
  selected: boolean;
  setSelectedTabValue: Dispatch<SetStateAction<string>>;
}

export default function TabButton({
  children,
  value,
  selected,
  setSelectedTabValue,
}: Props) {
  return (
    <Pressable className="padding-3" onPress={() => setSelectedTabValue(value)}>
      <Text
        className="text-[14px]"
        style={{
          color: selected ? 'rgb(57, 99, 156)' : 'rgba(51, 51, 51, 0.5)',
          fontWeight: selected ? '500' : '400',
        }}
      >
        {children}
      </Text>
    </Pressable>
  );
}
