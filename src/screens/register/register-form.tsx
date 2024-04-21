import {
  Button,
  ControlledInput,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from '@/ui';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { StyleSheet } from 'react-native';
import * as z from 'zod';
const schema = z.object({
  firstName: z
    .string({
      required_error: 'First name is required',
    })
    .min(2, 'First name must be at least 2 characters'),

  lastName: z
    .string({
      required_error: 'Last name is required',
    })
    .min(2, 'First name must be at least 2 characters'),
  email: z
    .string({
      required_error: 'Email is required',
    })
    .email('Invalid email format'),
  password: z
    .string({
      required_error: 'Password is required',
    })
    .min(8, 'Password must be at least 8 characters'),
});

export type FormType = z.infer<typeof schema>;
export type RegisterFormProps = {
  onSubmit?: SubmitHandler<FormType>;
};

export const RegisterForm = ({ onSubmit = () => {} }: RegisterFormProps) => {
  const { handleSubmit, control } = useForm<FormType>({
    resolver: zodResolver(schema),
  });
  const navigation = useNavigation();
  const handleLoginPress = () => {
    // Navigate to the login screen when the "Log In" link is pressed
    navigation.navigate('Login'); // Replace 'Login' with the actual screen name
  };
  return (
    <View style={styles.container} className="flex-1 justify-end p-4">
      <ScrollView className="pt-24">
        <View>
          <Text
            style={styles.text}
            testID="form-title"
            variant="h1"
            className="pb-6 text-center"
          >
            Register
          </Text>

          <ControlledInput
            testID="firstName-input"
            control={control}
            name="firstName"
            label="First Name"
          />
          <ControlledInput
            testID="lastName-input"
            control={control}
            name="lastName"
            label="Last Name"
          />
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
            {'Already have an account '}
            <TouchableOpacity onPress={handleLoginPress}>
              <Text style={styles.link}>Login</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </ScrollView>
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
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'flex-end', // Align to the bottom
    padding: 16, // Add padding to the bottom
  },
  bottomContainer: {
    padding: 16, // Add padding to the bottom
    justifyContent: 'flex-end', // Align to the bottom
    alignItems: 'center', // Center horizontally
  },
});
