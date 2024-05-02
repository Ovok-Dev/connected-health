import type { RegisterResourceTypes } from './auth.types';

export interface IAuthService {
  register: (body: Register) => Promise<AuthResponse>;
  login: (login: Login) => Promise<AuthResponse>;
  changePassword: (changePassword: ChangePassword) => Promise<AuthResponse>;
  refreshAuthToken: (
    refreshAuthToken: RefreshTokenBody
  ) => Promise<AuthResponse>;
  getUserInfo: () => Promise<any>;
}

export interface Register {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  projectId: string;
  resourceType: RegisterResourceTypes;
  clientId?: string;
  organizationId?: string;
  sendDefaultEmail: boolean;
}

export interface AuthResponse {
  access_token: string;
  refresh_token: string;
  expires_in: number;
}

export interface Login {
  email: string;
  password: string;
  clientId: string;
}

export interface RefreshTokenBody {
  refresh_token: string;
}

export interface ChangePassword {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export interface ResetPassword {
  email: string;
}

export interface ResetPasswordResponse {
  resourceType: string;
  id: string;
  issue: Issue[];
  extension: Extension[];
}

export interface Issue {
  severity: string;
  code: string;
  details: Details;
}

export interface Details {
  text: string;
}

export interface Extension {
  url: string;
  extension: Extension2[];
}

export interface Extension2 {
  url: string;
  valueUuid: string;
}

export interface UpdateProfileResponse {
  id: string;
  name: Name[];
  telecom: Telecom[];
  communicationLanguage: string[];
}

export interface Name {
  firstName: string[];
  lastName: string;
}
export interface Telecom {
  system: string;
  use: string;
  value: string;
}
export interface PasswordRecovery {
  changeRequestId: string;
  secretId: string;
  password: string;
}
