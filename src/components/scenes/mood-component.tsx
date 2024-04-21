import { Mood1To5 } from '@/types/scenes';
import { colors } from '@/ui';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

// Define a mapping between numbers 1 to 5 and FontAwesome5 icon names
const moodIcons: { [key: number]: string } = {
  1: 'frown', // Very sad
  2: 'frown', // Sad
  3: 'meh', // Neutral
  4: 'smile', // Happy
  5: 'grin', // Very happy
};

// Define a mapping between numbers 1 to 5 and text representations
const moodTexts: { [key: number]: string } = {
  1: 'Very Sad',
  2: 'Sad',
  3: 'Neutral',
  4: 'Happy',
  5: 'Euphoric',
};

interface MoodComponentProps {
  moodNumber: Mood1To5;
}

const MoodComponent: React.FC<MoodComponentProps> = ({ moodNumber }) => {
  // Ensure that moodNumber is within the valid range (1 to 5)
  const mappedMoodIcon = moodIcons[Math.min(Math.max(moodNumber, 1), 5)];
  const moodText = moodTexts[Math.min(Math.max(moodNumber, 1), 5)];

  return (
    <View style={styles.rowDirection}>
      <Icon
        color={colors.white}
        size={16}
        name={mappedMoodIcon}
        style={styles.iconContainer}
      />
      <Text style={styles.membersText}>{moodText}</Text>
    </View>
  );
};

export default MoodComponent;

const styles = StyleSheet.create({
  iconContainer: {
    marginRight: 0,
  },
  rowDirection: { flexDirection: 'row' },
  membersText: {
    fontWeight: '700',
    fontSize: 15,
    color: 'white',
    marginLeft: 8,
    marginRight: 0,
  },
});
