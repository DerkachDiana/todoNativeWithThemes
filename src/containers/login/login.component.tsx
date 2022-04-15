import React from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';
import {LoginInput} from './components/loginInput';
import {CustomizedButton} from '../../components/customizedButton';

interface LoginComponentProps {
  navigationFunction: () => void;
}

export const LoginComponent = ({navigationFunction}: LoginComponentProps) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.userPicture}
        source={require('../../assets/images/user.jpg')}
        resizeMode={'cover'}
      />
      <Text style={styles.title}>Sign in</Text>
      <LoginInput image={'Username'} />
      <LoginInput image={'Password'} />
      <CustomizedButton
        onPressFunction={() => navigationFunction()}
        text={'LOGIN'}
        stylesProps={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
    paddingVertical: 70,
  },
  userPicture: {
    width: 130,
    height: 130,
    borderRadius: 70,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontFamily: 'PT Sans',
    marginBottom: 20,
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    width: '60%',
    backgroundColor: '#40e6cf',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    display: 'flex',
    textAlign: 'center',
  },
});
