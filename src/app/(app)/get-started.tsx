import { Env } from '@env';
import { zodResolver } from '@hookform/resolvers/zod';
import { router } from 'expo-router';
import { Link } from 'expo-router';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { ActivityIndicator, StatusBar, Text, View } from 'react-native';
import { z } from 'zod';

import { AuthService } from '@/api/common/auth.service';
import { signIn } from '@/core';
import BackgroundCircles from '@/ovok-ui/background-circles';
import ButtonWhite from '@/ovok-ui/button-white';
import { Input } from '@/ui';

export default function GetStarted() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const registerSchema = z.object({
    firstName: z
      .string({
        required_error: 'First name is required',
      })
      .min(2, 'At least 2 characters'),
    lastName: z
      .string({
        required_error: 'Last name is required',
      })
      .min(2, 'At least 2 characters'),
    email: z
      .string({
        required_error: 'Email is required',
      })
      .email(),
    password: z
      .string({
        required_error: 'Password is required',
      })
      .min(8, 'Password must be at least 8 characters'),
  });

  const {
    control,
    handleSubmit,

    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: any) => {
    const authService = new AuthService();
    setIsLoading(true);
    authService
      .register({
        ...data,
        projectId: Env.EXPO_PUBLIC_PROJECT_ID,
        resourceType: 'Patient',
        clientId: Env.EXPO_PUBLIC_CLIENT_ID,
        sendDefaultEmail: false,
      })
      .then((data) => {
        signIn({ access: data.access_token, refresh: data.refresh_token });
        setIsLoading(false);
        router.navigate('/(tabs)/(home)/');
      })
      .catch((error) => {
        setIsLoading(false);
        alert(error.message);
      });
  };

  return (
    <BackgroundCircles>
      <View
        className="mx-9"
        style={{
          marginTop: StatusBar.currentHeight
            ? 24 + StatusBar.currentHeight
            : 24,
        }}
      >
        <View className="mb-9">
          <Text className="mb-3 font-jost text-[28px] font-bold leading-[1.8] text-[white]">
            Get Started!
          </Text>
          <Text className="font-jost leading-[1.8] text-[white]">
            Getting started is just a tap away. Input your email and a password
            and we'll guide you forward.
          </Text>
        </View>
        <View className="mb-3 w-full">
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                error={
                  errors.firstName && (errors.firstName?.message as string)
                }
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="First Name"
                keyboardType="default"
                autoCorrect={false}
                className="rounded-xl border border-[rgba(255,255,255,0.3)] bg-[rgba(255,255,255,0.06)] py-4 pl-6 text-[white]"
              />
            )}
            name="firstName"
          />
        </View>
        <View className="mb-3 w-full">
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                error={errors.lastName && (errors.lastName?.message as string)}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Last Name"
                keyboardType="default"
                autoCorrect={false}
                className="rounded-xl border border-[rgba(255,255,255,0.3)] bg-[rgba(255,255,255,0.06)] py-4 pl-6 text-[white]"
              />
            )}
            name="lastName"
          />
        </View>
        <View className="mb-3 w-full">
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                error={errors.email && (errors.email?.message as string)}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                className="rounded-xl border border-[rgba(255,255,255,0.3)] bg-[rgba(255,255,255,0.06)] py-4 pl-6 text-[white]"
              />
            )}
            name="email"
          />
        </View>
        <View className="w-full">
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                error={errors.password && (errors.password?.message as string)}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Password"
                keyboardType="visible-password"
                autoCapitalize="none"
                autoCorrect={false}
                className="rounded-xl border border-[rgba(255,255,255,0.3)] bg-[rgba(255,255,255,0.06)] py-4 pl-6 text-[white]"
              />
            )}
            name="password"
          />
        </View>
        <ButtonWhite onPress={handleSubmit(onSubmit)} disabled={isLoading}>
          Continue
        </ButtonWhite>
        {isLoading && <ActivityIndicator size="large" color="white" />}
        <View className="items-center">
          <Text className="text-white">Already have an account?</Text>
          <Link
            href="/(app)/ovok-login"
            className="mt-1 font-medium text-white underline"
          >
            Login
          </Link>
        </View>
      </View>
    </BackgroundCircles>
  );
}
