/**
 * @author Group 9 - Aaron Reid, Joshua Couto, Kaley Wood
 * Southern Alberta Institute of Technology: CPRG-303-C
 * Assignment 3: Advanced Form Development and Validation with React Hook Form & Zod
 * Created: 03.08.2026
 */

// sign-in.tsx -> on valid submit -> router.push('/(auth)/employee')
// sign-up.tsx -> on valid submit -> router.push('/(auth)/employee')

import Employeeform from "@/components/employeeInfo"
import React from 'react'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'



export default function index() {
  return (
    <SafeAreaView style={styles.container}>
      <Employeeform/>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
