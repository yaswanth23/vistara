import React, { useRef } from 'react';
import {View, Text,StyleSheet, Animated, Dimensions} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import 'react-native-gesture-handler';
import FlightSearchScreen from '../screens/FlightSearchScreen'
import MyProfileScreen from '../screens/MyProfileScreen';
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

function getWidth() {
  let width = Dimensions.get("window").width
  width = width - 60
  return width / 5
}

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  const tabOffsetvalue = useRef(new Animated.Value(0)).current;
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color }) => {
            let iconName;
            if (route.name === 'Flights') {
              iconName = focused ? 'ios-airplane-sharp' : 'ios-airplane-sharp';
            } else if (route.name === 'My Trips') {
              iconName = focused ? 'ios-briefcase' : 'ios-briefcase';
            } else if (route.name === 'Check-In') {
              iconName = focused ? 'ios-barcode-outline' : 'ios-barcode-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'ios-person-sharp' : 'ios-person-sharp';
            }
            return <Ionicons name={iconName} size={20} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#47143d',
          inactiveTintColor: '#b3b3b3',
          labelStyle: {
            fontSize: 11
          },
          labelStyle: {
            fontSize: 12,
            fontWeight: '500'
          },
          style: {
            position: 'absolute',
            elevation: 0,
            backgroundColor: '#fff',
            borderTopRightRadius: 15,
            borderTopLeftRadius: 15,
            borderTopWidth: 0,
            height: 56,
            alignItems:'center',
            justifyContent: 'center',
            paddingTop: 8,
            paddingBottom: 10,
            ...styles.shadow
          }
        }}
      >
        <Tab.Screen 
          name="Flights"
          component={FlightScreen}
          listeners={({navigation,route}) => ({
            tabPress: e => {
              Animated.spring(tabOffsetvalue, {
                toValue: 0,
                useNativeDriver: true
              }).start();
            }
          })}
        />
        <Tab.Screen 
          name="My Trips" 
          component={TripsScreen}
          listeners={({navigation,route}) => ({
            tabPress: e => {
              Animated.spring(tabOffsetvalue, {
                toValue: getWidth() * 1.5,
                useNativeDriver: true
              }).start();
            }
          })}
        />
        <Tab.Screen 
          name="Check-In" 
          component={CheckScreen}
          listeners={({navigation,route}) => ({
            tabPress: e => {
              Animated.spring(tabOffsetvalue, {
                toValue: getWidth() * 3,
                useNativeDriver: true
              }).start();
            }
          })}
        />
        <Tab.Screen 
          name="Profile" 
          component={ProfileScreen}
          listeners={({navigation,route}) => ({
            tabPress: e => {
              Animated.spring(tabOffsetvalue, {
                toValue: getWidth() * 4.4,
                useNativeDriver: true
              }).start();
            }
          })}
        />
      </Tab.Navigator>
      <Animated.View style={{
        width: getWidth()-7,
        height: 2,
        backgroundColor: '#47143d',
        position: 'absolute',
        bottom: 54,
        left: 18,
        transform: [
          {translateX: tabOffsetvalue}
        ]
      }}>

      </Animated.View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.06,
    shadowRadius: 3.5,
    elevation: 5
  }
});
//backgroundColor: '#997588',
//backgroundColor: '#f7eee7',
//backgroundColor: '#d6c1b8',