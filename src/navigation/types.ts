import { NavigationProp } from '@react-navigation/native';

export type AuthStackParamList = {
  Welcome: undefined;
  Login: undefined;
  SignUp: undefined;
};

export type MainStackParamList = {
  Home: undefined;
  Profile: undefined;
  Settings: undefined;
};

export type RootStackParamList = {
  Auth: undefined;
  Main: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Meditate: undefined;
  Sleep: undefined;
  Profile: undefined;
};

export type NavigationProps = NavigationProp<RootStackParamList>;
