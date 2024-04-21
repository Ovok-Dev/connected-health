import { Button, ControlledInput, Text, TouchableOpacity, View } from '@/ui';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const schema = z.object({
  email: z
    .string({
      required_error: 'Email is required',
    })
    .email('Invalid email format'),
  password: z
    .string({
      required_error: 'Password is required',
    })
    .min(6, 'Password must be at least 6 characters'),
});

export type FormType = z.infer<typeof schema>;
export type LoginFormProps = {
  onSubmit?: SubmitHandler<FormType>;
};

export const LoginForm = ({ onSubmit = () => {} }: LoginFormProps) => {
  const { handleSubmit, control } = useForm<FormType>({
    resolver: zodResolver(schema),
  });
  const navigation = useNavigation();
  const handleRegisterPress = () => {
    // Navigate to the login screen when the "Log In" link is pressed
    navigation.navigate('Register'); // Replace 'Login' with the actual screen name
  };
  return (
    <View style={styles.container} className="flex-1 justify-center p-4">
      <View>
        <Text
          style={styles.text}
          testID="form-title"
          variant="h1"
          className="pb-6 text-center"
        >
          Log In
        </Text>

        <ControlledInput
          testID="email-input"
          control={control}
          name="email"
          label="Email"
        />
        <ControlledInput
          testID="password-input"
          control={control}
          name="password"
          label="Password"
          placeholder="***"
          secureTextEntry={true}
        />
        <Button
          testID="login-button"
          label="Login"
          onPress={handleSubmit(onSubmit)}
          variant="primary"
        />

        <Text className="text-center" style={styles.text}>
          {'By continuing, you agree to Immerza '}
          <Text style={styles.link}>Terms & Conditions</Text> and{' '}
          <Text style={styles.link}>Privacy Policy</Text>
        </Text>
      </View>
      <View style={styles.bottomContainer}>
        <Text className="text-center" style={styles.text}>
          {'Dont have an account '}
          <TouchableOpacity onPress={handleRegisterPress}>
            <Text style={styles.link}>Register</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#523483',
  },
  text: {
    color: 'white',
  },
  link: {
    color: '#CAB9FF',
  },
  bottomContainer: {
    padding: 16, // Add padding to the bottom
    justifyContent: 'flex-end', // Align to the bottom
    alignItems: 'center', // Center horizontally
  },
});
