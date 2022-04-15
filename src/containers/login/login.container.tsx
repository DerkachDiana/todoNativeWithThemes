import React, { useState } from 'react';
import { LoginComponent } from './login.component';
import { LoginType } from '../../types/Login';

const MOCK_DATA_ENTRY = {
  login: 'user',
  password: 'user',
};

export const LoginContainer = ({ navigation }: any) => {
  const [ loginData, setLoginData ] = useState<LoginType>();
  const [ redBorder, setRedBorder ] = useState<boolean>(false);

  const loginHandler = (login: string) => {
    setLoginData({ password: loginData?.password as string, login: login });
  };

  const passwordHandler = (password: string) => {
    setLoginData({ password: password, login: loginData?.login as string });
  };

  const navigationFunction = () => {
    navigation.navigate('Tabs', { name: 'Tabs' });
  };

  const onLoginPress = () => {
    MOCK_DATA_ENTRY.login === loginData?.login &&
    MOCK_DATA_ENTRY.password === loginData.password
      ? navigationFunction()
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
