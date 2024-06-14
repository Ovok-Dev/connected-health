import type {
  CarePlanDTO,
  ICarePlanService,
} from '@/types/care-plan.interface';
import type {
  IGetAllCarePlansResponse,
  IGetAllCarePlansResponseData,
} from '@/types/careplan.interface';
import type {
  IUpdateMedicationFormData,
  MedicationRequestResponseData,
} from '@/types/medication-request.interface';

import { client } from './client';
import { MedicationRequestService } from './medication-request.service';

export class CarePlanService implements ICarePlanService {
  public createCarePlan = async (carePlan: CarePlanDTO): Promise<any> => {
    const { data } = await client.post('/care-plan', carePlan);
    return data;
  };

  public getMostRecentUserCarePlan = async (params: {
    userId: string;
  }): Promise<IGetAllCarePlansResponseData[]> => {
    const { userId } = params;
    const { data } = await client.get<IGetAllCarePlansResponse>(
      `/care-plan?subject=Patient/${userId}&_sort=-date&_count=1`
    );
    return data.data;
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

  public updateMedicationOfCarePlan = async (
    patientId: string,
    carePlan: IGetAllCarePlansResponseData,
    updateMedicationFormData: IUpdateMedicationFormData
  ): Promise<{
    updatedCarePlan: IGetAllCarePlansResponseData;
    newMedicationRequest: MedicationRequestResponseData & {
      medicationName: string;
    };
  }> => {
    const medicationRequestService = new MedicationRequestService();
    const medicationRequestResponseData: MedicationRequestResponseData & {
      medicationName: string;
    } = await medicationRequestService.createMedicationRequest(
      updateMedicationFormData,
      patientId
    );
    // eslint-disable-next-line unused-imports/no-unused-vars
    const { id, ...updateCarePlanRequestData } = {
      ...carePlan,
      activity: [
        ...carePlan.activity,
        {
          reference: {
            type: 'MedicationRequest',
            id: medicationRequestResponseData.id,
          },
        },
      ],
    };
    const { data: carePlanData } =
      await client.put<IGetAllCarePlansResponseData>(
        `/care-plan/${carePlan.id}`,
        updateCarePlanRequestData
      );
    return {
      updatedCarePlan: carePlanData,
      newMedicationRequest: medicationRequestResponseData,
    };
  };
}
