import BackgroundWhite from '@/ovok-ui/background-white';
import ChatMessage from '@/ovok-ui/chat-message';

export default function Chat() {
  return (
    <BackgroundWhite>
      <ChatMessage time="5:09 PM" me>
        I've been having some chest discomfort lately.
      </ChatMessage>
      <ChatMessage time="5:10 PM">
        I understand your concern. Can you describe the chest discomfort you've
        been experiencing?
      </ChatMessage>
      <ChatMessage time="5:12 PM" me>
        It's a sort of tightness and occasional pain. It comes and goes, and I
        sometimes feel short of breath too.
      </ChatMessage>
      <ChatMessage time="5:14 PM">
        Okay. Recommend appointment for evaluation. Need ECG and tests.
      </ChatMessage>
      <ChatMessage time="5:15 PM" me>
        Can we do a video call for more guidance?
      </ChatMessage>
      <ChatMessage time="5:16 PM">
        Let's chat tomorrow at 3 PM via video.
      </ChatMessage>
    </BackgroundWhite>
  );
}
