import { WebView } from 'react-native-webview';

import { VideoCallService } from '@/api/common/video-call.service';

const videoCallService = new VideoCallService();
let videoCallData: any;
let videoLink: string;
videoCallService.createVideoCall().then((data) => {
  videoCallData = data;
  videoLink = videoCallData.participants?.[0]?.callUrl;
  console.log('videoCallData: ', videoCallData);
  console.log('videoLink: ', videoLink);
});

export default function VideoCall() {
  return (
    videoLink && (
      <WebView
        source={{ uri: videoLink }}
        className="flex-1"
        geolocationEnabled={true}
        mediaPlaybackRequiresUserAction={false}
        javaScriptEnabled={true}
        startInLoadingState={true}
        scalesPageToFit={true}
      />
    )
  );
}
