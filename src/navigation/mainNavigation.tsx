import React from 'react';
import { Login } from '../screens/login';
import { Tabs } from './tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StateType } from '../types/State';
import { Image, StyleSheet, View } from 'react-native';

interface mainNavigationProps {
  state: StateType;
}

export const MainNavigation = ({ state }: mainNavigationProps) => {
  const Stack = createNativeStackNavigator();
  if (state.isLoading) {
    return (
      <View>
        <Image
          source={ require('../assets/gif/Loading.gif') }
          style={ styles.image }
        />
      </View>
    );
  }

  return (
    state.userToken === null ? (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={'Login'} component={ Login } />
        </Stack.Navigator>
      </NavigationContainer>
    ) : (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={'Tabs'} component={ Tabs } />
        </Stack.Navigator>
      </NavigationContainer>
    )
  );
};
const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  }
});
