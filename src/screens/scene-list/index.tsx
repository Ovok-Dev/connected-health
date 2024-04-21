import type { Observation } from 'fhir/r4';
import React, { useEffect } from 'react';
import { RefreshControl, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { medplumInstance } from '@/api';
import SceneSessionListView from '@/components/scenes/scene-session-list-view';
import { SizedBox, moderateScale } from '@/components/sized-box';
import { useAuth } from '@/core';
import type {
  BreathingData,
  MedplumObservationResponse,
  MoodData,
} from '@/types/scenes';
import { Image, ScrollView, Text, View } from '@/ui';

import { Cover } from '../onboarding/cover';

// import ProfileIcon from './profile-icon';

export const Home = () => {
  const [observations, setObservations] = React.useState<Observation[]>([]);
  const [refreshing, setRefreshing] = React.useState<boolean>(false);

  const fetchObservations = React.useCallback(async () => {
    setRefreshing(true);
    medplumInstance
      .get('/Observation', {
        params: { code: '52497-5', status: 'final' },
      })
      // .get('/Observation', { params: { code: '52497-5', status: 'final' } })
      .then(async (response) => {
        const modifiedResponsePromises = response.data.entry.map(
          async (entry: any) => {
            const observation: MedplumObservationResponse = entry.resource;
            const code = observation.code?.coding?.[0]?.code || '';
            const status = observation.status || '';
            if (code === '52497-5') {
              if (status === 'final') {
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

                  return observation;
                } catch (error) {
                  console.error('Error parsing JSON in note or method:', error);
                  return;
                }
              }
            }

            return observation;
          }
        );

        const modifiedResponse = await Promise.all(
          modifiedResponsePromises
        ).then((res) => res.filter((entry) => entry !== null));

        setObservations(modifiedResponse);
        setRefreshing(false);
      })
      .catch((error) => {
        console.log('~~~~~~>', JSON.stringify(error, null, 2));
      });
  }, []);

  useEffect(() => {
    fetchObservations();
  }, [fetchObservations]);

  return (
    <>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => fetchObservations()}
          />
        }
        style={styles.scrollView}
      >
        {/* <ProfileIcon /> */}
        <View style={styles.container}>
          <Image
            style={styles.headerImage}
            source={require('../../images/main_header.png')}
          />

          <LinearGradient
            colors={['rgba(106, 144, 184, 0)', '#1E1F63']}
            style={styles.linearGradient}
          />
          <View style={styles.welcomeContainer2}>
            <Text variant="h2" className="text-white">
              {`Hello ${useAuth().token?.profile?.name?.[0]?.given?.[0]}`}
            </Text>
          </View>
        </View>
        {observations?.length > 0 ? (
          <View style={styles.welcomeContainer}>
            <SizedBox height={20} width={10} />
            <SceneSessionListView
              sceneSessionList={observations as MedplumObservationResponse[]}
              isUserChallenge
            />
          </View>
        ) : (
          <View style={styles.coverContainer}>
            <Text variant="h3" className="p-14 text-center text-charcoal-200 ">
              {'Use our vr app to fetch your data here'}{' '}
            </Text>
            <Cover />
          </View>
        )}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  welcomeContainer: {
    padding: moderateScale(16),
  },
  container: { flex: 1 },
  scrollView: { backgroundColor: '#1E1F63' },
  headerImage: { width: '100%', height: 310 },
  welcomeContainer2: {
    paddingHorizontal: moderateScale(16),
  },
  coverContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  linearGradient: {
    position: 'absolute',
    top: '70%',
    width: '100%',
    height: '30%',
  },
});
