/**
 * @author Group 9 - Aaron Reid, Joshua Couto, Kaley Wood
 * Southern Alberta Institute of Technology: CPRG-303-C
 * Assignment 3: Advanced Form Development and Validation with React Hook Form & Zod
 * Created: 03.08.2026
 */

import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { colors, forms } from '@/constants/theme';

const signUpSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Email must be valid'),
  password: z.string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Must contain at least one uppercase letter')
    .regex(/[0-9]/, 'Must contain at least one number')
    .regex(/[^a-zA-Z0-9]/, 'Must contain at least one special character'),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Passwords do not match',
  path: ['confirmPassword'],
});

export type SignUpFormData = z.infer<typeof signUpSchema>;

interface SignUpFormProps {
  onSubmit: (data: SignUpFormData) => void;
}

function SignUpForm( {onSubmit}: SignUpFormProps ) {
  const { control, handleSubmit, formState: { errors } } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>

      <Controller
        control={control}
        name="fullName"
        render={({ field: { onChange, value } }) => (
          <View>
            <TextInput
              style={[styles.input, errors.fullName && styles.inputError]}
              placeholder='Full Name'
              placeholderTextColor={colors.inputPlaceholder}
              onChangeText={onChange}
              value={value}
            />
            {errors.fullName && (
              <Text style={styles.errorText}>{errors.fullName.message}</Text>
            )}
          </View>
        )}
      />

      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, value } }) => (
          <View>
            <TextInput
              style={[styles.input, errors.email && styles.inputError]}
              placeholder="Email Address"
              placeholderTextColor={colors.inputPlaceholder}
              keyboardType='email-address'
              autoCapitalize='none'
              onChangeText={onChange}
              value={value}
            />
            {errors.email && (
              <Text style={styles.errorText}>{errors.email.message}</Text>
            )}
          </View>
        )}
      />

      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, value } }) => (
          <View>
            <TextInput
              style={[styles.input, errors.password && styles.inputError]}
              secureTextEntry
              placeholder="Password"
              placeholderTextColor={colors.inputPlaceholder}
              autoCapitalize='none'
              onChangeText={onChange}
              value={value}
            />
            {errors.password && (
              <Text style={styles.errorText}>{errors.password.message}</Text>
            )}
          </View>
        )}
      />

      <Controller
        control={control}
        name="confirmPassword"
        render={({ field: { onChange, value } }) => (
          <View>
            <TextInput
              style={[styles.input, errors.confirmPassword && styles.inputError]}
              secureTextEntry
              placeholder="Confirm Password"
              placeholderTextColor={colors.inputPlaceholder}
              autoCapitalize='none'
              onChangeText={onChange}
              value={value}
            />
            {errors.confirmPassword && (
              <Text style={styles.errorText}>{errors.confirmPassword.message}</Text>
            )}
          </View>
        )}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit(onSubmit)}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:  forms.container,
  title:      forms.title,
  input:      forms.input,
  inputError: forms.inputError,
  errorText:  forms.errorText,
  button:     forms.submitButton,
  buttonText: forms.submitButtonText,

});

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 24, justifyContent: 'center' },
//   title: { fontSize: 28, fontWeight: 'bold', marginBottom: 24 },
//   input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 12, marginBottom: 4 },
//   inputError: { borderColor: 'red' },
//   errorText: { color: 'red', fontSize: 12, marginBottom: 12 },
//   button: { backgroundColor: '#6C63FF', padding: 16, borderRadius: 8, alignItems: 'center', marginTop: 8 },
//   buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
// });

export default SignUpForm;