import BackgroundWhite from '@/ovok-ui/background-white';
import PermissionCard from '@/ovok-ui/permission-card';

export default function Permissions() {
  return (
    <BackgroundWhite>
      <PermissionCard
        imageName="john-doe"
        practitioner="Dr. John Doe"
        specialization="Cardiologist"
        time="18/08/2023"
        initialAccessType="general"
      />
      <PermissionCard
        imageName="leah-cole"
        practitioner="Dr. Leah Cole"
        specialization="Pediatricist"
        time="18/08/2023"
        initialAccessType="read-only"
      />
      <PermissionCard
        imageName="john-doe"
        practitioner="Dr. XY"
        specialization="Ophtalmologist"
        time="18/08/2023"
        initialAccessType="full"
      />
      <PermissionCard
        imageName="leah-cole"
        practitioner="Dr. ABC"
        specialization="Nephrologist"
        time="18/08/2023"
        initialAccessType="limited"
      />
    </BackgroundWhite>
  );
}
