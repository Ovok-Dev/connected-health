export interface IQuestionnaireGetAllResponse {
  data: IQuestionnaireGetAllResponseData[];
  total: number;
}

export interface IQuestionnaireGetAllResponseData {
  resourceType: string;
  id: string;
  status: string;
  name: string;
  description: string;
  item: IQuestionnaireItem[];
}

export interface IQuestionnaireItem {
  linkId: string;
  type: string;
  text: string;
  repeats: boolean;
  answerOption: IAnswerOption[];
}

export interface IAnswerOption {
  valueString?: string;
  valueInteger?: number;
  valueCoding?: string;
}

export interface IQuestionnaireResponseRequestData {
  status: string;
  questionnaire: string;
  subject: {
    type: string;
    id: string;
  };
  item: IQuestionnaireResponseItem[];
}

export interface IQuestionnaireResponseItem {
  linkId: string;
  answer: IAnswerOption[];
}

export interface IQuestionnaireResponseValues {
  questionnaireId: string;
  questionId: string;
  answerText: string;
}
