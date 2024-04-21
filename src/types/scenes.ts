import type { Observation } from 'fhir/r4';

export type Mood =
  | 'Tense'
  | 'Nervous'
  | 'Irritated'
  | 'Annoyed'
  | 'Excited'
  | 'Lively'
  | 'Happy'
  | 'Cheerful'
  | 'Bored'
  | 'Weary'
  | 'Gloomy'
  | 'Sad'
  | 'Carefree'
  | 'Relaxed'
  | 'Calm'
  | 'Serene';

export type Mood1To5 = 1 | 2 | 3 | 4 | 5;

export interface SceneDetails {
  scene_ID: string;
  category: string;
  scene_name: string;
  scene_image: string;
  scene_description: string;
  scene_start_time?: string;
  scene_duration?: string;
}

export interface BreathingData {
  inhale_avg_per_scene: number;
  exhale_avg_per_scene: number;
  breathing_count_per_min: number;
  hold_time_avg: number;
  good_inhale: number;
  order_of_data_posting: number;
}
export interface MoodData {
  moodName: Mood;
  moodRating: Mood1To5;
}

export interface MedplumObservationResponse extends Observation {
  subject: {
    reference: string;
  };
  performer: [
    {
      reference: string;
    }
  ];

  method: {
    text: string;
  };
  note: [
    {
      text: string;
    }
  ];
  SceneDetails?: SceneDetails;
  BreathingData?: BreathingData;
  MoodData?: MoodData;
  code: {
    coding: [
      {
        code: string;
      }
    ];
    text: string;
  };
  valueInteger: number;
  id: string;
  meta: {
    versionId: string;
    lastUpdated: string;
    tag: [
      {
        system: string;
        code: string;
      }
    ];
  };
}

export interface ObservationCategories {
  breathingObservationBegin: MedplumObservationResponse | null;
  breathingObservationEnd: MedplumObservationResponse | null;
  breathingObservationMiddle: MedplumObservationResponse[] | null;
  moodObservationBegin: MedplumObservationResponse | null;
  moodObservationEnd: MedplumObservationResponse | null;
}
