import React from 'react';

import { useAuth } from '@/core';
import { useSoftKeyboardEffect } from '@/core/keyboard';
import { FocusAwareStatusBar } from '@/ui';

import { ClientId } from './credentials';
import { LoginForm } from './login-form';

import { client } from '@/api';
import axios from 'axios';
import type { LoginFormProps } from './login-form';
export const Login = () => {
  // const medplum = useMedplum();
  const signIn = useAuth.use.signIn();
  useSoftKeyboardEffect();
  // const [profile, setProfile] = useState<Patient | null>(null);

  const handleError = (error: any) => {
    // console.log(error.response.headers);
    alert(error.message);
  };
  // const authHeader = base64.encode(`${ClientId}:${ClientSecret}`);
  const startLogin: LoginFormProps['onSubmit'] = ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    client
      .post('/auth/login', {
        email,
        password,
        clientId: ClientId,
      })
      .then((response) => {
        // Handle a successful login response
        const { access_token, refresh_token } = response.data;

        axios
          .get('https://plum.minxli.tech/api/auth/me', {
            headers: {
              Authorization: `Bearer ${access_token}`,
            },
          })
          .then((profileResponse) => {
            signIn({
              access: access_token,
              refresh: refresh_token,
              profile: profileResponse.data.profile,
            });
          })
          .catch(handleError);
      })
      .catch(handleError);
  };
  return (
    <>
      <FocusAwareStatusBar />
      <LoginForm onSubmit={startLogin} />
    </>
  );
};
