import React, {useEffect} from 'react';
import {Login} from './src/screens/login';
import {Tabs} from './src/navigation/tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen';
const Stack = createNativeStackNavigator();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
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
