import { useLocalSearchParams, useNavigation } from 'expo-router';
import { useEffect } from 'react';

import BackgroundWhite from '@/ovok-ui/background-white';
import Heading from '@/ovok-ui/heading';
import Paragraph from '@/ovok-ui/paragraph';

export default function Default() {
  const { title, pageTitle } = useLocalSearchParams();

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ title: pageTitle });
  }, [navigation, pageTitle]);

  return (
    <BackgroundWhite>
      <Heading>{title}</Heading>
      <Paragraph>We will inform you about {title} soon.</Paragraph>
    </BackgroundWhite>
  );
}
