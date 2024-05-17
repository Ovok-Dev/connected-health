import BackgroundWhite from '@/ovok-ui/background-white';
import ButtonQuestionnaires from '@/ovok-ui/button-questionnaires';

export default function Questionnaires() {
  return (
    <BackgroundWhite>
      <ButtonQuestionnaires
        title="Hypertension Experience Feedback Tool (HEFT)"
        subtitle="5 Questions"
        href="/(tabs)/(home)/questionnaire-intro"
        isNew
      />
      <ButtonQuestionnaires
        title="Treatment Satisfaction Questionnaire for Medication (TSQM)"
        subtitle="5 Questions"
      />
      <ButtonQuestionnaires
        title="The Morisky Medication Adherence Scale (MMAS)"
        subtitle="8 Gauge"
        completed
      />
    </BackgroundWhite>
  );
}
