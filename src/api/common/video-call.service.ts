import { Env } from '@env';
import axios from 'axios';

export class VideoCallService {
  public createVideoCall = async () => {
    try {
      const response = await axios.post(
        `${Env.EXPO_PUBLIC_API_URL}v2/video-call`,
        {},
        {
          headers: {
            Authorization: `Basic ${Env.EXPO_PUBLIC_BASIC_AUTH_TOKEN}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching video call:', error);
      throw error;
    }
  };
}
