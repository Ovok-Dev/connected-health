import { Image, Pressable, Text, View } from 'react-native';

import { COLORS } from '@/types/colors';
import { getIcon } from '@/utils/get-icon';

interface Props {
  title: string;
  subtitle?: string;
  iconNameLeft?: string;
  bgColorLeft?: string;
  iconNameRight?: string;
  bgColorRight?: string;
  badgeNumber?: number;
  borderInvisible?: boolean;
}

export default function ButtonBasic({
  title,
  subtitle,
  iconNameLeft,
  //bgColorLeft,
  iconNameRight,
  //bgColorRight,
  badgeNumber,
  borderInvisible = false,
}: Props) {
  const iconLeft = iconNameLeft && getIcon(iconNameLeft);
  const iconRight = iconNameRight && getIcon(iconNameRight);

  return (
    <Pressable
      className="my-1 flex-row items-center rounded-lg border bg-[white]"
      style={{
        height: subtitle ? 62 : 60,
        borderColor: borderInvisible ? 'rgb(246,246,246)' : 'rgb(215,221,234)',
      }}
    >
      <View
        className={
          iconNameLeft === 'hiv-monitoring'
            ? '[bg-blue] m-3 h-[44px] w-[44px] items-center justify-center rounded-full border border-[rgb(57,99,156)]'
            : 'm-3 h-[44px] w-[44px] items-center justify-center'
        }
      >
        {iconNameLeft && <Image source={iconLeft} width={32} height={32} />}
      </View>
      <View className="flex-column flex-1 justify-center">
        <Text className="text-[14px] font-semibold leading-[1.8] text-[rgb(14,16,18)]">
          {title}
        </Text>
        {subtitle && (
          <Text className="text-[10px] leading-[1.8] text-[rgb(74,84,94)]">
            {subtitle}
          </Text>
        )}
      </View>
      <View className="ml-3 w-[44px] items-center justify-center justify-self-end">
        {iconNameRight && <Image source={iconRight} width={38} height={35} />}
        {badgeNumber && (
          <View
            className="h-[22px] w-[22px] items-center justify-center rounded-full"
            style={{ backgroundColor: COLORS.BadgeRed }}
          >
            <Text className="text-[white]">{badgeNumber}</Text>
          </View>
        )}
      </View>
    </Pressable>
  );
}
