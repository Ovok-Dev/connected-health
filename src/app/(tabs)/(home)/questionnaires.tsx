/* eslint-disable react/react-in-jsx-scope */
import { useNavigation } from 'expo-router';
import { useContext, useEffect } from 'react';

import { DataContext } from '@/api/common/data.context';
import BackgroundWhite from '@/ovok-ui/background-white';
import ButtonQuestionnaires from '@/ovok-ui/button-questionnaires';
import type { IDataContext } from '@/types/data.context.interface';

export default function Questionnaires() {
  const { questionnaires } = useContext(DataContext) as IDataContext;
  const navigation = useNavigation();

  const renderQuestionnaireButtons = () => {
    return (
      questionnaires.length > 0 &&
      questionnaires.map((questionnaire) => {
        return (
          <ButtonQuestionnaires
            key={questionnaire.id}
            title={
              questionnaire.name === 'heft'
                ? 'Hypertension Experience Feedback Tool (HEFT)'
                : questionnaire.name
            }
            subtitle={`${questionnaire.item.length} questions`}
            href={{
              pathname: '/(tabs)/(home)/questionnaire-intro',
              params: { questionnaireId: questionnaire.id },
            }}
            isNew={questionnaire.name === 'heft'}
          />
        );
      })
    );
  };

  useEffect(() => {
    navigation.setOptions({ title: 'Questionnaire' });
  }, [navigation]);

  return (
    <BackgroundWhite>
      {renderQuestionnaireButtons()}
      <ButtonQuestionnaires
        title="The Morisky Medication Adherence Scale (MMAS)"
        subtitle="8 Gauge"
        completed
        href={'/(tabs)/(home)/questionnaire-completed'}
      />
    </BackgroundWhite>
  );
}
