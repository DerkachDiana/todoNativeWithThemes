import React from 'react';
import {LoginComponent} from './login.component';

export const LoginContainer = ({navigation}: any) => {
  const navigationFunction = () => {
    navigation.navigate('Tabs', {name: 'Tabs'});
  };
  return <LoginComponent navigationFunction={navigationFunction} />;
};
