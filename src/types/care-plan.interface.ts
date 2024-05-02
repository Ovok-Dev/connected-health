import type {
  Coding,
  Intent,
  Period,
  Reference,
  ResourceType,
  Status,
} from './../types/common-ovok.types';
export interface ICarePlanService {
  createCarePlan: (body: CarePlanDTO) => Promise<CarePlan>;
}

export interface CarePlan {
  id: string;
  status: Status;
  intent: Intent;
  subject: Reference;
  period: Period;
  category: string[];
  title: string;
  description: string;
  goal: string[];
  activity: CarePlanActivity;
}

export type CarePlanDTO = Omit<CarePlan, 'id'>;

export type CarePlanCategory = {
  coding: Coding[];
};

export type CarePlanActivity = {
  reference: Reference;
};

export type ActivityDetail = {
  status: Status;
  kind: ResourceType;
  code: string;
};
