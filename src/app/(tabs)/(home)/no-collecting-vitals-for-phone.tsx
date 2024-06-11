import QuestionnaireCompletionMessage from '@/ovok-ui/questionnaire-completion-message';

export default function NoCollectingVitalsFromPhone() {
  return (
    <QuestionnaireCompletionMessage>
      Your phone is not suitable for collecting vitals.
    </QuestionnaireCompletionMessage>
  );
}
