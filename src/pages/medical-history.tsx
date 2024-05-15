import { Text, View } from 'react-native';

import BackgroundWhite from '@/ovok-ui/background-white';
import DiagnoseEntry from '@/ovok-ui/diagnose-entry';
import RecordEntry from '@/ovok-ui/record-entry';
import Tabs from '@/ovok-ui/tab';

export default function MedicalHistory() {
  const tabScreenGeneral = (
    <>
      <View className="rounded-xl bg-white p-3">
        <Text className="text-[14px] font-semibold text-[rgb(29,29,29)]">
          Allergies
        </Text>
        <RecordEntry category="Drug" value="No known allergies" />
        <RecordEntry category="Food" value="Lactose, Nuts" />
        <RecordEntry
          category="Environmental"
          value="No known allergies"
          hasBorderBottom={false}
        />
      </View>
      <View className="mt-4 rounded-xl bg-white p-3">
        <Text className="text-[14px] font-semibold text-[rgb(29,29,29)]">
          Diagnoses
        </Text>
        <DiagnoseEntry
          code="60.42"
          codeColor="rgb(78,149,255)"
          date="Fri, Aug 18, 2023"
        >
          Lorem ipsum dolor sit amet consectetur. Sit maecenas et diam platea
          ut. Orci urna gravida felis id leo eget quisque sodales. Faucibus eget
          id gravida tincidunt.
        </DiagnoseEntry>
        <DiagnoseEntry
          code="102.3"
          codeColor="rgb(77,224,74)"
          date="Fri, Aug 18, 2023"
        >
          Lorem ipsum dolor sit amet consectetur. Sit maecenas et diam platea
          ut. Orci urna gravida felis id leo eget quisqu.
        </DiagnoseEntry>
        <DiagnoseEntry
          code="123.5"
          codeColor="rgb(134,78,255)"
          date="Fri, Aug 18, 2023"
          hasBorderBottom={false}
        >
          Lorem ipsum dolor sit amet consectetur maecenas et.
        </DiagnoseEntry>
      </View>
      <View className="mt-4 rounded-xl bg-white p-3">
        <Text className="text-[14px] font-semibold text-[rgb(29,29,29)]">
          Medication
        </Text>
        <RecordEntry category="Medicine 1" value="10mg - once daily" />
        <RecordEntry
          category="Medicine 2"
          value="5mg - twice daily"
          hasBorderBottom={false}
        />
      </View>
    </>
  );

  return (
    <BackgroundWhite>
      <Tabs
        tabScreens={[
          {
            value: 'general',
            label: 'General',
            screen: tabScreenGeneral,
          },
          {
            value: 'prescriptions',
            label: 'Prescriptions',
            screen: <View />,
          },
          {
            value: 'referrals',
            label: 'Referrals',
            screen: <View />,
          },
          {
            value: 'dental',
            label: 'Dental',
            screen: <View />,
          },
          {
            value: 'vaccination',
            label: 'Vaccination',
            screen: <View />,
          },
        ]}
      />
    </BackgroundWhite>
  );
}
