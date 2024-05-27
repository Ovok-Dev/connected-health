import { useNavigation } from 'expo-router';
import { useEffect } from 'react';

import BackgroundWhite from '@/ovok-ui/background-white';
import LearningCard from '@/ovok-ui/learning-card';

export default function Learn() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ title: 'Learn' });
  }, [navigation]);

  return (
    <BackgroundWhite>
      <LearningCard
        title="Common Medical Conditions"
        imageName="stethoscope-small"
        href="/(tabs)/(home)/learning-text"
      >
        Lorem ipsum dolor sit amet consectetur. Urna aenean auctor bibendum ut
        cursus. Fusce consectetur amet in nibh ante...
      </LearningCard>
      <LearningCard
        title="First Aid and Emergency Response"
        imageName="first-aid"
      >
        Lorem ipsum dolor sit amet consectetur. Urna aenean auctor bibendum ut
        cursus.
      </LearningCard>
      <LearningCard
        title="Healthy Lifestyle Tips"
        imageName="healthy-lifestyle"
      >
        Lorem ipsum dolor sit amet consectetur. Urna aenean auctor bibendum ut
        cursus. Fusce consectetur amet in nibh ante...
      </LearningCard>
    </BackgroundWhite>
  );
}
