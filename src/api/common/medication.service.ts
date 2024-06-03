import type {
  CreateMedicationResponse,
  ICreateMedicationData,
  MedicationResponse,
} from '@/types/medication.interface';

import { client } from './client';

export class MedicationService {
  public createMedication = async (
    createMedicationData: ICreateMedicationData
  ): Promise<CreateMedicationResponse> => {
    const { data } = await client.post('/medication', createMedicationData);
    return data;
  };

  public getMedication = async (
    medicationId: string
  ): Promise<MedicationResponse> => {
    const { data } = await client.get<MedicationResponse>(
      `/medication/${medicationId}`
    );
    return data;
  };
}
