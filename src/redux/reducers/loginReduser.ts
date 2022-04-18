import { LoginActions } from '../actionTypes/actionTypes';

type loginReducerType = {
  isLoading: boolean,
  isSignOut: boolean,
  userToken: string | null,
}

const initialState: loginReducerType = {
  isLoading: true,
  isSignOut: false,
  userToken: null,
};

export default function loginReducer(state = initialState, action: LoginActions): loginReducerType {
  switch (action.type) {
  case 'RESTORE_TOKEN':
    return {
      ...state,
      userToken: action.token,
      isLoading: false,
    };
  case 'SIGN_IN':
    return {
      ...state,
      isSignOut: false,
      userToken: action.token,
    };
  case 'SIGN_OUT':
    return {
      ...state,
      isSignOut: true,
      userToken: null,
    };
  default:
    return state;
  }
};
