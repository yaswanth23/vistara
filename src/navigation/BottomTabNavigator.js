import React, { useRef } from 'react';
import {View, Animated, Dimensions} from 'react-native';
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
  const tabOffsetValue = useRef(new Animated.Value(0)).current;
  return (
    <NavigationContainer>
      <Tab.Navigator tabBarOptions={{
        style: {
          backgroundColor: 'white',
          position: 'absolute',
          bottom: 0,
          height: 56,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          shadowColor: '#000',
          borderTopWidth: 0,
          shadowOpacity: 0.06,
          shadowRadius: 3.5,
          paddingBottom: 10,
          shadowOffset: {
            width: 0,
            height: 5
          },
          paddingHorizontal: 20,
        },
        activeTintColor: '#47143d',
        inactiveTintColor: '#b3b3b3',
        labelStyle: {
          fontSize: 11,
          fontWeight: '500'
        },
      }}>
        <Tab.Screen name={"Flights"} component={FlightScreen} options={{
          tabBarIcon: ({ focused }) => (
            <View style={{
              top: 4
            }}>
              <Ionicons
                name="ios-airplane-sharp"
                size={22}
                color={focused ? '#47143d' : '#b3b3b3'}
              />
            </View>
          )
        }} listeners={({ navigation, route }) => ({
          tabPress: e => {
            Animated.spring(tabOffsetValue, {
              toValue: 0,
              useNativeDriver: true
            }).start();
          }
        })}></Tab.Screen>
        <Tab.Screen name={"My Trips"} component={TripsScreen} options={{
          tabBarIcon: ({ focused }) => (
            <View style={{
              top: 4
            }}>
              <Ionicons
                name="ios-briefcase"
                size={19}
                color={focused ? '#47143d' : '#b3b3b3'}
              />
            </View>
          )
        }} listeners={({ navigation, route }) => ({
          tabPress: e => {
            Animated.spring(tabOffsetValue, {
              toValue: getWidth() * 1.35,
              useNativeDriver: true
            }).start();
          }
        })}></Tab.Screen>
        <Tab.Screen name={"Check-In"} component={CheckScreen} options={{
          tabBarIcon: ({ focused }) => (
            <View style={{
              top: 4
            }}>
              <Ionicons
                name="ios-barcode-outline"
                size={22}
                color={focused ? '#47143d' : '#b3b3b3'}
              />
            </View>
          )
        }} listeners={({ navigation, route }) => ({
          tabPress: e => {
            Animated.spring(tabOffsetValue, {
              toValue: getWidth() * 2.65,
              useNativeDriver: true
            }).start();
          }
        })}></Tab.Screen>
        <Tab.Screen name={"Profile"} component={ProfileScreen} options={{
          tabBarIcon: ({ focused }) => (
            <View style={{
              top: 4
            }}>
              <Ionicons
                name="ios-person"
                size={22}
                color={focused ? '#47143d' : '#b3b3b3'}
              />
            </View>
          )
        }} listeners={({ navigation, route }) => ({
          tabPress: e => {
            Animated.spring(tabOffsetValue, {
              toValue: getWidth() * 4,
              useNativeDriver: true
            }).start();
          }
        })}></Tab.Screen>
      </Tab.Navigator>

      <Animated.View style={{
        width: getWidth() - 10,
        height: 2,
        backgroundColor: '#47143d',
        position: 'absolute',
        bottom: 54,
        left: 35,
        borderRadius: 20,
        elevation: 8,
        transform: [
          { translateX: tabOffsetValue }
        ]
      }}>

      </Animated.View>
    </NavigationContainer>
  );
}
