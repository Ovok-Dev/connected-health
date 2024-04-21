import { SceneStackParamList } from '@/navigation/home-navigator';
import type { MedplumObservationResponse } from '@/types/scenes';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { TouchableOpacity, View } from 'react-native';
import SceneSession from './scene-session-view';

interface ISceneSessionListView {
  readonly sceneSessionList: MedplumObservationResponse[];

  readonly isFromHome?: boolean;
  readonly createable?: boolean;
  readonly isUserChallenge?: boolean;
}

const SceneSessionListView: React.FunctionComponent<ISceneSessionListView> = (
  props
) => {
  // if (props.sceneSessionList.length <= 0) {
  //   return <React.Fragment />;
  // }

  const sceneSessionList = props.sceneSessionList;
  const { navigate }: NavigationProp<SceneStackParamList> = useNavigation();

  return (
    <View>
      {sceneSessionList.map((scene: MedplumObservationResponse) => {
        if (!scene.SceneDetails || !scene) {
          return <React.Fragment />;
        }
        return (
          <TouchableOpacity
            key={scene.id}
            activeOpacity={1}
            onPress={() => {
              navigate('Scene', {
                sceneId: scene.performer?.[0]?.reference as string,
              });
            }}
          >
            <SceneSession
              key={scene.id}
              sceneSession={scene as MedplumObservationResponse}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

// const styles = StyleSheet.create({
//   label: {
//     fontFamily: 'Gothic A1',
//     color: '#121826',
//     fontSize: 18,
//     lineHeight: 22,
//     fontWeight: '400',

//     fontStyle: 'normal',
//     marginTop: 10,
//     marginBottom: 5,
//     letterSpacing: 0.6,
//     flex: 1,
//   },
//   rowContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingLeft: 12,
//   },
// });

export default SceneSessionListView;
