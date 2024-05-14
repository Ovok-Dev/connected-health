import { Image, View } from 'react-native';

import { getIcon } from '@/utils/get-icon';

interface Props {
  docImageName: string;
  textIconName: string;
}

export default function DocImage({ docImageName, textIconName }: Props) {
  return (
    <View className="m-2 flex-1 items-center justify-center">
      <Image
        source={getIcon(docImageName)}
        width={42}
        height={50}
        className="rounded-md border-[rgb(57,99,156)]"
      />
      <Image
        source={getIcon(textIconName)}
        width={19.16}
        height={11.88}
        className="absolute right-[6px] top-[32px]"
      />
    </View>
  );
}
