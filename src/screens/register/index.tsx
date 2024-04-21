import React from 'react';

import { useAuth } from '@/core';
import { useSoftKeyboardEffect } from '@/core/keyboard';
import { FocusAwareStatusBar } from '@/ui';

import { ClientId, ProjectId } from './credentials';
import { RegisterForm } from './register-form';

import { client } from '@/api';
import axios from 'axios';
import type { RegisterFormProps } from './register-form';
export const Register = () => {
  // const medplum = useMedplum();
  const signIn = useAuth.use.signIn();
  useSoftKeyboardEffect();
  // const [profile, setProfile] = useState<Patient | null>(null);

  const handleError = (error: any) => {
    // console.log(error.response.headers);

    alert(error.message);
  };
  // const authHeader = base64.encode(`${ClientId}:${ClientSecret}`);
  const startRegister: RegisterFormProps['onSubmit'] = ({
    email,
    password,
    firstName,
    lastName,
  }: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
  }) => {
    client
      .post('/auth/signup', {
        firstName,
        lastName,
        email,
        password,
        clientId: ClientId,
        projectId: ProjectId,
      })
      .then((response) => {
        // Handle a successful Register response
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
      <RegisterForm onSubmit={startRegister} />
    </>
  );
};
