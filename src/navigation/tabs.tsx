import React from 'react';
import { Image, SafeAreaView, StyleSheet } from 'react-native';
import { About } from '../screens/about';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Tasks } from '../screens/tasks';
import { useTranslation } from 'react-i18next';
import { Queries } from '../screens/queries';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const Tab = createMaterialBottomTabNavigator();

const client = new ApolloClient(({
  uri: 'http://10.0.2.2:5005/graphql',
  cache: new InMemoryCache()
}));

export const Tabs = () => {
  const { t } = useTranslation();
  return (
    <ApolloProvider client={client}>
      <SafeAreaView style={ styles.container }>
        <Tab.Navigator
          initialRouteName={'Home'}
          barStyle={{ backgroundColor: '#40e6cf' }}>
          <Tab.Screen
            name={ 'TaskList' }
            component={ Tasks }
            options={{
              tabBarLabel: t('translation.tab.tasks'),
              tabBarIcon: () => (
                <Image
                  source={require('../assets/icons/tasks.png')}
                  style={ styles.icons }
                />
              ),
            }}
          />
          <Tab.Screen
            name={ 'About' }
            component={ About }
            options={{
              tabBarLabel: t('translation.tab.about'),
              tabBarIcon: () => (
                <Image
                  source={ require('../assets/icons/about.png') }
                  style={ styles.icons }
                />
              ),
            }}
          />
          <Tab.Screen
            name={ 'GraphQL' }
            component={ Queries }
            options={{
              tabBarLabel: 'GraphQL',
              tabBarIcon: () => (
                <Image
                  source={ require('../assets/icons/about.png') }
                  style={ styles.icons }
                />
              )
            }}
          />
        </Tab.Navigator>
      </SafeAreaView>
    </ApolloProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
  icons: {
    width: 25,
    height: 25,
  },
});
