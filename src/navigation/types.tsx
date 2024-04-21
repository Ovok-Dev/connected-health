import type { RouteProp as NRouteProp } from '@react-navigation/native';

import type { AuthStackParamList } from './auth-navigator';
import type { HealthStackParamList } from './health-navigator';
import type { SceneStackParamList } from './home-navigator';

export type RootStackParamList = AuthStackParamList &
  HealthStackParamList &
  SceneStackParamList; //  & FooStackParamList & BarStackParamList
// very important to type check useNavigation hook
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RouteProp<T extends keyof RootStackParamList> = NRouteProp<
  RootStackParamList,
  T
>;
