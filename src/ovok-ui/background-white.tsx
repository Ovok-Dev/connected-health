import type { PropsWithChildren } from 'react';
import { ScrollView, StatusBar, View } from 'react-native';

interface Props extends PropsWithChildren {
  coversFullPage?: boolean;
}

export default function BackgroundWhite({
  children,
  coversFullPage = true,
}: Props) {
  return (
    <View className="flex-1 bg-[rgb(246,246,246)]">
      <ScrollView className="flex-1">
        <View
          className="mx-4 flex-1"
          style={{
            marginTop:
              StatusBar.currentHeight && coversFullPage
                ? StatusBar.currentHeight + 12
                : 12,
          }}
        >
          {children}
        </View>
      </ScrollView>
    </View>
  );
}
