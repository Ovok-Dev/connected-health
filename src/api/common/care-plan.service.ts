import type {
  CarePlanDTO,
  ICarePlanService,
} from '@/types/care-plan.interface';

import { client } from './client';

export class CarePlanService implements ICarePlanService {
  public createCarePlan = async (carePlan: CarePlanDTO): Promise<any> => {
    const { data } = await client.post('/care-plan', carePlan);
    return data;
  };

  public getMostRecentUserCarePlan = async (params: { userId: string }) => {
    const { userId } = params;
    const { data } = await client.get(
      `/care-plan?subject=Patient/${userId}&_sort=-date&_count=1`
    );
    return data;
  };

  public getUserCarePlans = async () => {
    const { data } = await client.get(`/care-plan`);
    return data;
  };

  // !important This is a put request NOT a Patch request
  public updateCarePlan = async (
    carePlanId: string,
    plan: CarePlanDTO
  ): Promise<any> => {
    const { data } = await client.put(`/care-plan/${carePlanId}`, plan);
    return data;
  };
}
