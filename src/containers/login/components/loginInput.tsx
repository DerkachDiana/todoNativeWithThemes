import React from 'react';
import {Image, StyleSheet, TextInput, View} from 'react-native';

interface LoginInputProps {
  image: string;
}
export const LoginInput = ({image}: LoginInputProps) => {
  const images = {
    user: require('../../../assets/icons/user.png'),
    lock: require('../../../assets/icons/lock.png'),
  };
  return (
    <View style={styles.container}>
      <Image
        source={image === 'Username' ? images.user : images.lock}
        style={styles.userIcon}
      />
      <TextInput style={styles.input} placeholder={image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  userIcon: {
    width: 20,
    height: 20,
  },
  input: {
    width: '80%',
    marginLeft: 4,
  },
});
