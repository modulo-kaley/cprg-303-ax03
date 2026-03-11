/**
 * @author Group 9 - Aaron Reid, Joshua Couto, Kaley Wood
 * Southern Alberta Institute of Technology: CPRG-303-C
 * Assignment 3: Advanced Form Development and Validation with React Hook Form & Zod
 * Created: 03.08.2026
 */

// sign-in.tsx -> on valid submit -> router.push('/(auth)/employee')
// sign-up.tsx -> on valid submit -> router.push('/(auth)/employee')

import { forms } from '@/constants/theme'
import { useAuth } from '@/context/AuthContext'
import { zodResolver } from '@hookform/resolvers/zod'
import { router } from 'expo-router'
import React, { useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, } from 'react-native'

import { z } from "zod"

const employeeSchema = z.object({
    fullName: z
        .string()
        .trim()
        .min(1, "First name must be filled" ),
    email: z
        .string()
        .trim()
        .email("Invalid email address"),
    address: z
        .string()
        .trim()
        .min(1, "last name must be filled"),
    postalCode: z
        .string()
        .trim()
        .regex(
            /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/,
            'Enter a valid Canadian postal code'),
    phone: z
        .string()
        .refine(
            (val) => val.replace(/\D/g, "")
            .length >=  10,
        )
})

type EmployeeFormData = z.infer<typeof employeeSchema>

export default function EmployeeInfo() {

    const { user } = useAuth();
const  {
    control,
    handleSubmit,
    formState: {errors, isValid},
    reset,
}= useForm<EmployeeFormData>({
    resolver: zodResolver(employeeSchema),
    mode: 'onBlur',
    defaultValues: {
        fullName: "",
        email: "",
        address: "",
        postalCode: "",
        phone: ""
    }
});

useEffect(()=>{
if (user){
    reset({
        fullName: user.fullName,
        email: user.email,
        address: "",
        postalCode: "",
        phone: ""
    })
}
},[])

const onSubmit = (data: EmployeeFormData) => {
  console.log(data)
  router.push('/(auth)/employee-success')

}
  return (
    <ScrollView contentContainerStyle={styles.container}> 
        <Text style={styles.title}>Employee Information Form</Text>

        <Controller
        control={control}
        name="fullName"
        render={({ field: {onChange, onBlur, value} }) => (
            <View>
                <TextInput
                style = {[styles.input, errors.fullName && styles.inputError]}
                placeholder="Full Name"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
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
        render={({ field: {onChange, onBlur, value} }) => (
            <View>
                <TextInput
                style = {[styles.input, errors.email && styles.inputError]}
                placeholder="email"
                value={value}
                onChangeText={onChange}
                keyboardType='email-address'
                autoCapitalize='none'
                onBlur={onBlur}
                />
                {errors.email && (
                    <Text style={styles.errorText}>{errors.email.message}</Text>
                )}
            </View>
        )}
    />  

    <Controller
        control={control}
        name="phone"
        render={({ field: {onChange, onBlur, value} }) => (
            <View>
                <TextInput
                style = {[styles.input, errors.phone && styles.inputError]}
                placeholder="phone"
                value={value}
                onChangeText={onChange}
                keyboardType='phone-pad'
                onBlur={onBlur}
                />
                {errors.phone && (
                    <Text style={styles.errorText}>{errors.phone.message}</Text>
                )}
            </View>
        )}
    />  

<Controller
        control={control}
        name="postalCode"
        render={({ field: {onChange, onBlur, value} }) => (
            <View>
                <TextInput
                style = {[styles.input, errors.postalCode && styles.inputError]}
                placeholder="postalCode"
                value={value}
                onChangeText={onChange}
                keyboardType='default'
                onBlur={onBlur}
                />
                {errors.postalCode && (
                    <Text style={styles.errorText}>{errors.postalCode.message}</Text>
                )}
            </View>
        )}
    />  
    <Controller
        control={control}
        name="address"
        render={({ field: {onChange, onBlur, value} }) => (
            <View>
                <TextInput
                style = {[styles.input, errors.address && styles.inputError]}
                placeholder="address"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                />
                {errors.address && (
                    <Text style={styles.errorText}>{errors.address.message}</Text>
                )}
            </View>
        )}
    />  
    <TouchableOpacity 
    style={[styles.button, !isValid && styles.buttonDisabled]}
    onPress={handleSubmit(onSubmit)}
    disabled={!isValid}
  >
    <Text style={styles.buttonText}>Submit</Text>
    </TouchableOpacity>

    </ScrollView>
  )
}
const styles = StyleSheet.create({
    container: forms.container,
    title: forms.title,
    input: forms.input,
    inputError: forms.inputError,
    button: forms.submitButton,
    buttonDisabled: forms.disabledButton,
    buttonText: forms.submitButtonText,
    errorText: forms.errorText,
});
