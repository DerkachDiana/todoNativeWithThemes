import React from 'react';
import { Image, StyleSheet, TextInput, View } from 'react-native';

interface LoginInputProps {
  image: string;
  textHandler: (text: string) => void;
  redBorder: boolean;
  isPassword: boolean;
}
export const LoginInput = ({
  image,
  textHandler,
  redBorder,
  isPassword,
}: LoginInputProps) => {
  const images = {
    user: require('../../../assets/icons/user.png'),
    lock: require('../../../assets/icons/lock.png'),
  };

  return (
    <View
      style={
        redBorder ? [ styles.container, styles.redBorder ] : styles.container
      }>
      <Image
        source={image === 'Username' ? images.user : images.lock}
        style={styles.userIcon}
      />
      <TextInput
        style={styles.input}
        placeholder={image}
        onChangeText={text => textHandler(text)}
        secureTextEntry={isPassword ? true : false}
      />
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
  redBorder: {
    borderWidth: 1,
    borderColor: 'red',
  },
});
