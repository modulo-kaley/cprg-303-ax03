/**
 * @author Group 9 - Aaron Reid, Joshua Couto, Kaley Wood
 * Southern Alberta Institute of Technology: CPRG-303-C
 * Assignment 3: Advanced Form Development and Validation with React Hook Form & Zod
 * Created: 03.09.2026
 */

import SignUpForm from "@/components/SignUpForm";
import { useAuth } from "@/context/AuthContext";

import { SafeAreaView, View, Text, StyleSheet } from 'react-native'
import { colors, spacing, text, radius, forms } from '@/constants/theme';
import { router } from 'expo-router';

export default function SignUpScreen() {
  const { setUser } = useAuth();

  return (
    <SafeAreaView style={styles.container}>
      <SignUpForm 
        onSubmit={(data) => {
          setUser({ fullName: data.fullName, email: data.email, password: data.password });
          router.push('/(auth)/signin-screen');
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
        container: forms.container,        
        input:     forms.input,
        label:     forms.label,
        error:     forms.errorText,
        button:    forms.submitButton,
        btnText:   forms.submitButtonText,
      });