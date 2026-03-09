# App Folder Structure
### An outline of our application folder structure.

```
cprg-303-ax03/                  ← Project Root
|
├── README.md                   ← Assignment 3 Instructions
|
├── app/
|   |   
|   ├── _layout.tsx             ← App Layout
|   ├── index.tsx               ← Immediately Routes to Sign In Screen
|   │
|   └── (auth)/
|       | 
|       ├── _layout.tsx         ← Authentication Stack Navigator
|       | 
|       ├── employee-info/
|       |   |
|       │   ├── _layout.tsx
|       │   └── index.tsx       ← Employee Info Screen
|       |   
|       ├── signin-screen/
|       │   ├── _layout.tsx
|       │   └── index.tsx       ← Sign In Screen
|       |
|       └── signup-screen/
|           ├── _layout.tsx
|           └── index.tsx       ← Sign Up Screen
|
├── components/ 
|   |
|   └── SignUpForm.tsx          ← Sign Up Form Component
|
├── constants/
|   └── theme.ts                ← Importable Styles File 
|
├── context/
|   |
|   └── AuthContext.tsx         ← Holds User Data for use Across Application
|
└── documentation/
    |
    ├── app-navigation/
    |   └── README.md           ← Outline of Expected User Navigation
    |
    ├── folder-structure/
    |   └── README.md           ← Outline of Folder Structure
    |
    └── git-commands/
        └── README.md           ← List of Git Commands for Quick Reference
```
