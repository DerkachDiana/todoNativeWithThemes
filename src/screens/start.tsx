import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import { MainNavigation } from '../navigation/mainNavigation';
import { RestoreTokenAction } from '../redux/actions/loginActions';
import { appStateSelector } from '../redux/selectors/selectors';
import { getState } from '../asyncStorage/asyncStore';

export const Start = () => {
  const appState = useSelector(appStateSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    SplashScreen.hide();
    getState().then((state) => dispatch( RestoreTokenAction(state.userToken)));
  }, []);

  return (
    <MainNavigation state={appState}/>
  );
};
