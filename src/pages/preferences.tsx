import BackgroundWhite from '@/ovok-ui/background-white';
import ButtonBasic from '@/ovok-ui/button-basic';

export default function Preferences() {
  return (
    <BackgroundWhite>
      <ButtonBasic
        title="Dark Mode"
        iconNameLeft="moon"
        iconNameRight="switch-off"
        bold={false}
      />
      <ButtonBasic
        title="Font Size"
        iconNameLeft="font-size"
        iconNameRight="arrow-right"
        bold={false}
      />
      <ButtonBasic
        title="Language"
        iconNameLeft="globe"
        iconNameRight="arrow-right"
        bold={false}
      />
    </BackgroundWhite>
  );
}
