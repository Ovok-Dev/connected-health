import BackgroundWhite from '@/ovok-ui/background-white';
import DashboardHeader from '@/ovok-ui/dashboard-header';
import SearchInput from '@/ovok-ui/search-input';
import ValuesOverview from '@/ovok-ui/values-overview';

export default function DashboardHIVMonitoring() {
  return (
    <BackgroundWhite>
      <DashboardHeader />
      <SearchInput />
      <ValuesOverview
        heartRate="92"
        bloodPressure="140/88"
        temperature="36.2"
        weight="80"
      />
    </BackgroundWhite>
  );
}
