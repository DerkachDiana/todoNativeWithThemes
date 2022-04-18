import React, { useState } from 'react';
import { LoginComponent } from './login.component';
import { LoginType } from '../../types/Login';
import { useNavigation } from '@react-navigation/native';

const MOCK_DATA_ENTRY = {
  login: 'user',
  password: 'user',
};

export const LoginContainer = () => {
  // todo create typistaion for navigation
  const navigation = useNavigation();
  const [ loginData, setLoginData ] = useState<LoginType>();
  // boolean states name starts with is
  const [ redBorder, setRedBorder ] = useState<boolean>(false);

  const loginHandler = (login: string) => {
    setLoginData({ password: loginData?.password, login: login });
  };

  const passwordHandler = (password: string) => {
    setLoginData({ password: password, login: loginData?.login });
  };

  // rename
  const navigateToTab = () => {
    navigation.navigate('Tabs', { name: 'Tabs' });
  };

  const onLoginPress = () => {
    MOCK_DATA_ENTRY.login === loginData?.login &&
    MOCK_DATA_ENTRY.password === loginData.password
      ? navigateToTab()
      : setRedBorder(true);
  };

  return (
    <LoginComponent
      loginHandler={ loginHandler }
      passwordHandler={ passwordHandler }
      onLoginPress={ onLoginPress }
      redBorder={ redBorder }
    />
  );
};
