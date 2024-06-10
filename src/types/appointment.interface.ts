export interface IGetAllAppointmentsResponse {
  data: IGetAllAppointmentsResponseData[];
  total?: number;
}

export interface IGetAllAppointmentsResponseData {
  status: string;
  participant: Participant[];
  description: string;
  startDate: string;
}

export interface Participant {
  status: string;
  actor: {
    type: string;
    id: string;
    display: string;
  };
}
