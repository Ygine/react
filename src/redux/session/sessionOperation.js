// import {loginRequest, loginSuccess, loginError,
//         signupRequest, signupSuccess, signupError,
//         checkExistUsernameRequest, checkExistUsernameSuccess, checkExistUsernameError,
//         userInfoRequest, userInfoSuccess, userInfoError, logout} from './sessionActions';
// import * as sessionAPI from '../../services/session-api';
// import * as sessionSelectors from './sessionsSelectors';
import {logout} from './sessionActions';

export const logOut = () => dispatch => {
  dispatch(logout());
};


// export const authSignup = (credentials) => async (dispatch) => {
//   try{
//     dispatch(signupRequest());
//
//     const data = await sessionAPI.authSignup(credentials);
//     dispatch(signupSuccess(data));
//
//       try{
//         const data = await sessionAPI.authLogin(credentials);
//         dispatch(loginSuccess(data));
//
//         try{
//
//           dispatch(userInfoRequest());
//           const data = await sessionAPI.getUserProfile();
//           dispatch(userInfoSuccess(data))
//         }catch(error){
//           dispatch(userInfoError(error))
//         }
//
//       }catch(error){
//         dispatch(loginError(error))
//       }
//
//   }catch(error){
//       dispatch(signupError(error));
//   }
// };


// export const authCheckExistUsername = (credentials) => dispatch => {
//   dispatch(checkExistUsernameRequest());
//
//   sessionAPI.authCheckExistUsername(credentials).then(data => {
//     dispatch(checkExistUsernameSuccess(data));
//   }).catch(error => {
//     dispatch(checkExistUsernameError(error));
//   })
// };

// export const authLogin = (credentials) => async (dispatch) => {
//   try{
//     dispatch(loginRequest());
//
//     const data = await  sessionAPI.authLogin(credentials);
//     dispatch(loginSuccess(data));
//
//     try{
//
//       dispatch(userInfoRequest());
//       const data = await sessionAPI.getUserProfile();
//       dispatch(userInfoSuccess(data))
//     }catch(error){
//       dispatch(userInfoError(error))
//     }
//
//   }catch(error){
//     dispatch(loginError(error));
//   }
// };


// export const getUserProfile = () => (dispatch, getState) => {
//   const token = sessionSelectors.getToken(getState());
//
//   if(!token){
//     return;
//   }
//
//   const options = {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     }
//   };
//
//   dispatch(userInfoRequest());
//
//   sessionAPI.getUserProfile(options).then(data => {
//     dispatch(userInfoSuccess(data));
//   }).catch(error => {
//     dispatch(userInfoError(error));
//   })
// };

// export const authCheckToken = (credentials) => dispatch => {
//   dispatch(checkTokenRequest());
//
//   sessionAPI.authCheckToken(credentials).then(data => {
//     dispatch(checkTokenSuccess(data));
//   }).catch(error => {
//     dispatch(checkTokenError(error));
//   })
// };

