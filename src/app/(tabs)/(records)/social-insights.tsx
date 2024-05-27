import { useNavigation } from 'expo-router';
import { useEffect } from 'react';

import BackgroundWhite from '@/ovok-ui/background-white';
import RecordEntriesContainer from '@/ovok-ui/record-entries-container';
import RecordEntry from '@/ovok-ui/record-entry';

export default function SocialInsights() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ title: 'Social Insights' });
  }, [navigation]);

  return (
    <BackgroundWhite>
      <RecordEntriesContainer title="Family">
        <RecordEntry category="Status" value="Married" />
        <RecordEntry
          category="Children"
          value="Two (Ages 7 & 10)"
          hasBorderBottom={false}
        />
      </RecordEntriesContainer>
      <RecordEntriesContainer title="Living">
        <RecordEntry category="Staying at" value="Urban Appartment" />
        <RecordEntry
          category="Socialeconomic"
          value="Middle Class"
          hasBorderBottom={false}
        />
      </RecordEntriesContainer>
      <RecordEntriesContainer title="Education">
        <RecordEntry category="Degree" value="B.S. Computer Science" />
        <RecordEntry category="Grade" value="A+" hasBorderBottom={false} />
      </RecordEntriesContainer>
      <RecordEntriesContainer title="Community">
        <RecordEntry
          category="Regular at social groups"
          iconNameRight="checkmark-black"
        />
        <RecordEntry
          category="Monthly family gatherings"
          iconNameRight="checkmark-black"
          rightIconTransparent
          hasBorderBottom={false}
        />
      </RecordEntriesContainer>
    </BackgroundWhite>
  );
}
