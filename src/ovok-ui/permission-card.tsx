/* eslint-disable react/react-in-jsx-scope */
import { useMemo, useState } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { RadioGroup } from 'react-native-radio-buttons-group';

import { Color } from '@/types/colors';
import { getIcon } from '@/utils/get-icon';

interface Props {
  imageName: string;
  time: string;
  practitioner: string;
  specialization: string;
  initialAccessType: string;
}

const accessTypes: { value: string; label: string }[] = [
  {
    value: '0',
    label: 'Full Access',
  },
  {
    value: '1',
    label: 'General Access',
  },
  {
    value: '2',
    label: 'Read Only',
  },
  {
    value: '3',
    label: 'Limited Access',
  },
];

const getAccessTypeIndex = (accessType: string) => {
  let accessTypeIndex: string = '0';
  switch (accessType) {
    case 'full':
      accessTypeIndex = '0';
      break;
    case 'general':
      accessTypeIndex = '1';
      break;
    case 'read-only':
      accessTypeIndex = '2';
      break;
    case 'limited':
      accessTypeIndex = '3';
      break;
  }
  return accessTypeIndex;
};

export default function PermissionCard({
  imageName,
  time,
  practitioner,
  specialization,
  initialAccessType,
}: Props) {
  const [accessType, setAccessType] = useState<string>(
    getAccessTypeIndex(initialAccessType)
  );
  const [accessMenuOpen, setAccessMenuOpen] = useState<boolean>(false);

  const radioButtons = useMemo(() => {
    return accessTypes.map(({ value, label }, index) => {
      return {
        id: index.toString(),
        value,
        label,
      };
    });
  }, []);

  const renderAccessType = () => {
    let bgColor: string = '';
    let textColor: string = '';
    let text: string = '';
    switch (accessType) {
      case '0':
        bgColor = 'rgba(114, 149, 69, 0.06)';
        textColor = 'rgb(114, 149, 69)';
        text = 'Full access';
        break;
      case '1':
        bgColor = 'background: rgba(51, 139, 157, 0.06)';
        textColor = 'background: rgb(51, 139, 157)';
        text = 'General access';
        break;
      case '2':
        bgColor = 'background: rgba(71, 69, 149, 0.06)';
        textColor = 'rgb(71, 69, 149)';
        text = 'Read only';
        break;
      case '3':
        bgColor = Color.Red;
        textColor = Color.RedText;
        text = 'Limited access';
        break;
    }
    return (
      <Text
        className="w-fit rounded-sm px-3 py-2 text-[12px]"
        style={{ backgroundColor: bgColor, color: textColor }}
      >
        {text}
      </Text>
    );
  };

  const handleAccessTypePress = (id: string) => {
    setAccessType(id);
    setAccessMenuOpen(false);
  };

  return (
    <View>
      <View className="my-2 h-[96px] flex-row rounded-lg bg-[white]">
        <View className="ml-2 mr-3 items-center justify-center">
          <Image source={getIcon(imageName)} width={60} height={80} />
        </View>
        <View className="flex-1 items-start justify-center gap-2">
          <Text className="text-[14px] font-medium">{practitioner}</Text>
          <Text className="text-[12px]">{specialization}</Text>
          {renderAccessType()}
        </View>
        <View className="m-2 items-end justify-between">
          <Pressable
            className="flex-row justify-end"
            onPress={() => setAccessMenuOpen(true)}
          >
            <Image
              source={getIcon('three-dots-vertical')}
              width={20}
              height={20}
            />
          </Pressable>
          <Text className="text-[12px] text-[rgb(74,84,94)]">{time}</Text>
        </View>
      </View>
      {accessMenuOpen && (
        <View>
          <Text className="text-[20px] text-[rgb(29,29,29)]">
            Access Control
          </Text>
          <RadioGroup
            radioButtons={radioButtons}
            selectedId={accessType}
            onPress={handleAccessTypePress}
            containerStyle={{
              alignItems: 'flex-start',
              marginTop: 4,
              marginLeft: 8,
            }}
          />
        </View>
      )}
    </View>
  );
}
