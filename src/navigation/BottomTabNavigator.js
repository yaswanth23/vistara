import React, { useRef, useState, useEffect } from 'react';
import {View, Animated, Dimensions} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import 'react-native-gesture-handler';

import FlightSearchScreen from '../screens/FlightSearchScreen'
import MyProfileScreen from '../screens/MyProfileScreen';
import CheckinScreen from '../screens/CheckinScreen';
import MyTripsScreen from '../screens/MyTripsScreen';
import ODpairComponent from '../components/ODpairComponent';
import FltSearchScreen from '../screens/FltSearchScreen';
import PopularComponent from '../components/PopularComponent';
import Dubai from '../countryScreens/Dubai';
import Japan from '../countryScreens/Japan';
import London from '../countryScreens/London';
import Maldives from '../countryScreens/Maldives';
import Singapore from '../countryScreens/Singapore';

const FlightStack = createStackNavigator();

function FlightStackScreen({navigation}) {
  return (
    <FlightStack.Navigator 
      screenOptions={{
        headerShown: false
    }}>
      <FlightStack.Screen name="FlightPage" component={FlightScreen}/>
      <FlightStack.Screen name="ODpair" component={OdpairScreen}/>
      <FlightStack.Screen name="FltSearch" component={FltScreen}/>
      <FlightStack.Screen name="PopPage" component={PopScreen}/>
      <FlightStack.Screen name="DubScreen" component={DubaiScreen}/>
      <FlightStack.Screen name="JapScreen" component={JapanScreen}/>
      <FlightStack.Screen name="LonScreen" component={LondonScreen}/>
      <FlightStack.Screen name="MalScreen" component={MaldivesScreen}/>
      <FlightStack.Screen name="SinScreen" component={SingaporeScreen}/>
    </FlightStack.Navigator>
  );
}

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

function OdpairScreen() {
  return (
    <ODpairComponent />
  );
}

function FltScreen() {
  return(
    <FltSearchScreen />
  );
}

function PopScreen() {
  return(
    <PopularComponent />
  );
}

function DubaiScreen(){
  return(
    <Dubai />
  );
}

function JapanScreen(){
  return(
    <Japan />
  );
}

function LondonScreen(){
  return(
    <London />
  );
}

function MaldivesScreen(){
  return(
    <Maldives />
  );
}

function SingaporeScreen(){
  return(
    <Singapore />
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
  const [opa, setOpa] = useState(1);
  console.log("--opa---"+opa);
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
        <Tab.Screen name={"Flights"} component={FlightStackScreen} options={({route}) => ({
          tabBarVisible: ((route) => {
            const routeName = getFocusedRouteNameFromRoute(route) ?? ""
            if (routeName === "ODpair" || routeName === "FltSearch" || routeName === "SinScreen" || routeName === "LonScreen" ||
                routeName === "DubScreen" || routeName === "MalScreen" || routeName === "JapScreen") {
                return false
            }
            return true
        })(route),
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
        })}
        listeners={({ navigation, route }) => ({
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
        opacity: opa,
        elevation: 8,
        transform: [
          { translateX: tabOffsetValue }
        ]
      }}>

      </Animated.View>
    </NavigationContainer>
  );
}
