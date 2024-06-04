import type {
  IObservationRequestData,
  IObservationService,
  IObservationUpdateResponseData,
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

  public updateObservation = async (observationUpdateData: {
    observationId: string;
    patientId: string;
    newObservationValue: string;
    observationCode: string;
  }): Promise<IObservationUpdateResponseData> => {
    const requestData: IObservationRequestData = {
      status: 'registered',
      code: observationUpdateData.observationCode,
      subject: {
        type: 'Patient',
        id: observationUpdateData.patientId,
      },
      measurement: {
        type: 'Quantity',
        value: observationUpdateData.newObservationValue,
      },
    };
    const { data: responseData } = await client.put(
      `/observation/${observationUpdateData.observationId}`,
      requestData
    );
    return responseData;
  };
}
