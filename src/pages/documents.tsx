import { Text, View } from 'react-native';

import BackgroundWhite from '@/ovok-ui/background-white';
import DocImage from '@/ovok-ui/doc-image';

export default function Documents() {
  const renderDocumentsEntry = (docImageName: string, textIconName: string) => {
    return (
      <View className="h-[66px] flex-row items-center gap-3 rounded-xl bg-white pl-6 pr-3">
        <DocImage docImageName={docImageName} textIconName={textIconName} />
        <View className="ml-3 justify-center gap-2">
          <Text className="text-[12px] font-medium text-[rgb(14,16,18)]">
            Lab Name XYZ
          </Text>
          <Text className="text-[10px] text-[rgb(74,84,94)]">18/08/2023</Text>
        </View>
      </View>
    );
  };

  return (
    <BackgroundWhite>
      <View className="flex-1 items-center justify-center gap-3">
        <View className="flex-1 flex-row items-center justify-center gap-3">
          {renderDocumentsEntry('doc-image-records', 'text-icon-pdf')}
          {renderDocumentsEntry('doc-image-request', 'text-icon-jpg')}
        </View>
        <View className="flex-1 flex-row items-center justify-center gap-3">
          {renderDocumentsEntry('doc-image-authorization', 'text-icon-txt')}
          {renderDocumentsEntry('doc-image-records', 'text-icon-png')}
        </View>
        <View className="flex-1 flex-row items-center justify-center gap-3">
          {renderDocumentsEntry('doc-image-certificate', 'text-icon-png')}
          {renderDocumentsEntry('doc-image-records', 'text-icon-jpg')}
        </View>
        <View className="flex-1 flex-row items-center justify-center gap-3">
          {renderDocumentsEntry('doc-image-request', 'text-icon-jpg')}
          {renderDocumentsEntry('doc-image-authorization', 'text-icon-pdf')}
        </View>
      </View>
    </BackgroundWhite>
  );
}
