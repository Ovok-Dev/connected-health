export interface MedicationRequestResponse {
  data: MedicationRequestResponseData[];
  total: number;
}

export interface MedicationRequestResponseData {
  resourceType: string;
  id: string;
  status: string;
  intent: string;
  medicationCodeableConcept: string;
  subject: {
    type: string;
    id: string;
  };
  dosageInstruction: IDosageInstruction[];
}

export interface IDosageInstruction {
  doseAndRate: {
    value: string;
    unit: string;
  }[];
  text: string;
}

export interface IMedicationValues {
  medicationName: string;
  dose: string;
  instruction: string;
}

export interface ICreateMedicationRequestData {
  status: string;
  intent: string;
  subject: {
    type: string;
    id: string;
  };
  medicationCodeableConcept: string;
  dosageInstruction: IDosageInstruction[];
}

export interface ICreateMedicationFormData {
  medicationName: string;
  doseValue: string;
  frequency: string;
}
