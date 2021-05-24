import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BookingInitialScreen from '../screens/BookingInitialScreen'
import RegistrationScreen from '../screens/RegistrationScreen';
import { NavigationContainer } from '@react-navigation/native';

function BookingScreen() {
  return (
    <BookingInitialScreen />
  );
}

function RegisterScreen() {
  return (
    <RegistrationScreen />
  );
}

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={(props) => <TabBar{...props} />}>
        <Tab.Screen name="Home" component={BookingScreen} />
        <Tab.Screen name="Settings" component={RegisterScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}