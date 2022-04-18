import { combineReducers } from '@reduxjs/toolkit';
import loginReducer from './loginReduser';

export const rootReducer = combineReducers({
  loginReducer: loginReducer
});
