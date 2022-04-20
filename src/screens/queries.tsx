import React, { useEffect, useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import { GET_ALL_USERS } from '../services/graphQL/client/query/user';
import { useQuery } from '@apollo/client';

type User = {
  username: string,
  age: Number
}
export const Queries = () => {
  const { data, loading, error } = useQuery(GET_ALL_USERS);
  const [ users, setUsers ] = useState<User[]>([]);
  useEffect(() => {
    if (!loading) {
      setUsers(data.getAllUsers);
    }
  }, [ data ]);
  return (
    <View style={ styles.container }>
      <View>
        <FlatList data={users} renderItem={({ item }) => (
          <Text>{item.username} {item.age}</Text>
        )}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginBottom: 10
  },
  input: {
    backgroundColor: 'white',
  },
  button: {
    marginBottom: 10
  }
});
