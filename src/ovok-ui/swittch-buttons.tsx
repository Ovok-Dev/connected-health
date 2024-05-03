import { LinearGradient } from 'expo-linear-gradient';
import type { Dispatch, SetStateAction } from 'react';
import { Pressable, Text, View } from 'react-native';

interface Props {
  selectedButton: 'care-plans' | 'trials';
  setSelectedButton: Dispatch<SetStateAction<'care-plans' | 'trials'>>;
}

export default function SwitchButtons({
  selectedButton,
  setSelectedButton,
}: Props) {
  return (
    <View className="mt-6 w-full flex-row justify-center">
      <Pressable
        className="h-[60px] flex-1 overflow-hidden"
        onPress={() => setSelectedButton('care-plans')}
        style={{
          borderColor: 'rgb(215,221,234)',
          borderWidth: selectedButton === 'care-plans' ? 0 : 1,
          borderRightWidth: 0,
          borderTopLeftRadius: 6,
          borderBottomLeftRadius: 6,
        }}
      >
        <LinearGradient
          colors={
            selectedButton === 'care-plans'
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
              color: selectedButton === 'care-plans' ? 'white' : 'black',
            }}
          >
            Care Plans
          </Text>
        </LinearGradient>
      </Pressable>
      <Pressable
        className="h-[60px] flex-1 overflow-hidden"
        onPress={() => setSelectedButton('trials')}
        style={{
          borderColor: 'rgb(215,221,234)',
          borderWidth: selectedButton === 'trials' ? 0 : 1,
          borderLeftWidth: 0,
          borderTopRightRadius: 6,
          borderBottomRightRadius: 6,
        }}
      >
        <LinearGradient
          colors={
            selectedButton === 'trials'
              ? ['rgb(232,181,55)', 'rgb(82,83,46)']
              : ['white', 'white']
          }
          start={{ x: -0.5, y: 0 }}
          end={{ x: 1, y: 0 }}
          className="h-[50px] flex-1 items-center justify-center"
        >
          <Text
            className="text-[14px]"
            style={{ color: selectedButton === 'trials' ? 'white' : 'black' }}
          >
            Care Plans
          </Text>
        </LinearGradient>
      </Pressable>
    </View>
  );
}
