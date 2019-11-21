export const ActionType = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_ERROR: 'LOGIN_ERROR',

  SIGNUP_REQUEST: 'SIGNUP_REQUEST',
  SIGNUP_SUCCESS: 'SIGNUP_SUCCESS',
  SIGNUP_ERROR: 'SIGNUP_ERROR',

  CHECKEXISTUSERNAME_REQUEST: 'CHECKEXISTUSERNAME_REQUEST',
  CHECKEXISTUSERNAME_SUCCESS: 'SCHECKEXISTUSERNAME_SUCCESS',
  CHECKEXISTUSERNAME_ERROR: 'SCHECKEXISTUSERNAME_ERROR',

  CHECKTOKEN_REQUEST: 'CHECKTOKEN_REQUEST',
  CHECKTOKEN_SUCCESS: 'SCHECKTOKEN_SUCCESS',
  CHECKTOKEN_ERROR: 'SCHECKTOKEN_ERROR',

  USERINFO_REQUEST: 'USERINFO_REQUEST',
  USERINFO_SUCCESS: 'USERINFO_SUCCESS',
  USERINFO_ERROR: 'USERINFO_ERROR',

  LOGOUT: 'LOGOUT',

};

export const loginRequest = () => ({
  type: ActionType.LOGIN_REQUEST,
});

export const loginSuccess = (response) => ({
  type: ActionType.LOGIN_SUCCESS,
  payload: {response}
});

export const loginError = (error) => ({
  type: ActionType.LOGIN_ERROR,
  payload: {error}
});

export const signupRequest = () => ({
  type: ActionType.SIGNUP_REQUEST,
});

export const signupSuccess = (response) => ({
  type: ActionType.SIGNUP_SUCCESS,
  payload: {
    response
  }
});

export const signupError = (error) => ({
  type: ActionType.SIGNUP_ERROR,
  payload: {error}
});

export const checkExistUsernameRequest = () => ({
  type: ActionType.CHECKEXISTUSERNAME_REQUEST,
});

export const checkExistUsernameSuccess = (response) => ({
  type: ActionType.CHECKEXISTUSERNAME_SUCCESS,
  payload: {
    response
  }
});

export const checkExistUsernameError = (error) => ({
  type: ActionType.CHECKEXISTUSERNAME_ERROR,
  payload: {error}
});

export const checkTokenRequest = () => ({
  type: ActionType.CHECKTOKEN_REQUEST,
});

export const checkTokenSuccess = (response) => ({
  type: ActionType.CHECKTOKEN_SUCCESS,
  payload: {
    response
  }
});

export const checkTokenError = (error) => ({
  type: ActionType.CHECKTOKEN_ERROR,
  payload: {error}
});

export const userInfoRequest = () => ({
  type: ActionType.USERINFO_REQUEST,
});

export const userInfoSuccess = (response) => ({
  type: ActionType.USERINFO_SUCCESS,
  payload: {
    response
  }
});

export const userInfoError = (error) => ({
  type: ActionType.USERINFO_ERROR,
  payload: {error}
});

export const logout = () => ({
  type: ActionType.LOGOUT
});