/**
 * @author Group 9 - Aaron Reid, Joshua Couto, Kaley Wood
 * Southern Alberta Institute of Technology: CPRG-303-C
 * Assignment 3: Advanced Form Development and Validation with React Hook Form & Zod
 * Created: 03.09.2026
 */

import { Tabs } from "expo-router";

export default function AuthLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false}} >
      <Tabs.Screen 
      name="signin-screen" options={{
        title: "Employee form data"
        
      }}
      />
    </Tabs>
  );
}