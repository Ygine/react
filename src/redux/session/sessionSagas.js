import axios from 'axios';
import { call, put, select, all, takeLatest } from 'redux-saga/effects';
import * as SessionActions from './sessionActions';
import { getToken } from '../session/sessionsSelectors';

const setAuthToken = token => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//  чтоб при каждом запросе не сетить токен в хедер
};


function* workerGetUserProfile(){
  try{
    const token = yield select(getToken);
    if(token){
      setAuthToken(token);
    }
    const userInfo = yield call(axios.get, `/user/profile`);
    yield put(SessionActions.userInfoSuccess(userInfo.data))
  }catch(error){
    yield put(SessionActions.userInfoError(error.message))
  }
}


function* workerAuthSignUp({payload}){
  try{
     yield call(axios.post,`/auth/register`, payload.userData);
     yield put(SessionActions.signupSuccess());
     const {email, password} = payload.userData;

    const authData = yield call(axios.post,`/auth/login`, {email, password});
    yield put(SessionActions.loginSuccess(authData.data));

    yield call(workerGetUserProfile);

  }catch(error){
    yield put(SessionActions.userInfoError(error.message))
  }
}


function* workerAuthLogin({payload}){
  try{

    const authData = yield call(axios.post, `/auth/login`, payload.userData);
    yield put(SessionActions.loginSuccess(authData.data));

    yield call(workerGetUserProfile);

  }catch(error){
    yield put(SessionActions.loginError(error.message))
  }
}


function* workerCheckExistUsername({payload}){
  try{
     yield call(axios.get,
      `/auth/checkExistUsername?username=${payload.username}`);
     yield put(SessionActions.checkExistUsernameSuccess());

  }catch(err){
    yield put(SessionActions.checkExistUsernameError());
  }
}

/*
 * WATCHERS SAGAS
 */

function* watcherGetUserProfile(){
  yield takeLatest(SessionActions.ActionType.USERINFO_REQUEST, workerGetUserProfile);
}
 function* watcherAuthLogin(){
  yield takeLatest(SessionActions.ActionType.LOGIN_REQUEST, workerAuthLogin);
}
function* watcherCheckExistUsername(){
  yield takeLatest(SessionActions.ActionType.CHECKEXISTUSERNAME_REQUEST, workerCheckExistUsername);
}
function* watcherAuthSignUp(){
  yield takeLatest(SessionActions.ActionType.SIGNUP_REQUEST, workerAuthSignUp);
}

export default function* rootSessionSaga() {
  yield all([
    watcherGetUserProfile(),
    watcherAuthLogin(),
    watcherCheckExistUsername(),
    watcherAuthSignUp()
  ])
}