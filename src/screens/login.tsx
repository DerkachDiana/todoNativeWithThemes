import React from 'react';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LoginContainer } from '../containers/login/login.container';

export const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../assets/images/background.png')}
        style={styles.container}>
        <LoginContainer />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
