import type { IQuestionnaireGetAllResponse } from '@/types/questionnaire.interface';

import { client } from './client';

export class QuestionnaireService {
  public getAllQuestionnaires =
    async (): Promise<IQuestionnaireGetAllResponse> => {
      const { data } = await client.get<IQuestionnaireGetAllResponse>(
        '/questionnaire'
      );
      console.log('data in questionnaire.service: ', data);
      return data;
    };
}
