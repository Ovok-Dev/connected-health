import { Image } from 'react-native';

import BackgroundWhite from '@/ovok-ui/background-white';
import Heading from '@/ovok-ui/heading';
import Paragraph from '@/ovok-ui/paragraph';
import { getIcon } from '@/utils/get-icon';

export default function LearningText() {
  return (
    <BackgroundWhite>
      <Image source={getIcon('stethoscope')} className="h-auto w-full" />
      <Heading>Common Medical Conditions</Heading>
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
