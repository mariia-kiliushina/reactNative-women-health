//@ts-nocheck
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SignUp from 'components/SignUp';
import SignIn from 'components/SignIn';
const Tab = createBottomTabNavigator();

export default function Test() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="SignIn" component={SignIn} />
      <Tab.Screen name="SignUp" component={SignUp} />
    </Tab.Navigator>
  );
}
