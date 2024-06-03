import type {
  IObservationService,
  ObservationBody,
  ObservationResponse,
} from '@/types/observation.interface';

import { client } from './client';

export class ObservationService implements IObservationService {
  public createObservation = async (
    observation: ObservationBody
  ): Promise<any> => {
    const { data } = await client.post('/observation', observation);
    return data;
  };

  public getAllObservations = async (): Promise<ObservationResponse> => {
    const { data } = await client.get(`/observation`);
    return data;
  };
}
