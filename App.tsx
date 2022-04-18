import React, { useEffect, createContext } from 'react';
import { Login } from './src/screens/login';
import { Tabs } from './src/navigation/tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen';

const Stack = createNativeStackNavigator();
const AuthContext = React.createContext();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  // todo separate component for navigation
  // todo create 2 navigation containers and switch between them by login logic
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={'Login'} component={Login} />
        <Stack.Screen name={'Tabs'} component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
