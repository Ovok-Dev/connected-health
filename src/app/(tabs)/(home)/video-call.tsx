import { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { WebView } from 'react-native-webview';

import { VideoCallService } from '@/api/common/video-call.service';

export default function VideoCall() {
  const [videoLink, setVideoLink] = useState<string>('');

  useEffect(() => {
    const videoCallService = new VideoCallService();
    videoCallService
      .createVideoCall()
      .then((data) => {
        setVideoLink(data.participants?.[0]?.callUrl);
      })
      .catch((error) => console.log(error));
  }, []);

  return !videoLink ? (
    <View className="flex-1 items-center justify-center">
      <ActivityIndicator size="small" color="grey" />
    </View>
  ) : (
    <WebView
      source={{ uri: videoLink }}
      className="flex-1"
      geolocationEnabled={true}
      mediaPlaybackRequiresUserAction={false}
      javaScriptEnabled={true}
      startInLoadingState={true}
      scalesPageToFit={true}
    />
  );
}
