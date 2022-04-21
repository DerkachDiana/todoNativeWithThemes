import React, { useState } from 'react';
import { LoginComponent } from './login.component';
import { LoginType } from '../../types/Login';
import { SignInAction } from '../../redux/actions/loginActions';
import { useDispatch } from 'react-redux';
import { setState } from '../../asyncStorage/asyncStore';

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

  const setUserTokenToState = (userToken: string) => {
    setState({ isLoading: false, isSignOut: false, userToken: userToken });
    dispatch(SignInAction(MOCK_DATA_ENTRY.login));
  };

  const onLoginPress = () => {
    MOCK_DATA_ENTRY.login === loginData?.login &&
    MOCK_DATA_ENTRY.password === loginData.password
      ? setUserTokenToState(MOCK_DATA_ENTRY.login)
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
