export enum TYPE_ENUM {
  RESTORE_TOKEN = 'RESTORE_TOKEN',
  SIGN_IN = 'SIGN_IN',
  SIGN_OUT = 'SIGN_OUT',
}

export type RestoreTokenAction = {
  type: TYPE_ENUM.RESTORE_TOKEN,
  token: string | null,
}

export type SignInAction = {
  type: TYPE_ENUM.SIGN_IN,
  token: string | null,
}

export type SignOutAction = {
  type: TYPE_ENUM.SIGN_OUT,
  token: string | null,
}

export type LoginActions = RestoreTokenAction | SignInAction | SignOutAction
