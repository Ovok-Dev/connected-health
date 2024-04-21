/* eslint-disable @typescript-eslint/no-unused-vars */
import { ObservationCategories } from '@/types/scenes';
import colors from '@/ui/theme/colors';

import * as React from 'react';
import {
  Dimensions,
  ImageStyle,
  Platform,
  StatusBar,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { screenSize, windowWidth } from '../sized-box';

export interface IBreathingRateChartProps {
  readonly sceneObservations: ObservationCategories | null;
}

type BreathingRateChartStyle = {
  root: ViewStyle;
  scrollViewContentContainer: ViewStyle;
  content: ViewStyle;
  titleFieldContainer: ViewStyle;
  title: TextStyle;
  opacity: TextStyle;
  sectionHeaderText: TextStyle;
  seeProgramTitle: TextStyle;
  exercises: ViewStyle;
  exerciesContainer: ViewStyle;
  image: ImageStyle;
  exersixeScrollContainer: ViewStyle;
  label: TextStyle;
  completedContainer: ViewStyle;
  noExercisePlanContainer: ViewStyle;
  noExercisePlanTitle: TextStyle;
};

const BreathingRateChartComponent: React.FC<IBreathingRateChartProps> = ({
  sceneObservations,
  ...props
}) => {
  const sceneStarted = new Date(
    sceneObservations?.moodObservationBegin?.meta.lastUpdated as string
  );
  const sceneEnded = new Date(
    sceneObservations?.moodObservationEnd?.meta.lastUpdated as string
  );

  const diffInMs = sceneEnded.getTime() - sceneStarted.getTime();
  const diffInMinutes = Math.floor(diffInMs / 60000);
  const screenWidth = Dimensions.get('window').width;
  const chartConfig = {
    backgroundGradientFromOpacity: 0,
    // backgroundGradientTo: '#08130D',
    fillShadowGradientFrom: '#B09FFF',
    fillShadowGradientTo: '#8D79F6',
    fillShadowGradientFromOpacity: 0.55,
    fillShadowGradientToOpacity: 0.05,
    fillShadowGradientToOffset: 0.7,
    backgroundGradientToOpacity: 0,
    color: (opacity = 0.5) => `#8D79F6`,
    strokeWidth: 3, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };

  function generateEquallyDividedLabels(
    totalMinutes: number,
    labelCount: number
  ) {
    // Calculate the time interval between labels
    const timeInterval = totalMinutes / labelCount;

    // Generate the labels
    const labels = Array.from({ length: labelCount }, (_, index) => {
      const time = index * timeInterval;
      return `${Math.round(time)} Min`;
    });

    return labels;
  }

  const data = {
    labels: generateEquallyDividedLabels(diffInMinutes, 6),
    datasets: [
      {
        data: [
          Number(
            sceneObservations?.breathingObservationMiddle?.[0]?.BreathingData
              ?.breathing_count_per_min ?? 0
          ),
          Number(
            sceneObservations?.breathingObservationMiddle?.[0]?.BreathingData
              ?.breathing_count_per_min ?? 0
          ),
          Number(
            sceneObservations?.breathingObservationMiddle?.[1]?.BreathingData
              ?.breathing_count_per_min ?? 0
          ),
          Number(
            sceneObservations?.breathingObservationMiddle?.[2]?.BreathingData
              ?.breathing_count_per_min ?? 0
          ),
          Number(
            sceneObservations?.breathingObservationMiddle?.[3]?.BreathingData
              ?.breathing_count_per_min ?? 0
          ),
          Number(
            sceneObservations?.breathingObservationBegin?.BreathingData
              ?.breathing_count_per_min ?? 0
          ),
        ],
        // color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2, // optional
      },
    ],

    legend: ['Breathing Rate'], // optional
  };
  return (
    <LineChart
      data={data}
      width={screenWidth}
      height={220}
      chartConfig={chartConfig}
      verticalLabelRotation={30}
      withInnerLines={false}
      withOuterLines={false}
      getDotColor={() => '#FE6C6C'}
      bezier
    />
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
    paddingTop: Platform.OS === 'ios' ? 8 : 0,

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

export default BreathingRateChartComponent;
