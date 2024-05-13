import type { PropsWithChildren } from 'react';
import { Text, View } from 'react-native';

interface Props extends PropsWithChildren {
  me?: boolean;
  time: string;
}

export default function ChatMessage({ children, me = false, time }: Props) {
  return (
    <View
      className="my-3"
      style={{ alignItems: me ? 'flex-end' : 'flex-start' }}
    >
      <View
        className="rounded-lg p-3"
        style={{
          backgroundColor: me ? 'rgb(57,99,155)' : 'white',
          borderBottomRightRadius: me ? 0 : 8,
          borderBottomLeftRadius: me ? 8 : 0,
        }}
      >
        <Text
          className="mx-2 leading-[1.8]"
          style={{
            color: me ? 'white' : 'rgb(25,29,49)',
          }}
        >
          {children}
        </Text>
      </View>
      <Text
        className="mt-3 text-[12px] text-[rgb(167,174,193)]"
        style={{ textAlign: me ? 'right' : 'left' }}
      >
        {time}
      </Text>
    </View>
  );
}
