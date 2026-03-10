/**
 * @author Group 9 - Aaron Reid, Joshua Couto, Kaley Wood
 * Southern Alberta Institute of Technology: CPRG-303-C
 * Assignment 3: Advanced Form Development and Validation with React Hook Form & Zod
 * Created: 03.10.2026
 */

import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Alert } from 'react-native';
import { router } from 'expo-router';

import SignInForm from '@/components/SignInForm';
import { useAuth } from '@/context/AuthContext';
import { forms } from '@/constants/theme';

export default function SignInScreen() {
  const { user } = useAuth();

  return (
    <SafeAreaView style={styles.container}>
      <SignInForm
        onSubmit={(data) => {
          // No account created yet — prompt sign up
          if (!user) {
            Alert.alert('No Account Found', 'Please sign up first.');
            return;
          }

          // Validate credentials against stored user from AuthContext
          if (data.email !== user.email || data.password !== user.password) {
            Alert.alert('Invalid Credentials', 'Email or password is incorrect.');
            return;
          }

          // Credentials match — navigate to Employee Info
          router.push('/(auth)/employee-info');
        }}
        onSignUpPress={() => router.push('/(auth)/signup-screen')}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: forms.container,
});
