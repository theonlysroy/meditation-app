import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';
import AuthStack from './AuthStack';
import BottomTabs from './BottomTabs';
import { AuthProvider, useAuth } from '../context/AuthContext';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!isAuthenticated ? (
        <Stack.Screen name="Auth" component={AuthStack} />
      ) : (
        <Stack.Screen name="Main" component={BottomTabs} />
      )}
    </Stack.Navigator>
  );
};

const RootNavigator = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </AuthProvider>
  );
};

export default RootNavigator;
