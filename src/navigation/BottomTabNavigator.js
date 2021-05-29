import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FlightSearchScreen from '../screens/FlightSearchScreen'
import MyProfileScreen from '../screens/MyProfileScreen';
import { NavigationContainer } from '@react-navigation/native';
import CheckinScreen from '../screens/CheckinScreen';
import MyTripsScreen from '../screens/MyTripsScreen';
import { Ionicons } from '@expo/vector-icons';

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
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Flight') {
              iconName = focused ? 'ios-airplane-sharp' : 'ios-airplane-outline';
            } else if (route.name === 'My Trips') {
              iconName = focused ? 'ios-briefcase' : 'ios-briefcase';
            } else if (route.name === 'Check-In') {
              iconName = focused ? 'ios-barcode-outline' : 'ios-barcode-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'ios-person-sharp' : 'ios-person-sharp';
            }
            return <Ionicons name={iconName} size={23} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#47143d',
          inactiveTintColor: '#d6c1b8',
        }}
      >
        <Tab.Screen name="Flight" component={FlightScreen} />
        <Tab.Screen name="My Trips" component={TripsScreen} />
        <Tab.Screen name="Check-In" component={CheckScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}