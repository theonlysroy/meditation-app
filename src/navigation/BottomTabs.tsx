import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabParamList } from './types';
import { Button, SafeAreaView } from 'react-native';
import { useAuth } from '@/context/AuthContext';

const Tab = createBottomTabNavigator<BottomTabParamList>();

// Placeholder components - replace with actual screens
const HomeScreen = () => null;
const MeditateScreen = () => null;
const SleepScreen = () => null;
const ProfileScreen = () => {
  const { signOut } = useAuth()
  return (
    <SafeAreaView style={{flex: 1, padding: 24, alignItems: "center"}}>
      <Button title='Logout' onPress={() => signOut()}/>
    </SafeAreaView>
  )
};

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
        },
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Meditate" component={MeditateScreen} />
      <Tab.Screen name="Sleep" component={SleepScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabs;
