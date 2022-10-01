import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from 'screens/SignIn';
import Welcome from 'screens/Welcome';
import SignUp from 'screens/SignUp';
import Main from 'screens/Main';
import ForgotPassword from 'screens/ForgotPassword';
import store from 'src/store';
import { Provider } from 'react-redux';
import 'moment';
import 'moment/locale/en-gb';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
            initialRouteName="Welcome"
          >
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="Sign In" component={SignIn} />
            <Stack.Screen name="Sign Up" component={SignUp} />
            <Stack.Screen name="Main" component={Main} />
            <Stack.Screen name="Forgot Password" component={ForgotPassword} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}
