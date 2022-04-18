import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import { MainNavigation } from '../navigation/mainNavigation';
import { RestoreTokenAction } from '../redux/actions/loginActions';
import { appStateSelector } from '../redux/selectors/selectors';

export const Start = () => {
  const appState = useSelector(appStateSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    SplashScreen.hide();
    // we should get it from database, but now set it manually
    dispatch( RestoreTokenAction(null) );
  }, []);

  return (
    <MainNavigation state={appState}/>
  );
};
