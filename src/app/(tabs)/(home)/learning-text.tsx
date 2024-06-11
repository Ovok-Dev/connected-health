import { useLocalSearchParams, useNavigation } from 'expo-router';
import { useEffect } from 'react';
import { Image } from 'react-native';

import BackgroundWhite from '@/ovok-ui/background-white';
import Heading from '@/ovok-ui/heading';
import Paragraph from '@/ovok-ui/paragraph';
import { getIcon } from '@/utils/get-icon';

export default function LearningText() {
  const navigation = useNavigation();
  const { learnId } = useLocalSearchParams();

  let title: string = '';
  if (learnId === 'common-medical-conditions') {
    title = 'Common Medical Conditions';
  } else if (learnId === 'first-aid') {
    title = 'First Aid and Emergency Response';
  } else if (learnId === 'healthy-lifestyle') {
    title = 'Healthy Lifestyle Tips';
  }

  useEffect(() => {
    navigation.setOptions({ title: 'Learn' });
  }, [navigation]);

  return (
    <BackgroundWhite>
      <Image source={getIcon('stethoscope')} className="h-auto w-full" />
      <Heading>{title}</Heading>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur. Amet viverra quis velit urna
        eget amet vehicula eu integer. Fusce aliquam fermentum integer
        consectetur senectus volutpat faucibus. Viverra vel sapien felis odio
        porta purus amet varius dictumst. Blandit egestas tellus vitae curabitur
        ac fusce. Fringilla habitant odio scelerisque sit dolor. Nisi rhoncus
        varius non eu.
      </Paragraph>
      <Paragraph>
        Dui pellentesque ultricies pellentesque duis. Enim arcu ut turpis ornare
        fames amet dictum velit metus. Ultrices ullamcorper id ipsum risus et.
        Lectus viverra lorem vel elementum praesent cursus. Cras suspendisse
        ultrices potenti in faucibus ullamcorpe.
      </Paragraph>
      <Heading>Heading</Heading>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur. Amet viverra quis velit urna
        eget amet vehicula eu integer. Fusce aliquam fermentum integer
        consectetur senectus volutpat faucibus. Viverra vel sapien felis odio
        porta purus amet varius dictumst. Blandit egestas tellus vitae curabitur
        ac fusce.
      </Paragraph>
    </BackgroundWhite>
  );
}
