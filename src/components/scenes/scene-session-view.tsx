import { timeAgoFromNow } from '@/core';
import type { MedplumObservationResponse } from '@/types/scenes';
import { colors } from '@/ui';
import * as React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5';
import MoodComponent from './mood-component';
import { SizedBox, windowWidth } from '../sized-box';

interface ISceneSession {
  readonly sceneSession: MedplumObservationResponse;
}

const SceneSession: React.FunctionComponent<ISceneSession> = ({
  sceneSession,
  // navigation,
}) => {
  const backgroundImageSource = sceneSession.SceneDetails?.scene_image;

  return (
    <>
      <ImageBackground
        resizeMode="cover"
        style={styles.ChallengeContainer}
        imageStyle={styles.imageView}
        source={
          { uri: backgroundImageSource } || require('../../images/default.png')
        }
        // onError={(error) => console.error('Image load error:', error)}
        // source={require('../images/default.png')}
      >
        <LinearGradient
          colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.7)']}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={[styles.gradientContainer]}
        >
          {/* {props.isUserChallenge && (
              <View style={styles.activeMainContainer}>
                <View style={styles.trapezoidShape} />
                <Text style={styles.activeText}>{'Hello3'}</Text>
              </View>
            )} */}

          <View
            style={[
              styles.ChallengeBottomContainer,
              styles.ChallengeBottomContainerFromChallenge,
            ]}
          >
            <View>
              <Text style={styles.label_challengeName}>
                {sceneSession.SceneDetails?.scene_name}
              </Text>
              <Text
                style={[
                  styles.label_ChallengeDescription,
                  styles.label_ChallengeDescriptionFromChallenge,
                ]}
              >
                {timeAgoFromNow(sceneSession.meta.lastUpdated)}
              </Text>
            </View>
          </View>

          <View style={styles.membersContainer}>
            {/* <Text style={styles.membersLengthText}>{SceneSession.name}</Text> */}

            <MoodComponent
              moodNumber={sceneSession.MoodData?.moodRating ?? 5}
            />
            <SizedBox height={5} width={undefined} />

            {/* <View style={styles.rowDirection}>
              <Icon
                color={colors.white}
                size={15}
                name={'clock'}
                style={styles.iconContainer}
              />
              <Text style={styles.membersText}>{diffInMinutes}</Text>
            </View> */}
            <SizedBox height={5} width={undefined} />
            <View style={styles.rowDirection}>
              <Icon
                color={colors.white}
                size={15}
                name={'lungs'}
                style={styles.iconContainer}
              />
              <Text style={styles.membersText}>
                {Number(
                  sceneSession.BreathingData?.breathing_count_per_min ?? 0
                ).toFixed(0) ?? 0}
              </Text>
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>

      {/* <Text style={styles.challengeNameForHome}>
          {'props.challenge.challengeName'}
        </Text> */}
      {/* cha */}
    </>
  );
};

const styles = StyleSheet.create({
  label_challengeName: {
    lineHeight: 20,
    fontSize: 17,
    fontWeight: '700',
    color: 'white',
  },
  rowDirection: { flexDirection: 'row' },

  iconContainer: {
    marginRight: 0,
  },
  label_ChallengeNameFromChallenge: {
    fontSize: 15,
  },
  label_ChallengeNameFromHome: {
    fontSize: 12,
    textAlign: 'center',
  },
  label_ChallengeDescription: {
    lineHeight: 16,
    fontWeight: '400',
    color: 'rgba(255,255,255,0.8)',
  },
  label_ChallengeDescriptionFromChallenge: {
    fontSize: 14,
  },
  label_ChallengeDescriptionFromHome: {
    textAlign: 'center',
    fontSize: 10,
  },
  ChallengeContainer: {
    height: windowWidth / 2.7,
    marginVertical: 10,
  },
  ChallengeContainerForHome: {
    width: 150,
    overflow: 'hidden',
    height: 100,
    marginRight: 10,
    margin: 0,
  },
  ChallengeBottomContainer: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  ChallengeBottomContainerFromChallenge: {
    paddingVertical: 10,
    paddingHorizontal: 24,
  },
  ChallengeBottomContainerFromHome: {
    paddingVertical: 0,
    paddingHorizontal: 5,
    height: 60,
  },
  imageView: {
    borderRadius: 12,
  },
  challengeNameForHome: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: colors.black,
    marginTop: 5,
    fontSize: 13,
  },
  gradientContainer: {
    height: windowWidth / 2.7,
    borderRadius: 12,
  },
  gradientFromHomeContainer: {
    height: 100,
    borderRadius: 12,
  },
  membersContainer: {
    position: 'absolute',
    right: 15,
    top: 10,
  },
  membersLengthText: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'white',
    textAlign: 'right',
  },
  membersText: {
    fontWeight: '700',
    fontSize: 15,
    color: 'white',
    marginLeft: 8,
    marginRight: 0,
  },
  activeMainContainer: {
    position: 'absolute',
    top: 13.5,
    left: -24,
  },
  trapezoidShape: {
    width: 100,
    height: 0,
    borderBottomWidth: 25,
    borderBottomColor: '#1E9CF8',
    borderLeftWidth: 10,
    borderLeftColor: 'transparent',
    borderRightWidth: 25,
    borderRightColor: 'transparent',
    borderStyle: 'solid',
    transform: [{ rotate: '-45deg' }],
  },
  activeText: {
    position: 'absolute',
    top: 5,
    left: 27,
    transform: [{ rotate: '-45deg' }],
    fontWeight: 'bold',
    color: 'white',
    fontSize: 14,
  },
});

export default SceneSession;
