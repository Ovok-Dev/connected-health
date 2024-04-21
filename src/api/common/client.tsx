import { signOut } from '@/core';
import { getToken, setToken } from '@/core/auth/utils';
import { ClientId } from '@/screens/login/credentials';
import axios from 'axios';

let isRefreshing = false; // Flag to track if a token refresh is in progress
let refreshPromise = null; // Promise to hold the token refresh operation

export const client = axios.create({
  baseURL: 'https://api.plum.minxli.tech/backend/',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add an interceptor to set the access token before each request
client.interceptors.request.use(
  (config) => {
    const accessToken = getToken()?.access; // Replace with your actual method to retrieve the access token

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const medplumInstance = axios.create({
  baseURL: 'https://plum.minxli.tech/api/fhir/R4',
  headers: {
    'Content-Type': 'application/json',
  },
  params: {
    _count: 20,
    _fields:
      'id,_lastUpdated,subject,code,status,performer,note,method,valueInteger',
    _offset: 0,
    _sort: '-_lastUpdated',
  },
});

medplumInstance.interceptors.request.use(
  (config) => {
    const accessToken = getToken()?.access; // Replace with your actual method to retrieve the access token

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
    const response = await medplumInstance.post('/oauth2/token', null, {
      params: {
        grant_type: 'refresh_token',
        client_id: ClientId,
        refresh_token: getToken()?.refresh, // Replace with the actual refresh token
      },
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    const newAccessToken = response.data.access_token;
    setToken({
      access: response.data.access_token,
      refresh: response.data.refresh_token,
      profile: getToken()?.profile,
    });
    // Handle the new access token (e.g., store it)
    // Optionally, you can also update the refresh token if it's provided in the response
    return newAccessToken;
  } catch (error) {
    console.error('Error refreshing token:', error);
    signOut();
    throw error;
  }
}

// Add a response interceptor to handle token refresh
medplumInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Check if the error response indicates an expired token (e.g., 401 Unauthorized)
    if (error.response.status === 401) {
      try {
        // Refresh the access token
        if (!isRefreshing) {
          isRefreshing = true;

          refreshPromise = await refreshToken()
            .catch((refreshError) => {
              // Handle the refresh error, possibly logging the user out if refresh fails
              console.error('Error refreshing token:', refreshError);
              // You can also throw an error or take other appropriate action
              throw refreshError;
            })
            .finally(() => {
              // Clear the flag and the refresh promise
              isRefreshing = false;
              refreshPromise = null;
            });
          await refreshPromise;

          // Update the original request with the new access token
          originalRequest.headers.Authorization = `Bearer ${
            getToken()?.access
          }`;

          // Retry the original request with the new token
          return medplumInstance(originalRequest);
        }
        return Promise.reject(error);
      } catch (refreshError) {
        // Handle the refresh error, possibly logging the user out if refresh fails
        console.error('Error refreshing token:', refreshError);
        // You can also throw an error or take other appropriate action
        signOut();
        throw refreshError;
      }
    }

    return Promise.reject(error);
  }
);
