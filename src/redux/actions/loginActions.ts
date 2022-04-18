import { TYPE_ENUM } from '../actionTypes/actionTypes';

export const RestoreTokenAction = (token: string | null) => {
  return {
    type: TYPE_ENUM.RESTORE_TOKEN,
    token
  };
};

export const SignInAction = (token: string) => {
  return {
    type: TYPE_ENUM.SIGN_IN,
    token
  };
};

export const SignOutAction = () => {
  return {
    type: TYPE_ENUM.SIGN_OUT
  };
};
