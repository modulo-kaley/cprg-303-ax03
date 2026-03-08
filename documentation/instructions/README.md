# Assignment: Advanced Form Development and Validation with React Hook Form & Zod (Expo)

## Assignment Overview
This assignment requires students to design and implement professional-quality forms in a mobile application using React Native with Expo, React Hook Form for form state management, and Zod for schema-based validation. Working in groups of three, students will create multiple real-world forms and demonstrate strong validation logic, user experience design, and collaborative development practices.

## Project Instructions
### 1. Project Setup
- Create a new Expo project using the TypeScript template: npx create-expo-app@latest <project-name>
- Replace <project-name> with a meaningful project name.
- Organize your folder structure clearly and follow best practices.
- Install required libraries:
  - react-hook-form
  - zod
  - @hookform/resolvers (to connect Zod to React Hook Form)

## 2. Employee Information Form
- Create an Employee Information Form with at least FIVE (5) input fields.
- Use React Hook Form to manage form state.
- Use Zod to validate all fields (schema validation).
- Include:
  - format validation (example: email, phone, postal code, etc.)
  - required fields
  - min/max length validation
- Display clear validation messages and prevent submission until valid.
- Use appropriate validation mode (ex: validation on submit, or on change/blur for better UX).

## 3. Authentication Forms
Create two authentication-style forms:

### A) Sign-In Form
- Fields: email, password
- Apply Zod validation rules (valid email format, required fields, password rules)

### B) Sign-Up Form
- Fields: full name, email, password, confirm password
- Apply Zod validation rules including:
- password minimum length
- password strength rules (optional but encouraged)
- confirm password must match password
- Display appropriate error messages and disable submission when invalid.

## 4. Navigation & Screen Structure
- Implement separate screens for each form.
- Use Stack or Tab Navigation appropriately.
- Navigation between forms must be smooth and intuitive.

## 5. Styling & User Experience
- Apply consistent and professional styling across all forms.
- Include:
  - input focus styling
  - error styling (text + input border/background changes)
  - button state feedback (disabled/enabled styling)
- Add icons where appropriate to enhance usability.