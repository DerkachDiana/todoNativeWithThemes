import React, { useState } from 'react';
import { LoginComponent } from './login.component';
import { LoginType } from '../../types/Login';
import { useNavigation } from '@react-navigation/native';
import { ToHomeScreenProp } from '../../types/Navigation';
import { SignInAction } from '../../redux/actions/loginActions';
import { useDispatch } from 'react-redux';

const MOCK_DATA_ENTRY = {
  login: 'user',
  password: 'user',
};

export const LoginContainer = () => {
  const [ loginData, setLoginData ] = useState<LoginType>();
  const [ isRedBorder, setIsRedBorder ] = useState<boolean>(false);
  const dispatch = useDispatch();

  const loginHandler = (login: string) => {
    setLoginData({ password: loginData?.password, login: login });
  };

  const passwordHandler = (password: string) => {
    setLoginData({ password: password, login: loginData?.login });
  };

  const onLoginPress = () => {
    MOCK_DATA_ENTRY.login === loginData?.login &&
    MOCK_DATA_ENTRY.password === loginData.password
      ? (dispatch(SignInAction(MOCK_DATA_ENTRY.login)))
      : setIsRedBorder(true);
  };

  return (
    <LoginComponent
      loginHandler={ loginHandler }
      passwordHandler={ passwordHandler }
      onLoginPress={ onLoginPress }
      isRedBorder={ isRedBorder }
    />
  );
};
