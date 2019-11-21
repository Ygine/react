import {loginRequest, loginSuccess, loginError,
        signupRequest, signupSuccess, signupError,
        checkExistUsernameRequest, checkExistUsernameSuccess, checkExistUsernameError,
        userInfoRequest, userInfoSuccess, userInfoError} from './sessionActions';
import * as sessionAPI from '../../services/session-api';
import * as sessionSelectors from './sessionsSelectors';

export const authSignup = (credentials) => async (dispatch, getState) => {
  try{
    dispatch(signupRequest());

    const data = await sessionAPI.authSignup(credentials);
    dispatch(signupSuccess(data));

      try{
        const data = await sessionAPI.authLogin(credentials);
        dispatch(loginSuccess(data));

        try{
          const token = sessionSelectors.getToken(getState());

          if(!token){
            return;
          }

          const options = {
            headers: {
              Authorization: `Bearer ${token}`,
            }
          };

          dispatch(userInfoRequest());
          const data = await sessionAPI.getUserProfile(options);
          dispatch(userInfoSuccess(data))
        }catch(error){
          dispatch(userInfoError(error))
        }

      }catch(error){
        dispatch(loginError(error))
      }

  }catch(error){
      dispatch(signupError(error));
  }
};

export const authLogin = (credentials) => async (dispatch, getState) => {
  try{
    dispatch(loginRequest());

    const data = await  sessionAPI.authLogin(credentials);
    dispatch(loginSuccess(data));

    try{
      const token = sessionSelectors.getToken(getState());

      if(!token){
        return;
      }

      const options = {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      };

      dispatch(userInfoRequest());
      const data = await sessionAPI.getUserProfile(options);
      dispatch(userInfoSuccess(data))
    }catch(error){
      dispatch(userInfoError(error))
    }

  }catch(error){
    dispatch(loginError(error));
  }
};

export const authCheckExistUsername = (credentials) => dispatch => {
  dispatch(checkExistUsernameRequest());

  sessionAPI.authCheckExistUsername(credentials).then(data => {
    dispatch(checkExistUsernameSuccess(data));
  }).catch(error => {
    dispatch(checkExistUsernameError(error));
  })
};

export const getUserProfile = () => (dispatch, getState) => {
  const token = sessionSelectors.getToken(getState());

  if(!token){
    return;
  }

  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  };

  dispatch(userInfoRequest());

  sessionAPI.getUserProfile(options).then(data => {
    dispatch(userInfoSuccess(data));
  }).catch(error => {
    dispatch(userInfoError(error));
  })
};

// export const authCheckToken = (credentials) => dispatch => {
//   dispatch(checkTokenRequest());
//
//   sessionAPI.authCheckToken(credentials).then(data => {
//     dispatch(checkTokenSuccess(data));
//   }).catch(error => {
//     dispatch(checkTokenError(error));
//   })
// };

