import type { PropsWithChildren } from 'react';
import { Text } from 'react-native';

export default function Heading({ children }: PropsWithChildren) {
  return (
    <Text className="my-3 text-[20px] font-semibold leading-normal text-[rgb(14,16,18)]">
      {children}
    </Text>
  );
}
