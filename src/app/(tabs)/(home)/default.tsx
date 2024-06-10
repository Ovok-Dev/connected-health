import { useLocalSearchParams } from 'expo-router';

import BackgroundWhite from '@/ovok-ui/background-white';
import Heading from '@/ovok-ui/heading';
import Paragraph from '@/ovok-ui/paragraph';

export default function Default() {
  const { title } = useLocalSearchParams();

  return (
    <BackgroundWhite>
      <Heading>{title}</Heading>
      <Paragraph>We will inform you about {title} soon.</Paragraph>
    </BackgroundWhite>
  );
}
