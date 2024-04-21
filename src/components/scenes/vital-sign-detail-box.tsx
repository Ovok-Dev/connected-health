import { BreathingData, MoodData } from '@/types/scenes';
import colors from '@/ui/theme/colors';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { VitalSignsDetailsCard } from './vital-sign-details-card';

interface VitalSignsDetailsBoxProps {
  readonly sceneDataMood: MoodData | undefined;

  readonly sceneDataRespiration: BreathingData | undefined;
}

const ICON_SIZE = 22;

export const VitalSignsDetailsBox: React.FunctionComponent<
  VitalSignsDetailsBoxProps
> = ({ sceneDataRespiration }) => {
  // const mood = getMoodName(Number(sceneDataMood.value?.Quantity?.value));
  const avgExhaleTime = Number(sceneDataRespiration?.exhale_avg_per_scene ?? 0);
  const avgInhaleTime = Number(sceneDataRespiration?.inhale_avg_per_scene ?? 0);
  const breathingCount = Number(
    sceneDataRespiration?.breathing_count_per_min ?? 0
  );

  return (
    <>
      <View style={styles.superSetContainer}>
        <View style={[styles.mainContainer]}>
          <View style={styles.contentContainer}>
            <View style={styles.dataContainer}>
              <View style={styles.iconBoxName}>
                <FontAwesome5
                  name="lungs"
                  size={ICON_SIZE}
                  style={styles.iconOpacity}
                />
              </View>

              <View style={styles.threeIcons}>
                {/* <View style={styles.iconBox}>
                  <Text style={[styles.name]}>{'good'}</Text>
                </View> */}

                <View style={[styles.iconBox, styles.middleBox]}>
                  {/* <Foundation
                    name="meditation"
                    size={ICON_SIZE}
                    style={styles.iconOpacity}
                  /> */}
                  <Text style={[styles.name]}>Inhale</Text>
                </View>

                <View style={[styles.iconBox, styles.rightBox]}>
                  {/* <FontAwesome5
                    name="bicycle"
                    size={ICON_SIZE}
                    style={styles.iconOpacity}
                  /> */}
                  <Text style={[styles.name]}>Exhale</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        <VitalSignsDetailsCard
          name={`${breathingCount} per min`}
          distance={'Good'}
          altitude={`${avgInhaleTime.toFixed(1)} s` ?? 'NA'}
          tours={`${avgExhaleTime.toFixed(1)} s` ?? 'NA'}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingVertical: 12,
    marginRight: 10,
    marginLeft: 10,
    borderRadius: 15,
  },

  contentContainer: {
    flex: 1,
  },

  name: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    fontWeight: 'bold',
    fontSize: 16,
    color: colors.black,
  },

  dataContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconBoxName: { flex: 2 },
  middleBox: {
    justifyContent: 'center',
  },
  superSetContainer: {
    backgroundColor: colors.white,
    marginHorizontal: 8,
    borderRadius: 15,
    paddingBottom: 9,
  },

  threeIcons: { flex: 3, flexDirection: 'row' },
  rightBox: {
    justifyContent: 'center',
  },
  iconOpacity: {
    opacity: 0.6,
    color: colors.black,
  },
});
