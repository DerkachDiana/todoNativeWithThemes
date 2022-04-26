import React from 'react';
import { Image, SafeAreaView, StyleSheet } from 'react-native';
import { About } from '../screens/about';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tasks } from '../screens/tasks';
import { useTranslation } from 'react-i18next';
import { Queries } from '../screens/queries';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { tasksStore } from '../mobx/store';
import { observer } from 'mobx-react';

const Tab = createBottomTabNavigator();

const client = new ApolloClient(({
  uri: 'http://10.0.2.2:5005/graphql',
  cache: new InMemoryCache()
}));

export const Tabs = observer(() => {
  const { t } = useTranslation();
  const icons = {
    tasksWhite: require('../assets/icons/tasksWhite.png'),
    aboutWhite: require('../assets/icons/aboutWhite.png'),
    graphQlWhite: require('../assets/icons/aboutWhite.png'),
    tasksBlack: require('../assets/icons/tasksBlack.png'),
    aboutBlack: require('../assets/icons/aboutBlack.png'),
    graphQlBlack: require('../assets/icons/aboutBlack.png'),
  };
  return (
    <ApolloProvider client={client}>
      <SafeAreaView style={ styles.container }>

        <Tab.Navigator
          initialRouteName={'Home'}
          screenOptions={{
            tabBarHideOnKeyboard: true,
            headerShown: false,
            tabBarStyle: tasksStore.theme.light ? LIGHT_THEME.tabBar : DARK_THEME.tabBar,
          }} >
          <Tab.Screen
            name={ 'TaskList' }
            component={ Tasks }
            options={{
              tabBarLabel: t('translation.tab.tasks'),
              tabBarIcon: () => (
                <Image
                  source={tasksStore.theme.light ? icons.tasksBlack : icons.tasksWhite}
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
                  source={ tasksStore.theme.light ? icons.aboutBlack : icons.aboutWhite }
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
                  source={ tasksStore.theme.light ? icons.graphQlBlack : icons.graphQlWhite }
                  // source={ icons.graphQlBlack }
                  style={ styles.icons }
                />
              )
            }}
          />
        </Tab.Navigator>

      </SafeAreaView>
    </ApolloProvider>
  );
});

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

const DARK_THEME = StyleSheet.create({
  tabBar: {
    backgroundColor: '#2C2C2C',
    text: 'white',
  }
});

const LIGHT_THEME = StyleSheet.create({
  tabBar: {
    backgroundColor: '#FFF',
    text: 'black',
  }
});
