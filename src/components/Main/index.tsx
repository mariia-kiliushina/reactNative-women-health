import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Button, Text, TouchableOpacity, FlatList } from 'react-native';
import { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../Home';
import CalendarView from '../CalendarView';
import Settings from '../Settings';

type Props = {};

const Main: FC<Props> = (props) => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Settings') {
            iconName = 'settings';
          } else if (route.name === 'Calendar') {
            iconName = 'calendar';
          }
          //@ts-ignore
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Calendar" component={CalendarView} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({});

export default Main;
