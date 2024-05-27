import { useNavigation } from 'expo-router';
import { useEffect, useState } from 'react';
import { Image, Text, TextInput, View } from 'react-native';

import BackgroundWhite from '@/ovok-ui/background-white';
import ButtonColorful from '@/ovok-ui/button-colorful';
import { getIcon } from '@/utils/get-icon';

export default function AddDocument() {
  const [title, setTitle] = useState<string>('');

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ title: 'Add Document' });
  }, [navigation]);

  return (
    <BackgroundWhite>
      <Text className="text-[14px] text-[rgb(51,51,51)]">Document Title</Text>
      <TextInput
        value={title}
        onChangeText={(value) => setTitle(value)}
        style={{
          backgroundColor: 'white',
          borderRadius: 8,
          paddingVertical: 6,
          paddingHorizontal: 12,
          marginTop: 6,
        }}
      />
      <View className="mb-6 mt-4 h-[180px] items-center justify-center gap-3 rounded-lg bg-white">
        <Image source={getIcon('upload')} height={47.85} width={54.89} />
        <Text className="text-[16px] font-semibold text-[rgb(57,99,156)]">
          Upload Document
        </Text>
      </View>
      <ButtonColorful>Save</ButtonColorful>
    </BackgroundWhite>
  );
}
