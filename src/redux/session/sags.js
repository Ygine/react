import { put, call, takeEvery } from 'redux-saga/effects'
import * as sessionAPI from '../../services/session-api';
import * as Actions from './sessionActions';

export function* authSignup() {
  try {

    const user = yield call(sessionAPI.authSignup, Actions.signupRequest);
    yield put(Actions.signupSuccess(user));
  } catch (e) {
    yield put(Actions.signupError());
  }
}

