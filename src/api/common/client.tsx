import { Env } from '@env';
import axios from 'axios';

import { signOut } from '@/core';
import { getToken, setToken } from '@/core/auth/utils';

let isRefreshing = false;
let refreshPromise = null;

export const client = axios.create({
  baseURL: Env.EXPO_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

client.interceptors.request.use(
  (config) => {
    const accessToken = getToken()?.access;
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

async function refreshToken() {
  try {
    const response = await client.post(
      '/auth/refresh-token',
      { refresh_token: getToken()?.refresh },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const newAccessToken = response.data.access_token;
    setToken({
      access: response.data.access_token,
      refresh: response.data.refresh_token,
    });
    return newAccessToken;
  } catch (error) {
    console.error('Error refreshing token:', error);
    signOut();
    throw error;
  }
}

client.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 || error.response.status === 400) {
      try {
        if (!isRefreshing) {
          isRefreshing = true;

          refreshPromise = await refreshToken()
            .catch((refreshError) => {
              signOut();
              console.error('Error refreshing token:', refreshError);
              throw refreshError;
            })
            .finally(() => {
              isRefreshing = false;
              refreshPromise = null;
            });
          await refreshPromise;

          // Update the original request with the new access token
          originalRequest.headers.Authorization = `Bearer ${
            getToken()?.access
          }`;
          // Retry the original request with the new token
          return client(originalRequest);
        }
        return Promise.reject(error);
      } catch (refreshError) {
        console.error('Error refreshing token:', refreshError);
        signOut();
        throw refreshError;
      }
    }

    return Promise.reject(error);
  }
);
