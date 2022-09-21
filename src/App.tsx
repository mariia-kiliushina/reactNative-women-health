import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from './components/SignIn';
import Welcome from './components/Welcome';
import SignUp from './components/SignUp';
import Main from './components/Main';
import ForgotPassword from './components/ForgotPassword';
import store from './store';
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
