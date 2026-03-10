/**
 * @author Group 9 - Aaron Reid, Joshua Couto, Kaley Wood
 * Southern Alberta Institute of Technology: CPRG-303-C
 * Assignment 3: Advanced Form Development and Validation with React Hook Form & Zod
 * Created: 03.09.2026
 */

import { createContext, useContext, useState, ReactNode } from 'react';

type User = {
  fullName: string;
  email: string;
  password: string;
};

type AuthContextType = {
  user: User | null;
  setUser: (user: User) => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

// --- HOW TO USE AuthContext.tsx ---
//
//  WRITING TO CONTEXT (Sign Up Screen pattern):
//
//  import { useAuth } from '@/context/AuthContext';
//
//  const { setUser } = useAuth();
//
//  setUser({ fullName: data.fullName, email: data.email, password: data.password });
//
//  READING FROM CONTEXT (Employee Info Screen pattern):
//
//  import { useAuth } from '@/context/AuthContext';
//
//  const { user } = useAuth();
//
//  User will be null if no one has signed up yet, so always check first:
//  if (!user) return null;
//
//  Then render the data directly by entering user.fullName and user.email into the desired field
//
//  ----------------------------------------
//
//  VALIDATING CREDENTIALS (Sign In Screen pattern):
//
//  import { useAuth } from '@/context/AuthContext';
//
//  const { user } = useAuth();
//
//  // Compare submitted credentials against stored user:
//  if (data.email !== user.email || data.password !== user.password) {
//     // handle invalid credentials
//   }