# App Folder Structure
### An outline of our application folder structure.

```
app/
├── _layout.tsx          ← Root layout
├── index.tsx            ← immediately routes to Onboarding Screen
├── onboarding.tsx       ← Sign In / Sign Up screen (starting point)
│
└── (auth)/
    ├── _layout.tsx      ← Stack navigator
    ├── sign-in.tsx      ← Sign In form
    ├── sign-up.tsx      ← Sign Up form
    └── employee-info.tsx     ← Employee info form (reached from either path)
```