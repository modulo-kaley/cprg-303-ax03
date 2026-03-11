/**
 * @author Group 9 - Aaron Reid, Joshua Couto, Kaley Wood
 * Southern Alberta Institute of Technology: CPRG-303-C
 * Assignment 3: Advanced Form Development and Validation with React Hook Form & Zod
 * Created: 03.10.2026
 */

import { forms } from '@/constants/theme'
import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

export default function EmployeeSuccess() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Employee Info Submitted. Thank you!</Text>
        <Text style={styles.message}>Your information has been submitted successfully.</Text>


        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    ...forms.title,
    textAlign: 'center',
    marginBottom: 8,
  },
  message: {
    color: '#555',
    textAlign: 'center',
    marginBottom: 24,
  },
})
