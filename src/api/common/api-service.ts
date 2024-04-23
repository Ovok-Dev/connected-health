import { client } from './client';

export class ApiService {
  static async fetchProfile(): Promise<any> {
    try {
      const response = await client.get('/auth/me');
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
