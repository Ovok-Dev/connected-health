import type { Reference } from './common-ovok.types';
import type {
  ObservationCode,
  ObservationComponent,
  ObservationMeasurement,
  ObservationStatus,
} from './observation.types';

export interface IObservationService {
  createObservation: (body: ObservationBody) => Promise<any>;
}

export interface Observation {
  id: string;
  status: ObservationStatus;
  code: ObservationCode;
  codeName?: string;
  category?: string[];
  subject?: Reference;
  effectiveDateTime?: string;
  performer?: Reference[];
  measurement?: ObservationMeasurement;
  note?: string[];
  method?: string;
  component?: ObservationComponent[];
  identifier?: Reference[];
}

export type ObservationBody = Omit<Observation, 'id'>;

export interface ObservationResponse {
  data: Daum[];
  total: number;
}

export interface Daum {
  id: string;
  status: string;
  code: string;
  codeName?: string;
  subject: Subject;
  method?: string;
  component?: Component[];
  effectiveDateTime?: string;
  measurement?: Measurement;
  note?: string[];
  identifier?: Identifier[];
}

export interface Subject {
  type: string;
  id: string;
}

export interface Component {
  code?: string;
}

export interface Measurement {
  value: string;
  type: string;
}

export interface Identifier {
  system: string;
  value: string;
}

export interface IObservationRequestData {
  status: string;
  code: string;
  subject: {
    type: string;
    id: string;
  };
  measurement: {
    type: string;
    value: string;
  };
}

export interface IObservationUpdateResponseData {
  resourceType: string;
  id: string;
  status: string;
  code: string;
  codeName: string;
  subject: {
    type: string;
    id: string;
  };
  measurement: {
    type: string;
    value: string;
  };
}
