import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from 'expo-router';
import { useEffect } from 'react';
import { Text, View } from 'react-native';
import { Image } from 'react-native';

import BackgroundWhite from '@/ovok-ui/background-white';
import ButtonRecord from '@/ovok-ui/button-record';
import RecordEntry from '@/ovok-ui/record-entry';
import { getIcon } from '@/utils/get-icon';

export default function ElectronicRecords() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <BackgroundWhite>
      <View className="my-6 h-[98px] overflow-hidden rounded-xl">
        <LinearGradient
          colors={['rgb(82, 83, 146)', 'rgb(238, 185, 51)']}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
          className="flex-1 flex-row rounded-xl pl-6"
        >
          <View className="flex-1 justify-center gap-2">
            <Text className="text-[20px] font-semibold text-[white]">
              Electronic Life Record
            </Text>
            <Text className="text-[12px] text-[white]">
              Last Updated: Sunday, 21 Aug
            </Text>
          </View>
          <View className="w-[98px] items-center justify-center">
            <Image source={getIcon('record-big')} height={58} width={58} />
          </View>
        </LinearGradient>
      </View>
      <View className="mt-3 rounded-xl bg-white p-4">
        <View className="h-[97px] flex-row items-center pl-6">
          <View className="h-[62px] w-[62px] items-center justify-center overflow-hidden rounded-full bg-black">
            <Image
              source={getIcon('grace')}
              resizeMode="contain"
              className="flex-1"
              style={{ width: '100%' }}
            />
          </View>
          <View className="mx-3 ml-6 flex-1 justify-center gap-2">
            <Text className="text-[16px] font-semibold">Grace Agyei</Text>
            <Text className="text-[12px]">42 years old</Text>
          </View>
          <View className="h-[97px] w-[39px] items-center justify-center">
            <Image
              source={getIcon('half-circles')}
              resizeMode="contain"
              className="flex-1"
              style={{ width: '100%' }}
            />
          </View>
        </View>
        <View className="px-4">
          <RecordEntry iconName="woman" category="Gender" value="Female" />
          <RecordEntry
            iconName="flag"
            category="Ethnicity"
            value="Black, Ashanti"
          />
          <RecordEntry
            iconName="location"
            category="Location"
            value="Accra, Ghana"
          />
          <RecordEntry
            iconName="briefcase"
            category="Occupation"
            value="Software Engineer"
          />
          <RecordEntry
            iconName="screen"
            category="Diagnosis"
            value="Hypertension(I11.9)"
          />
          <RecordEntry
            iconName="calendar"
            category="Duration"
            value="6 Years"
            hasBorderBottom={false}
          />
        </View>
      </View>
      <View className="mt-6 rounded-xl bg-white p-4">
        <RecordEntry category="Insurance" value="Public(NHIS)" />
        <RecordEntry category="Status" value="Active" active />
        <RecordEntry category="CCC" value="1234" />
        <RecordEntry
          category="HIN"
          value="1234567890"
          hasBorderBottom={false}
        />
      </View>
      <View className="mt-4 items-center justify-center">
        <View className="flex-row items-center justify-center">
          <ButtonRecord
            iconName="image-grey"
            href="/(tabs)/(records)/documents"
          >
            Labs & Images
          </ButtonRecord>
          <ButtonRecord
            iconName="history-grey"
            href="/(tabs)/(records)/medical-history"
          >
            Medical History
          </ButtonRecord>
          <ButtonRecord
            iconName="documents-grey"
            href="/(tabs)/(records)/documents"
          >
            Documents
          </ButtonRecord>
        </View>
        <View className="flex-row items-center justify-center">
          <ButtonRecord
            iconName="stats-grey"
            href="/(tabs)/(records)/social-insights"
          >
            Social Insights
          </ButtonRecord>
          <ButtonRecord
            iconName="permissions-grey"
            href="/(tabs)/(records)/permissions"
          >
            Permissions
          </ButtonRecord>
          <ButtonRecord
            iconName="lifestyle-grey"
            href="/(tabs)/(records)/lifestyle"
          >
            Lifestyle
          </ButtonRecord>
        </View>
      </View>
    </BackgroundWhite>
  );
}
