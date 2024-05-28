import { Redirect } from 'expo-router';

export default function RedirectUnmatched() {
  //@ts-ignore
  return <Redirect href="/(app)/" />;
}
