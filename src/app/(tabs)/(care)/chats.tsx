import BackgroundWhite from '@/ovok-ui/background-white';
import ButtonChat from '@/ovok-ui/button-chat';

export default function Chats() {
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
      />
    </BackgroundWhite>
  );
}
