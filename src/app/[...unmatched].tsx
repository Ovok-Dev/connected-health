import { Redirect } from 'expo-router';

export default function RedirectUnmatched() {
  return <Redirect href="/(app)/" />;
}
