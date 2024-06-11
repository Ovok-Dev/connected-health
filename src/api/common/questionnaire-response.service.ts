import type {
  IQuestionnaireResponseRequestData,
  IQuestionnaireResponseValues,
} from '@/types/questionnaire.interface';

import { client } from './client';

export class QuestionnaireResponseService {
  public createQuestionnaireResponse = async (
    values: IQuestionnaireResponseValues & { patientId: string }
  ) => {
    const questionnaireResponseRequestData: IQuestionnaireResponseRequestData =
      {
        questionnaire: values.questionnaireId,
        status: 'completed',
        subject: { id: values.patientId, type: 'Patient' },
        item: [
          {
            linkId: values.questionId,
            answer: [{ valueString: values.answerText }],
          },
        ],
      };
    const { data } = await client.post(
      '/questionnaire-response',
      questionnaireResponseRequestData
    );
    return data;
  };
}
