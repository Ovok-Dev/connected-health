import { useNavigation } from 'expo-router';
import { useEffect } from 'react';

import BackgroundWhite from '@/ovok-ui/background-white';
import ButtonChat from '@/ovok-ui/button-chat';

export default function Chats() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ title: 'Chats' });
  }, [navigation]);

  return (
    <BackgroundWhite>
      <ButtonChat
        iconName="john-doe"
        personName="Dr. John Doe"
        isOnline
        messageBeginning="Hey Grace, I have updated your diet plan..."
        numberNewMessages={1}
        href="/(tabs)/(care)/chat"
      />
      <ButtonChat
        iconName="leah-cole"
        personName="Dr. Leah Cole"
        messageBeginning="Lorem ipsum dolor sit amet consectetur met viverra quis velit..."
        href="/(tabs)/(care)/chat"
      />
    </BackgroundWhite>
  );
}
