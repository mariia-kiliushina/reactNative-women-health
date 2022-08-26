import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from 'components/home';
import { ProfileScreen } from 'components/profile';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LogIn" component={HomeScreen} options={{ title: 'Welcome' }} />
        <Stack.Screen name="LogOut" component={ProfileScreen} />
        <Stack.Screen name="Refresh" component={ProfileScreen} />
        <Stack.Screen name="Main" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
