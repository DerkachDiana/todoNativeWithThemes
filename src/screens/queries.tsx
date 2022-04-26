import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { GET_ALL_USERS } from '../services/graphQL/client/query/user';
import { useQuery } from '@apollo/client';
import { tasksStore } from '../mobx/store';
import { CustomizedButton } from '../components/customizedButton';
import { observer } from 'mobx-react';

type User = {
  username: string,
  age: Number
}
export const Queries = observer(() => {
  const { data, loading, error } = useQuery(GET_ALL_USERS);
  const [ users, setUsers ] = useState<User[]>([]);
  useEffect(() => {
    if (!loading) {
      // setUsers(data.getAllUsers);
    }
  }, [ data ]);
  return (
    <View style={ [ styles.container, { backgroundColor: tasksStore.theme?.backgroundColor } ] }>
      <View>
        <FlatList data={users} renderItem={({ item }) => (
          <Text>{item.username} {item.age}</Text>
        )}
        />
        <CustomizedButton
          text={'Light theme'}
          stylesProps={styles.button}
          onPressFunction={ () => {
            tasksStore.changeThemeKey('LIGHT');
            tasksStore.changeTheme();
          } }
        />
        <CustomizedButton
          text={'Dark theme'}
          stylesProps={styles.button}
          onPressFunction={ () => {
            tasksStore.changeThemeKey('DARK');
            tasksStore.changeTheme();
          } }
        />
        <CustomizedButton
          text={'Yellow theme'}
          stylesProps={styles.button}
          onPressFunction={ () => {
            tasksStore.changeThemeKey('YELLOW');
            tasksStore.changeTheme();
          } }
        />
      </View>
    </View>
  );
});
const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginBottom: 10,
    height: '100%'
  },
  input: {
    backgroundColor: 'white',
  },
  button: {
    marginBottom: 10,
    padding: 15,
    text: 'black',
  }
});

const DARK_THEME = StyleSheet.create({
  container: {
    backgroundColor: '#1C1C1C',
  },
});

const LIGHT_THEME = StyleSheet.create({
  container: {
    backgroundColor: '#F1F1F1',
  }
});
