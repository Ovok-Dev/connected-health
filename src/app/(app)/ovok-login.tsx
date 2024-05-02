import { Env } from '@env';
import { zodResolver } from '@hookform/resolvers/zod';
import { LinearGradient } from 'expo-linear-gradient';
import { Link, router } from 'expo-router';
import { Controller, useForm } from 'react-hook-form';
import { Dimensions, Pressable, StatusBar, Text, View } from 'react-native';
import { z } from 'zod';

import { AuthService } from '@/api/common/auth.service';
import { signIn } from '@/core';
import BackgroundCircles from '@/ovok-ui/background-circles';
import { Input } from '@/ui';

export default function OvokLogin() {
  const { height } = Dimensions.get('window');

  const loginSchema = z.object({
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
    resolver: zodResolver(loginSchema),
  });
  const onSubmit = (data: any) => {
    const authservice = new AuthService();
    authservice
      .login({
        ...data,
        clientId: Env.CLIENT_ID,
      })
      .then((data) => {
        signIn({ access: data.access_token, refresh: data.refresh_token });
        router.navigate('settings');
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <BackgroundCircles>
      <View
        className="flex-1 justify-end"
        style={{
          height: StatusBar.currentHeight
            ? height + StatusBar.currentHeight
            : height,
        }}
      >
        <View
          className="rounded-[20px_20px_0_0] bg-[white]"
          style={{ height: 500 }}
        >
          <View className="mx-12 flex-1">
            <View className="mt-9">
              <Text className="text-[28px] font-bold leading-[1.8] text-[rgb(52,54,114)]">
                Login
              </Text>
              <Text className="leading-[1.8] text-[rgb(29,29,29)]">
                Please enter your email and your password.
              </Text>
            </View>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  error={errors.email && (errors.email?.message as string)}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  className="mt-6 w-full rounded-xl border border-[rgb(82-84-144)] p-4"
                  placeholder="Enter your email"
                  keyboardType="email-address"
                  autoCorrect={false}
                  autoCapitalize="none"
                />
              )}
              name="email"
            />

            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  error={
                    errors.password && (errors.password?.message as string)
                  }
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  className="mt-3 w-full rounded-xl border border-[rgb(82-84-144)] p-4"
                  placeholder="Enter your password"
                  keyboardType="visible-password"
                  autoCorrect={false}
                  autoCapitalize="none"
                />
              )}
              name="password"
            />

            <Pressable
              onPress={handleSubmit(onSubmit)}
              className="my-6 h-[60px] overflow-hidden rounded-xl"
            >
              <LinearGradient
                colors={['rgb(82, 83, 146)', 'rgb(238, 185, 51)']}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
                className="flex-1 flex-row items-center justify-center rounded-xl py-4"
              >
                <Text className="text-[18px] font-medium tracking-[0.3px] text-[white]">
                  Login
                </Text>
              </LinearGradient>
            </Pressable>
            <View className="flex-1 justify-end">
              <View className="mb-12">
                <Text className="text-center leading-[1.8] text-[rgba(29,29,29,0.6)]">
                  Don't have an account?
                </Text>
                <Link
                  className="text-center font-medium leading-[1.8] text-[rgb(52,54,114)] underline"
                  href="/get-started"
                >
                  Sign up
                </Link>
              </View>
            </View>
          </View>
        </View>
      </View>
    </BackgroundCircles>
  );
}
