import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FlightSearchScreen from '../screens/FlightSearchScreen'
import RegistrationScreen from '../screens/RegistrationScreen';
import { NavigationContainer } from '@react-navigation/native';
import TabBar from '../components/TabBar';

function FlightScreen() {
  return (
    <FlightSearchScreen />
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
        <Tab.Screen 
          name="Flight"
          component={FlightScreen}
          initialParams={{icon: 'ios-airplane-outline'}}
        />
        <Tab.Screen 
          name="Profile"
          component={RegisterScreen}
          initialParams={{icon: 'ios-person-outline'}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}