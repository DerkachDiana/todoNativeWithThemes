import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {About} from '../screens/about';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {Tasks} from '../screens/tasks';

const Tab = createMaterialBottomTabNavigator();

export const Tabs = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Tab.Navigator
        initialRouteName={'Home'}
        barStyle={{backgroundColor: '#40e6cf'}}>
        <Tab.Screen name={'TaskList'} component={Tasks} />
        <Tab.Screen name={'About'} component={About} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
});
