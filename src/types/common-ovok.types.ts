/*
TODO@ALL: Add as many of these types as possible for Ovok library later.
*/

export type Address = {
  city: string;
  postalCode: string;
  streetAddress: string;
  country: string;
  use: AddressUse;
  state: string;
};

export type Currency = 'USD' | 'EUR' | 'GBP' | 'AUD' | 'CAD';

export type ResourceDefinition<T extends string> = `${T}/${string}`;

export type AddressUse = 'home' | 'work' | 'temp' | 'old' | 'billing';

export type Gender = 'male' | 'female' | 'unknown' | 'other';

export type Roles =
  | 'owner'
  | 'patient'
  | 'doctor'
  | 'practitioner'
  | 'assistant'
  | 'not-found';

export type PaymentStatus =
  | 'active'
  | 'cancalled'
  | 'draft'
  | 'entered-in-error';

export type Intent =
  | 'unknown'
  | 'proposal'
  | 'plan'
  | 'order'
  | 'original-order'
  | 'reflex-order'
  | 'filler-order'
  | 'instance-order'
  | 'option';

export type Status =
  | 'draft'
  | 'requested'
  | 'recieved'
  | 'accepted'
  | 'cancalled'
  | 'completed'
  | 'entered-in-error'
  | 'failed'
  | 'in-progress'
  | 'on-hold'
  | 'ready';

export type LifecycleStatus =
  | 'accepted'
  | 'cancalled'
  | 'active'
  | 'on-hold'
  | 'completed'
  | 'entered-in-error'
  | 'planned'
  | 'proposed'
  | 'rejected';

export type AchivementStatus =
  | 'achieved'
  | 'not-achieved'
  | 'improving'
  | 'in-progress'
  | 'no-change'
  | 'no-progress';

export type Priority = 'high-priority' | 'low-priority' | 'medium-priority';

export type Note = string[];

export type Reference = {
  type: string;
  id: string;
};

export type Code = {
  text: string;
};

export type Period = {
  start: Date;
  end: Date;
};

export type Coding = {
  code: string;
};

export type Amount = {
  value: number;
  currency?: Currency;
};

// @NOTE fill all resource types later.
export type ResourceType =
  | 'Observation'
  | 'Task'
  | 'CarePlan'
  | 'Goal'
  | 'Patient'
  | 'Practitioner'
  | 'Questionnaire';

export interface AnyCustomParams {
  [key: string]: string;
}
