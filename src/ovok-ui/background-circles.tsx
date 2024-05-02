import { LinearGradient } from 'expo-linear-gradient';
import type { PropsWithChildren } from 'react';
import { ImageBackground, ScrollView, View } from 'react-native';

export default function BackgroundCircles({ children }: PropsWithChildren) {
  return (
    <LinearGradient
      colors={['rgba(82, 83, 146, 1)', 'rgba(238, 185, 51, 1)']}
      start={{ x: -0.4, y: 1 }}
      end={{ x: 1.4, y: 1.2 }}
      locations={[0.1791, 1.691]}
      className="flex-1"
    >
      <LinearGradient
        colors={[
          'rgba(82, 84, 144, 1)',
          'rgba(82, 84, 144, 0)',
          'rgba(93, 136, 144, 0.75)',
        ]}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 3.4823 }}
        locations={[-0.0175, -0.0174, 1]}
        className="flex-1"
      >
        <ImageBackground
          source={require('../../assets/images/background-image-benefits.png')}
          resizeMode="cover"
          className="flex-1"
        >
          <View className="flex-1">
            <ScrollView>{children}</ScrollView>
          </View>
        </ImageBackground>
      </LinearGradient>
    </LinearGradient>
  );
}
