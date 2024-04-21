import React from 'react';

import { Image, Pressable } from '@/ui';

type Props = { onPress?: () => void };

export const Card = ({ onPress = () => {} }: Props) => {
  return (
    <Pressable
      className="m-2 block overflow-hidden rounded-xl  bg-neutral-200 p-2 shadow-xl dark:bg-charcoal-900"
      onPress={onPress}
    >
      <Image
        className="h-56 w-full object-cover "
        source={{
          uri: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        }}
      />
    </Pressable>
  );
};
