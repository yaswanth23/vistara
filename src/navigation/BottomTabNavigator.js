import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FlightSearchScreen from '../screens/FlightSearchScreen'
import MyProfileScreen from '../screens/MyProfileScreen';
import { NavigationContainer } from '@react-navigation/native';
import TabBar from '../components/TabBar';
import CheckinScreen from '../screens/CheckinScreen';
import MyTripsScreen from '../screens/MyTripsScreen';

function FlightScreen() {
  return (
    <FlightSearchScreen />
  );
}

function TripsScreen() {
  return (
    <MyTripsScreen />
  );
}

function CheckScreen() {
  return (
    <CheckinScreen />
  );
}
function ProfileScreen() {
  return (
    <MyProfileScreen />
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
          initialParams={{icon: 'ios-airplane-sharp'}}
        />
        <Tab.Screen 
          name="My Trips"
          component={TripsScreen}
          initialParams={{icon: 'ios-briefcase'}}
        />
        <Tab.Screen 
          name="Check-In"
          component={CheckScreen}
          initialParams={{icon: 'ios-barcode-outline'}}
        />
        <Tab.Screen 
          name="Profile"
          component={ProfileScreen}
          initialParams={{icon: 'ios-person-sharp'}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}