import { LinearGradient } from 'expo-linear-gradient';
import type { Dispatch, SetStateAction } from 'react';
import { Pressable, Text, View } from 'react-native';

interface Props {
  selectedButton: string;
  setSelectedButton: Dispatch<SetStateAction<string>>;
  firstButton: string;
  secondButton: string;
  textFirstButton: string;
  textSecondButton: string;
}

export default function SwitchButtons({
  selectedButton,
  setSelectedButton,
  firstButton,
  secondButton,
  textFirstButton,
  textSecondButton,
}: Props) {
  return (
    <View className="mt-6 w-full flex-row justify-center">
      <Pressable
        className="h-[60px] flex-1 overflow-hidden"
        onPress={() => setSelectedButton(firstButton)}
        style={{
          borderColor: 'rgb(215,221,234)',
          borderWidth: selectedButton === firstButton ? 0 : 1,
          borderRightWidth: 0,
          borderTopLeftRadius: 6,
          borderBottomLeftRadius: 6,
        }}
      >
        <LinearGradient
          colors={
            selectedButton === firstButton
              ? ['rgb(232,181,55)', 'rgb(82,83,46)']
              : ['white', 'white']
          }
          start={{ x: 1.5, y: 0 }}
          end={{ x: 0, y: 0 }}
          className="h-[50px] flex-1 items-center justify-center"
        >
          <Text
            className="text-[14px]"
            style={{
              color: selectedButton === firstButton ? 'white' : 'black',
            }}
          >
            {textFirstButton}
          </Text>
        </LinearGradient>
      </Pressable>
      <Pressable
        className="h-[60px] flex-1 overflow-hidden"
        onPress={() => setSelectedButton(secondButton)}
        style={{
          borderColor: 'rgb(215,221,234)',
          borderWidth: selectedButton === secondButton ? 0 : 1,
          borderLeftWidth: 0,
          borderTopRightRadius: 6,
          borderBottomRightRadius: 6,
        }}
      >
        <LinearGradient
          colors={
            selectedButton === secondButton
              ? ['rgb(232,181,55)', 'rgb(82,83,46)']
              : ['white', 'white']
          }
          start={{ x: -0.5, y: 0 }}
          end={{ x: 1, y: 0 }}
          className="h-[50px] flex-1 items-center justify-center"
        >
          <Text
            className="text-[14px]"
            style={{
              color: selectedButton === secondButton ? 'white' : 'black',
            }}
          >
            {textSecondButton}
          </Text>
        </LinearGradient>
      </Pressable>
    </View>
  );
}
