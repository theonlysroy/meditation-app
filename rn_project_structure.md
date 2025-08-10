# React Native Project Structure & Setup Guide

## Project Overview
This guide outlines the complete folder structure and setup process for a scalable React Native project with proper asset management, navigation, shared components, and state management.

## 1. Assets Folder Structure

### Folder Structure
```
src/
├── assets/
│   ├── images/
│   │   ├── splash/
│   │   │   ├── splash-screen.png
│   │   │   ├── splash-screen@2x.png
│   │   │   └── splash-screen@3x.png
│   │   ├── icons/
│   │   │   ├── app-icon/
│   │   │   │   ├── app-icon.png
│   │   │   │   ├── app-icon@2x.png
│   │   │   │   └── app-icon@3x.png
│   │   │   └── tab-icons/
│   │   │       ├── home.svg
│   │   │       ├── profile.svg
│   │   │       └── settings.svg
│   │   ├── illustrations/
│   │   │   ├── onboarding/
│   │   │   └── empty-states/
│   │   └── backgrounds/
│   ├── fonts/
│   │   ├── Roboto-Regular.ttf
│   │   ├── Roboto-Bold.ttf
│   │   └── index.ts
│   └── animations/
│       └── lottie/
│           ├── loading.json
│           └── success.json
```

### Todo Checklist - Assets
- [ ] Create main assets directory structure
- [ ] Set up image resolution variants (@1x, @2x, @3x)
- [ ] Install react-native-svg for SVG support
- [ ] Create asset index files for easy imports
- [ ] Configure react-native-splash-screen
- [ ] Set up Lottie animations (react-native-lottie-splash-screen)
- [ ] Create asset typing definitions
- [ ] Set up image optimization pipeline
- [ ] Configure Metro bundler for asset handling

## 2. React Navigation Setup

### Folder Structure
```
src/
├── navigation/
│   ├── navigators/
│   │   ├── AppNavigator.tsx
│   │   ├── AuthNavigator.tsx
│   │   ├── MainNavigator.tsx
│   │   ├── BottomTabNavigator.tsx
│   │   ├── StackNavigator.tsx
│   │   └── DrawerNavigator.tsx
│   ├── types/
│   │   ├── AuthStackParamList.ts
│   │   ├── MainStackParamList.ts
│   │   ├── BottomTabParamList.ts
│   │   └── index.ts
│   └── config/
│       ├── navigationTheme.ts
│       └── screenOptions.ts
├── screens/
│   ├── auth/
│   │   ├── LoginScreen/
│   │   │   ├── LoginScreen.tsx
│   │   │   ├── LoginScreen.styles.ts
│   │   │   └── index.ts
│   │   ├── RegisterScreen/
│   │   └── ForgotPasswordScreen/
│   ├── main/
│   │   ├── HomeScreen/
│   │   ├── ProfileScreen/
│   │   └── SettingsScreen/
│   └── shared/
│       ├── LoadingScreen/
│       └── ErrorScreen/
```

### Todo Checklist - Navigation
- [ ] Install @react-navigation packages (native, stack, bottom-tabs, drawer)
- [ ] Set up navigation container with proper typing
- [ ] Create root navigator with authentication flow
- [ ] Implement stack navigators for different flows
- [ ] Set up bottom tab navigator with icons
- [ ] Configure drawer navigator (if needed)
- [ ] Create TypeScript param list definitions
- [ ] Set up deep linking configuration
- [ ] Implement navigation themes (light/dark)
- [ ] Add navigation guards and route protection
- [ ] Create screen-specific folder structure
- [ ] Set up navigation utilities and helpers

## 3. Common Components Monorepo Setup

### Folder Structure
```
packages/
├── ui-components/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Button/
│   │   │   │   ├── Button.tsx
│   │   │   │   ├── Button.styles.ts
│   │   │   │   ├── Button.types.ts
│   │   │   │   ├── Button.test.tsx
│   │   │   │   └── index.ts
│   │   │   ├── Input/
│   │   │   ├── Card/
│   │   │   ├── Modal/
│   │   │   └── index.ts
│   │   ├── hooks/
│   │   │   ├── useTheme.ts
│   │   │   ├── useKeyboard.ts
│   │   │   └── index.ts
│   │   ├── utils/
│   │   │   ├── colors.ts
│   │   │   ├── spacing.ts
│   │   │   ├── typography.ts
│   │   │   └── index.ts
│   │   └── index.ts
│   ├── package.json
│   └── tsconfig.json
├── theme/
│   ├── src/
│   │   ├── colors/
│   │   │   ├── light.ts
│   │   │   ├── dark.ts
│   │   │   └── index.ts
│   │   ├── typography/
│   │   ├── spacing/
│   │   └── index.ts
│   └── package.json
└── utils/
    ├── src/
    │   ├── validation/
    │   ├── formatters/
    │   ├── constants/
    │   └── index.ts
    └── package.json
```

### Root Package.json Workspace Configuration
```json
{
  "workspaces": [
    "packages/*"
  ]
}
```

### Todo Checklist - Monorepo Components
- [ ] Initialize workspace in root package.json
- [ ] Create ui-components package
- [ ] Set up TypeScript configuration for packages
- [ ] Create theme package with design tokens
- [ ] Set up utils package for shared utilities
- [ ] Configure package.json for each workspace
- [ ] Implement component library structure
- [ ] Set up Storybook for component documentation
- [ ] Create shared hooks package
- [ ] Set up testing framework for components
- [ ] Configure build scripts for packages
- [ ] Set up package linking and imports
- [ ] Create component export index files

## 4. Redux/Zustand Store with API Layer

### Redux Toolkit Structure
```
src/
├── store/
│   ├── index.ts
│   ├── rootReducer.ts
│   ├── middleware.ts
│   └── slices/
│       ├── authSlice.ts
│       ├── userSlice.ts
│       └── appSlice.ts
├── services/
│   ├── api/
│   │   ├── baseApi.ts
│   │   ├── endpoints/
│   │   │   ├── authApi.ts
│   │   │   ├── userApi.ts
│   │   │   └── index.ts
│   │   ├── types/
│   │   │   ├── auth.types.ts
│   │   │   ├── user.types.ts
│   │   │   └── common.types.ts
│   │   └── config/
│   │       ├── axiosConfig.ts
│   │       ├── interceptors.ts
│   │       └── endpoints.ts
│   └── storage/
│       ├── secureStorage.ts
│       └── asyncStorage.ts
```

### Alternative Zustand Structure
```
src/
├── stores/
│   ├── authStore.ts
│   ├── userStore.ts
│   ├── appStore.ts
│   └── index.ts
├── services/
│   └── [same as above]
```

### Todo Checklist - State Management & API
- [ ] Choose between Redux Toolkit or Zustand
- [ ] Install required state management packages
- [ ] Set up store configuration with middleware
- [ ] Configure Redux DevTools (if using Redux)
- [ ] Create store slices/stores for different domains
- [ ] Set up Axios configuration with interceptors
- [ ] Implement API service layer with error handling
- [ ] Create TypeScript interfaces for API responses
- [ ] Set up request/response transformers
- [ ] Implement authentication token handling
- [ ] Configure API caching strategy
- [ ] Set up offline support with redux-persist/zustand-persist
- [ ] Create API error handling utilities
- [ ] Implement retry logic for failed requests
- [ ] Set up environment-specific API endpoints

## Additional Setup Tasks

### Development Tools
- [ ] Configure ESLint and Prettier
- [ ] Set up Husky for git hooks
- [ ] Configure Jest for testing
- [ ] Set up Flipper for debugging
- [ ] Install React Native Debugger
- [ ] Configure Metro bundler optimization

### Performance & Monitoring
- [ ] Set up Hermes engine
- [ ] Configure Flipper performance monitoring
- [ ] Implement error boundary components
- [ ] Set up crash reporting (Sentry/Bugsnag)
- [ ] Configure analytics tracking

### Build & Deployment
- [ ] Set up environment configurations
- [ ] Configure app signing for both platforms
- [ ] Set up CI/CD pipeline
- [ ] Configure app distribution (CodePush/AppCenter)

## File Naming Conventions

- **Components**: PascalCase (e.g., `Button.tsx`)
- **Hooks**: camelCase with "use" prefix (e.g., `useAuth.ts`)
- **Utils**: camelCase (e.g., `formatDate.ts`)
- **Types**: PascalCase with ".types" suffix (e.g., `User.types.ts`)
- **Styles**: Component name + ".styles" (e.g., `Button.styles.ts`)
- **Tests**: Component name + ".test" (e.g., `Button.test.tsx`)

## Import/Export Pattern

Each folder should have an `index.ts` file that exports all public components/functions, enabling clean imports:

```typescript
// Instead of
import Button from './components/Button/Button';

// Use
import { Button } from './components';
```

This structure provides a scalable foundation for React Native projects with proper separation of concerns, type safety, and maintainable code organization.
