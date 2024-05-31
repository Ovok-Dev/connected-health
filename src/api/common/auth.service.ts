import type {
  AuthResponse,
  ChangePassword,
  IAuthService,
  Login,
  PasswordRecovery,
  RefreshTokenBody,
  Register,
  ResetPasswordResponse,
  UpdateProfileResponse,
} from '@/types/auth.interface';
import type { Gender } from '@/types/common-ovok.types';

import { client } from './client';

export class AuthService implements IAuthService {
  public register = async (user: Register): Promise<AuthResponse> => {
    const { data } = await client.post('/auth/signup', user);
    return data;
  };

  public login = async (login: Login): Promise<AuthResponse> => {
    const { data } = await client.post('/auth/login', login);
    return data;
  };

  public changePassword = async (
    changePassword: ChangePassword
  ): Promise<AuthResponse> => {
    const { data } = await client.post('/auth/change-password', changePassword);
    return data;
  };

  public refreshAuthToken = async (
    refreshAuthToken: RefreshTokenBody
  ): Promise<AuthResponse> => {
    const { data } = await client.post('/auth/refresh-token', refreshAuthToken);
    return data;
  };

  public getUserInfo = async (): Promise<any> => {
    const { data } = await client.get('/auth/me', {});
    return data;
  };

  public resetPassword = async (
    email: string
  ): Promise<ResetPasswordResponse> => {
    const { data } = await client.post('/auth/reset-password', {
      email,
      sendDefaultEmail: false,
      recaptchaToken: 'fwefwew',
      projectId: '9a7e59cd-deac-4afd-b363-9fb9b90a3e97',
    });
    return data;
  };

  public updateProfile = async (
    id: string,
    req: {
      name?: {
        firstName?: string[];
        lastName?: string;
      };
      birthDate?: string;
      gender?: Gender;
      communicationLanguage?: string[];
    }
  ): Promise<UpdateProfileResponse> => {
    console.log('requestData: ', req);
    const { data } = await client.put(`/patient/${id}`, req);
    console.log('responsedata: ', data);
    return data;
  };

  public deleteAccount = async (deleteAllUserData: boolean): Promise<any> => {
    const { data } = await client.delete('/auth/deregister-user', {
      data: { deleteAllUserData },
    });

    return data;
  };

  public passwordRecoveryWithDeeplink = async ({
    changeRequestId,
    secretId,
    password,
  }: PasswordRecovery): Promise<ResetPasswordResponse> => {
    const { data } = await client.post('/auth/set-password', {
      id: changeRequestId,
      secret: secretId,
      password,
    });
    return data;
  };

  public getPatient = async (id: string): Promise<any> => {
    const { data } = await client.get(`/patient/${id}`);
    return data;
  };
}
