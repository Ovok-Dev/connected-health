// import { useFont } from "@shopify/react-native-skia";
import { useState } from 'react';
import { View } from 'react-native';
import { BarGroup, CartesianChart, Line } from 'victory-native';

// FIX: import of font
// import jost from "../../assets/fonts/Jost-Regular.ttf";

interface Props {
  selectedVitalsValue: string;
  selectedTimeSpanValue: string;
}

export default function Charts({
  selectedVitalsValue,
  selectedTimeSpanValue,
}: Props) {
  const [bloodPressureData /*setBloodPressureData*/] = useState<number[][]>([
    [78, 142],
    [75, 135],
    [84, 150],
    [89, 158],
    [84, 162],
    [77, 141],
    [72, 138],
  ]);
  const [heartRateData /*setBloodPressureData*/] = useState([
    45, 65, 56, 59, 62, 53, 46, 65, 63, 69, 71, 64, 55, 42,
  ]);

  // const font = useFont(jost, 12);

  const renderBloodPressureData = () => {
    const dataDisplayed: number[][] =
      selectedTimeSpanValue === 'last-week'
        ? bloodPressureData
        : bloodPressureData.slice(4, 7);
    const stackData = dataDisplayed.map((stack, index) => {
      return {
        day: index + 1,
        diastolic: stack[0],
        systolic: stack[1],
      };
    });
    return (
      <CartesianChart
        data={stackData}
        xKey="day"
        yKeys={['diastolic', 'systolic']}
        domain={{
          x: [0, selectedTimeSpanValue === 'last-week' ? 7 : 4],
          y: [0, 200],
        }}
        domainPadding={{ left: 20, right: 20 }}
        padding={10}
        // axisOptions={{
        //   font
        // }}
      >
        {({ points, chartBounds }) => (
          <BarGroup
            chartBounds={chartBounds}
            betweenGroupPadding={0.3}
            withinGroupPadding={0.1}
          >
            <BarGroup.Bar points={points.diastolic} color="blue" />
            <BarGroup.Bar points={points.systolic} color="orange" />
          </BarGroup>
        )}
      </CartesianChart>
    );
  };

  const renderHeartRateData = () => {
    const dataDisplayed: number[] =
      selectedTimeSpanValue === 'last-week'
        ? heartRateData
        : heartRateData.slice(4, 7);
    const stackData = dataDisplayed.map((value, index) => {
      return {
        day: (index + 1).toString(),
        value,
      };
    });
    return (
      <CartesianChart
        data={stackData}
        xKey="day"
        yKeys={['value']}
        domain={{
          x: [0, selectedTimeSpanValue === 'last-week' ? 3 : 7],
          y: [30, 100],
        }}
        domainPadding={{ left: 20, right: 20 }}
        padding={10}
        // axisOptions={{
        //   font
        // }}
      >
        {({ points }) => (
          <Line points={points.value} strokeWidth={3} color={'red'} />
        )}
      </CartesianChart>
    );
  };

  return (
    <View className="my-6 h-[200px] w-full">
      {selectedVitalsValue === 'blood-pressure'
        ? renderBloodPressureData()
        : renderHeartRateData()}
    </View>
  );
}
