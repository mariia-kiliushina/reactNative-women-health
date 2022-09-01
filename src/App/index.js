import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import Home from '../components/Home';
import ForgotPassword from '../components/ForgotPassword';
import store from '../store';
import { Provider } from 'react-redux';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SignIn">
          <Stack.Screen name="Sign In" component={SignIn} />
          <Stack.Screen name="Sign Up" component={SignUp} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Forgot Password" component={ForgotPassword} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
