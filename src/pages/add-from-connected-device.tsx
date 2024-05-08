import BackgroundWhite from '@/ovok-ui/background-white';
import ButtonBasic from '@/ovok-ui/button-basic';

export default function AddFromConnectedDevice() {
  return (
    <BackgroundWhite>
      <ButtonBasic
        title="BlackBox"
        iconNameLeft="black-box"
        iconNameRight="selected"
      />
      <ButtonBasic
        title="Care Kit_Cardio"
        iconNameLeft="care-kit-cardio"
        iconNameRight="select"
      />
      <ButtonBasic
        title="Apple Watch"
        iconNameLeft="apple-watch"
        iconNameRight="select"
      />
    </BackgroundWhite>
  );
}
