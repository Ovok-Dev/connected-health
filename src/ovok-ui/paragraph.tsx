import type { PropsWithChildren } from 'react';
import { Text } from 'react-native';

export default function Paragraph({ children }: PropsWithChildren) {
  return (
    <Text className="my-3 text-[14px] leading-normal text-[rgb(74,84,94)]">
      {children}
    </Text>
  );
}
