import { useState } from 'react';
import { WebView } from 'react-native-webview';

import { VideoCallService } from '@/api/common/video-call.service';

export default function VideoCall() {
  const [videoLink, setVideoLink] = useState<string>('');

  const videoCallService = new VideoCallService();
  videoCallService
    .createVideoCall()
    .then((data) => {
      setVideoLink(data.participants?.[0]?.callUrl);
    })
    .catch((error) => console.log(error));

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
