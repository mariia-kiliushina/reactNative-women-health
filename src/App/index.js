import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SignIn from '../components/SignIn';
import Welcome from '../components/Welcome';
import SignUp from '../components/SignUp';
import Main from '../components/Main';
// import Home from '../components/Home';
// import CalendarView from '../components/CalendarView';
// import Settings from '../components/Settings';
import ForgotPassword from '../components/ForgotPassword';
import store from '../store';
import { Provider } from 'react-redux';
import 'moment';
import 'moment/locale/en-gb';

export default function App() {
  // const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="Main"
        >
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Sign In" component={SignIn} />
          <Stack.Screen name="Sign Up" component={SignUp} />
          <Stack.Screen name="Main" component={Main} />
          <Stack.Screen name="Forgot Password" component={ForgotPassword} />
        </Stack.Navigator>
        {/* <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'Home') {
                iconName = 'home';
              } else if (route.name === 'Settings') {
                iconName = 'settings';
              } else if (route.name === 'Calendar') {
                iconName = 'calendar';
              }
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomat o',
            tabBarInactiveTintColor: 'gray',
          })}
        >
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Calendar" component={CalendarView} />
          <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator> */}
      </NavigationContainer>
    </Provider>
  );
}
