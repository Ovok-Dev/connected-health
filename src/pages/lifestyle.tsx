import BackgroundWhite from '@/ovok-ui/background-white';
import RecordEntriesContainer from '@/ovok-ui/record-entries-container';
import RecordEntry from '@/ovok-ui/record-entry';

export default function Lifestyle() {
  return (
    <BackgroundWhite>
      <RecordEntriesContainer title="Drugs">
        <RecordEntry category="Smoking" iconNameRight="checkmark-black" />
        <RecordEntry
          category="Regular drinker"
          iconNameRight="checkmark-black"
          rightIconTransparent
        />
        <RecordEntry
          category="Occasional drinker"
          iconNameRight="checkmark-black"
          hasBorderBottom={false}
        />
      </RecordEntriesContainer>
      <RecordEntriesContainer title="Diet">
        <RecordEntry category="Type" value="Non-vegetarian" />
        <RecordEntry
          category="Preference"
          value="Not defined"
          hasBorderBottom={false}
        />
      </RecordEntriesContainer>
      <RecordEntriesContainer title="Activity">
        <RecordEntry category="Jogging" value="Three times a week" />
        <RecordEntry
          category="exercise"
          value="Occassionally"
          hasBorderBottom={false}
        />
      </RecordEntriesContainer>
    </BackgroundWhite>
  );
}
