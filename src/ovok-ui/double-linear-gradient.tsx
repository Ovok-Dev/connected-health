import { LinearGradient } from 'expo-linear-gradient';
import type { PropsWithChildren } from 'react';
import { ImageBackground, View } from 'react-native';

export default function BackgroundCircles({ children }: PropsWithChildren) {
  return (
    <View className="flex-1">
      <LinearGradient
        colors={['rgba(82, 83, 146, 1)', 'rgba(238, 185, 51, 1)']}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        className="flex-1"
      >
        <LinearGradient
          colors={['rgba(82, 84, 144, 1)', 'rgba(82, 84, 144, 0)']}
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 1 }}
          className="flex-1"
        >
          <ImageBackground
            source={require('../../assets/images/background-image-benefits.png')}
            resizeMode="cover"
            className="flex-1"
          >
            {children}
          </ImageBackground>
        </LinearGradient>
      </LinearGradient>
    </View>
  );
}
