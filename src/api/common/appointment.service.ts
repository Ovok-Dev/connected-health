import type {
  IGetAllAppointmentsResponse,
  IGetAllAppointmentsResponseData,
} from '@/types/appointment.interface';

import { client } from './client';

export class AppointmentService {
  public getAllAppointments = async (): Promise<
    IGetAllAppointmentsResponseData[]
  > => {
    const { data }: IGetAllAppointmentsResponse = await client.get<
      IGetAllAppointmentsResponseData[]
    >('/appointment');
    return data;
  };
}
