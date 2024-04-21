import { medplumInstance } from '@/api';
import BreathingRateChartComponent from '@/components/scenes/breathing-rate-chart';
import { VitalSignsDetailsBox } from '@/components/scenes/vital-sign-detail-box';
import { SizedBox, screenSize, windowWidth } from '@/components/sized-box';
import { calculateTimeDifferenceInMinutes } from '@/core';
import type { RouteProp } from '@/navigation/types';
import type {
  BreathingData,
  MedplumObservationResponse,
  MoodData,
  ObservationCategories,
} from '@/types/scenes';
import { ScrollView, Text, View, colors } from '@/ui';
import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  ImageBackground,
  Platform,
  RefreshControl,
  StatusBar,
  StyleSheet,
} from 'react-native';
import { BackButtonOnPicture } from './back-button';

export const Scene = () => {
  const [sceneObservations, setSceneObservations] =
    useState<ObservationCategories | null>(null);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const { params } = useRoute<RouteProp<'Scene'>>();
  const sceneId = params?.sceneId;
  const { goBack } = useNavigation();
  const fetchObservations = React.useCallback(async () => {
    setRefreshing(true);
    try {
      const response = await medplumInstance.get('/Observation', {
        params: { performer: sceneId },
      });

      const observationsResponse: MedplumObservationResponse[] =
        response.data.entry.map((entry: any) => entry.resource);

      const initialObservationCategories: ObservationCategories = {
        breathingObservationBegin: null,
        breathingObservationEnd: null,
        breathingObservationMiddle: [],
        moodObservationBegin: null,
        moodObservationEnd: null,
      };

      for (const observation of observationsResponse) {
        const code = observation.code?.coding?.[0]?.code || '';
        const status = observation.status || '';

        if (code === '9279-1') {
          if (status === 'preliminary') {
            initialObservationCategories.breathingObservationBegin =
              observation;
          } else if (status === 'final') {
            initialObservationCategories.breathingObservationEnd = observation;
          } else if (status === 'registered') {
            initialObservationCategories.breathingObservationMiddle?.push(
              observation
            );
          }
        } else if (code === '52497-5') {
          if (status === 'preliminary') {
            initialObservationCategories.moodObservationBegin = observation;
          } else if (status === 'final') {
            initialObservationCategories.moodObservationEnd = observation;
          }
        }

        // Parse the JSON in "note" and "method" fields
        try {
          if (observation.note && observation.note[0]?.text) {
            observation.SceneDetails = await JSON.parse(
              observation.note[0].text
            ).Scene;
          }
          if (observation.method && observation.method.text) {
            const vitalAndMood: {
              mood_data: MoodData;
              vital_data: BreathingData;
            } = await JSON.parse(observation.method.text);
            observation.BreathingData = vitalAndMood.vital_data;
            observation.MoodData = vitalAndMood.mood_data;
          }

          // console.log({ sdfsfsdf: observation.method.text });
          // console.log({
          //   sdfsfsdf2: observation.SceneDetails,
          // });
        } catch (error) {
          console.error('Error parsing JSON in note or method:', error);
        }
      }
      initialObservationCategories.breathingObservationMiddle?.sort(
        (a: MedplumObservationResponse, b: MedplumObservationResponse) => {
          const dateA = new Date(a.meta.lastUpdated);
          const dateB = new Date(b.meta.lastUpdated);
          return dateA.valueOf() - dateB.valueOf();
        }
      );

      setSceneObservations(initialObservationCategories);

      // console.log(
      //   'Observations====>:',
      //   JSON.stringify(initialObservationCategories, null, 2)
      // );
      setRefreshing(false);
    } catch (error) {
      console.error('Error fetching observations:', error);
    }
  }, [sceneId]);

  useEffect(() => {
    if (sceneId) {
      fetchObservations();
    }
  }, [fetchObservations, sceneId]);

  const backgroundImageSource =
    sceneObservations?.moodObservationBegin?.SceneDetails?.scene_image;
  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        bouncesZoom={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => fetchObservations()}
          />
        }
      >
        <BackButtonOnPicture
          onPress={goBack}
          isAbsoluteLocation={true}
          iconColor={'white'}
        />

        <View style={styles.customContainer}>
          <View style={styles.whiteContainer}>
            <ImageBackground
              resizeMode="cover"
              style={styles.ChallengeContainer}
              source={
                { uri: backgroundImageSource } ||
                require('../../images/main_header.png')
              }
            />

            <View style={styles.bottomView}>
              <View style={styles.dateAndMember}>
                <View style={styles.memberNumberContainer}>
                  <Text
                    style={styles.memberNumber}
                  >{`${calculateTimeDifferenceInMinutes(
                    sceneObservations?.moodObservationBegin?.meta.lastUpdated ??
                      new Date().toDateString(),
                    sceneObservations?.moodObservationEnd?.meta.lastUpdated ??
                      new Date().toDateString()
                  )}`}</Text>
                  <Text style={styles.memberNumberText}>{'Minutes'}</Text>
                </View>

                <Text style={styles.dateText}>
                  {new Date(
                    sceneObservations?.moodObservationBegin?.meta
                      .lastUpdated as string
                  ).toDateString() ?? new Date().toDateString()}
                </Text>
              </View>
              <View style={styles.ChallengeBottomContainer}>
                <View>
                  <Text style={styles.label_ChallengeName}>
                    {sceneObservations?.moodObservationBegin?.SceneDetails
                      ?.scene_name ?? ''}
                  </Text>
                  <Text style={styles.label_ChallengeDescription}>
                    {sceneObservations?.moodObservationBegin?.SceneDetails
                      ?.scene_description ?? ''}
                  </Text>
                </View>
              </View>

              <View style={styles.container}>
                <View style={styles.challengeDetailsBox}>
                  {sceneObservations &&
                    sceneObservations?.breathingObservationMiddle &&
                    sceneObservations?.breathingObservationMiddle?.length ===
                      4 && (
                      <BreathingRateChartComponent
                        sceneObservations={sceneObservations}
                      />
                    )}

                  <View style={styles.challengeDetailsBox}>
                    <Text style={styles.beforeAfterSceneText}>
                      Before Meditation
                    </Text>
                    <VitalSignsDetailsBox
                      sceneDataMood={
                        sceneObservations?.breathingObservationBegin?.MoodData
                      }
                      sceneDataRespiration={
                        sceneObservations?.breathingObservationMiddle?.[0]
                          .BreathingData ??
                        sceneObservations?.breathingObservationBegin
                          ?.BreathingData
                      }
                    />
                    <SizedBox height={10} width={undefined} />
                    <Text style={styles.beforeAfterSceneText}>
                      After Meditation
                    </Text>
                    <VitalSignsDetailsBox
                      sceneDataMood={
                        sceneObservations?.breathingObservationEnd?.MoodData
                      }
                      sceneDataRespiration={
                        sceneObservations?.breathingObservationEnd
                          ?.BreathingData
                      }
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>

          {/* {heartRateArray && heartRateArray.length > 4 && (
            <HeartRateChartComponent
              sceneObservation={sceneObservation}
              breathingObservationBegin={breathingObservationBegin}
              moodObservationBegin={moodObservationBegin}
              breathingObservationEnd={breathingObservationEnd}
              breathingObservationMiddleAndEnd={
                breathingObservationMiddleAndEnd
              }
              heartRateArray={heartRateArray}
            />
          )} */}
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  customContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    flex: 1,
  },
  whiteContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  abBackButton: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute',
    left: screenSize.width / 15,
    top:
      Platform.OS === 'android'
        ? StatusBar.currentHeight
        : screenSize.height * 0.04,
    width: (25 * 4) / 3,
    height: (25 * 4) / 3,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    zIndex: 100,
  },
  icon: {
    height: 25,
    resizeMode: 'contain',
  },
  backButton: {
    flexDirection: 'row',

    marginTop: 50,
  },
  statisticContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 24,
    margin: 15,
    borderRadius: 15,
  },
  image: {
    width: 50,
    height: 50,
  },
  memberNumberContainer: {
    flexDirection: 'row',
  },
  memberNumber: {
    color: colors.primary[500],
    fontSize: 25,
    fontWeight: 'bold',
  },
  beforeAfterSceneText: {
    fontFamily: 'Gothic A1',
    color: '#121826',
    fontSize: 18,
    lineHeight: 22,
    fontWeight: '400',
    justifyContent: 'center',
    textAlign: 'center',

    fontStyle: 'normal',

    marginBottom: windowWidth / 70,
    marginTop: windowWidth / 60,
    letterSpacing: 0.6,
    flex: 1,
  },
  memberNumberText: {
    fontSize: 15,

    textAlignVertical: 'bottom',
    paddingTop: Platform.OS === 'ios' ? 0 : 0,

    paddingLeft: 6,
    color: colors.black,
  },
  dateText: {
    fontSize: 14,

    textAlignVertical: 'bottom',
    paddingTop: 8,
    paddingLeft: 6,
    paddingRight: 10,
    color: colors.black,
  },

  Label: {
    color: 'black',
    fontSize: 15,
    fontWeight: '700',
    lineHeight: 20,
    marginLeft: 5,
  },
  dateAndMember: {
    width: '100%',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    marginLeft: 10,

    paddingHorizontal: 20,
    marginTop: screenSize.width / 20,
  },
  label_ChallengeName: {
    lineHeight: 50,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  label_ChallengeDescription: {
    lineHeight: 20,
    fontSize: 17,
    fontWeight: '200',
    color: 'black',
  },
  ChallengeContainer: {
    height: screenSize.width / 1.5,
  },
  ChallengeBottomContainer: {
    width: '100%',

    paddingHorizontal: 20,
    marginTop: screenSize.width / 20,
  },
  bottomView: { backgroundColor: 'white', borderRadius: 30, marginTop: -25 },

  participateContainer: {
    alignSelf: 'center',
    width: screenSize.width,
    marginRight: screenSize.width / 20,
    paddingRight: screenSize.width / 20,
    paddingLeft: screenSize.width / 20,
    marginLeft: screenSize.width / 20,
    marginBottom: 20,
    marginTop: 15,
  },
  challengeDetailsBox: {
    paddingBottom: screenSize.height / 25,
    paddingTop: screenSize.height / 30,
  },

  leaveContainer: {
    alignSelf: 'center',
    width: screenSize.width,
    marginRight: screenSize.width / 20,
    paddingRight: screenSize.width / 20,
    paddingLeft: screenSize.width / 20,
    marginLeft: screenSize.width / 20,
    marginBottom: 20,
    marginTop: 15,
  },
});
