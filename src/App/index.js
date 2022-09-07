import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../components/SignIn';
import Welcome from '../components/Welcome';
import SignUp from '../components/SignUp';
import Test from '../components/Test';
import Home from '../components/Home';
import ForgotPassword from '../components/ForgotPassword';
import store from '../store';
import { Provider } from 'react-redux';
import 'moment';
import 'moment/locale/en-gb';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="Welcome"
        >
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Test" component={Test} />
          <Stack.Screen name="Sign In" component={SignIn} />
          <Stack.Screen name="Sign Up" component={SignUp} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Forgot Password" component={ForgotPassword} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
