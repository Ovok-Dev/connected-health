export interface IGetAllCarePlansResponse {
  data: IGetAllCarePlansResponseData[];
  total: number;
}

export interface IGetAllCarePlansResponseData {
  id: string;
  status: string;
  subject: {
    type: string;
    id: string;
  };
  period: {
    start: string;
    end: string;
  };
  activity: IActivity[];
}

export interface IActivity {
  reference: {
    type: string;
    id: string;
  };
}
