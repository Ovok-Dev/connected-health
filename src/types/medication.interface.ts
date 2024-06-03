export interface MedicationResponse {
  resourceType: string;
  id: string;
  text: {
    status: string;
    div: string;
  };
}

export interface ICreateMedicationData {
  text: {
    status: string;
    div: string;
  };
}

export interface CreateMedicationResponse {
  id: string;
  text: {
    status: string;
    div: string;
  };
}
