import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import 'moment';
import store from 'src/store';
import 'moment/locale/en-gb';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ScreenNavigation } from 'src/navigation/stack';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <ScreenNavigation />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}
