import { useState } from 'react';
import { Image, Linking, Text, View } from 'react-native';

import BackgroundCircles from '@/ovok-ui/background-circles';
import ButtonWhite from '@/ovok-ui/button-white';
import { Checkbox } from '@/ui';

export default function DataConsent() {
  const [termsChecked, setTermsChecked] = useState(false);
  const [privacyChecked, setPrivacyChecked] = useState(false);

  const continueDisabled: boolean = !termsChecked || !privacyChecked;

  const handleTermsInput = () => {
    setTermsChecked((prev) => !prev);
  };

  const handlePrivacyInput = () => {
    setPrivacyChecked((prev) => !prev);
  };

  return (
    <BackgroundCircles>
      <Image
        source={require('../../../assets/images/image-lock.png')}
        className="absolute left-[67px] top-[104px]"
      />
      <View className="mx-9 mt-[350px]">
        <View>
          <Text className="mb-3 text-center text-[28px] font-bold leading-loose text-[white]">
            Your Data, Your Control
          </Text>
          <Text className="mb-3 text-center leading-[1.8] text-[white]">
            We prioritize your privacy. Only collect what's needed to serve you
            better. Rest assured, your health data is encrypted and secure.
          </Text>
        </View>
        <View className="mt-24">
          <View className="mb-6 flex-row">
            <View className="mr-3">
              <Checkbox
                checked={termsChecked}
                onChange={handleTermsInput}
                accessibilityLabel="I agree to terms and conditions"
              />
            </View>
            <View>
              <Text className="text-[white]">
                {'I agree to '}
                <Text className="underline" onPress={() => Linking.openURL('')}>
                  Terms & Conditions.
                </Text>
              </Text>
            </View>
          </View>
          <View className="flex-row">
            <View className="mr-3">
              <Checkbox
                checked={privacyChecked}
                onChange={handlePrivacyInput}
                accessibilityLabel="I agree to privacy policy"
              />
            </View>
            <View>
              <Text className="text-[white]">
                {'I agree to '}
                <Text className="underline" onPress={() => Linking.openURL('')}>
                  Privacy Policy.
                </Text>
              </Text>
            </View>
          </View>
        </View>
        <View>
          <ButtonWhite disabled={continueDisabled} href="/get-started">
            Continue
          </ButtonWhite>
        </View>
      </View>
    </BackgroundCircles>
  );
}
