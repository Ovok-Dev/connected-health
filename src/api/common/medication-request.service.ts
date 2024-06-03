import type {
  ICreateMedicationFormData,
  ICreateMedicationRequestData,
  MedicationRequestResponse,
  MedicationRequestResponseData,
} from '@/types/medication-request.interface';

import { client } from './client';
import { MedicationService } from './medication.service';

const medicationService = new MedicationService();

export class MedicationRequestService {
  public getAllMedicationRequests = async (): Promise<
    (MedicationRequestResponseData & { medicationName: string })[]
  > => {
    const { data: medicationRequestData } =
      await client.get<MedicationRequestResponse>('/medication-request');
    const data: (MedicationRequestResponseData & { medicationName: string })[] =
      await Promise.all(
        medicationRequestData.data.map(
          async (
            entry: MedicationRequestResponseData
          ): Promise<
            MedicationRequestResponseData & { medicationName: string }
          > => {
            const { text } = await medicationService.getMedication(
              entry.medicationCodeableConcept
            );
            const medicationName: string = text.div;

            return { ...entry, medicationName };
          }
        )
      );

    return data;
  };

  public createMedicationRequest = async (
    createMedicationFormData: ICreateMedicationFormData,
    id: string
  ): Promise<MedicationRequestResponseData & { medicationName: string }> => {
    console.log('Creating medicationRequest');
    const { id: medicationId } = await medicationService.createMedication({
      text: {
        status: 'generated',
        div: createMedicationFormData.medicationName,
      },
    });
    console.log('medicationId: ', medicationId);
    const requestData: ICreateMedicationRequestData = {
      status: 'active',
      intent: 'proposal',
      medicationCodeableConcept: medicationId,
      subject: {
        type: 'Patient',
        id,
      },
      dosageInstruction: [
        {
          doseAndRate: [
            {
              value: createMedicationFormData.doseValue,
              unit: 'mg',
            },
          ],
          text: createMedicationFormData.frequency + ' times per day',
        },
      ],
    };
    console.log(requestData);
    const { data } = await client.post<MedicationRequestResponseData>(
      '/medication-request',
      requestData
    );
    return { ...data, medicationName: createMedicationFormData.medicationName };
  };
}
