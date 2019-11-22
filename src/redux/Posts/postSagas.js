import axios from 'axios';
import { call, put, takeEvery, select, all, takeLatest } from 'redux-saga/effects';
import { getToken } from '../session/sessionsSelectors';
 import * as postsAPI from '../../services/posts-api';
 import * as PostActions from './postActions';

const setAuthToken = token => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//  чтоб при каждом запросе не сетить токен в хедер
};

function* fetchPostsSaga(){
  try{
    const token = yield select(getToken);
    if(token){
      setAuthToken(token);
    }
    const response = yield call(axios.get, `/posts`, );
    yield put(PostActions.fetchPostsSuccess(response.data.data))
  }catch(error){
    yield put(PostActions.fetchPostsError(error));
  }
}

function* fetchDeletePostSaga({payload}){
  try{
    yield put(PostActions.deletePostStart());

    const response = yield postsAPI.deletePost(payload.id);
    yield put(PostActions.deletePostSuccess(response.data))
  }catch(error){
    yield put(PostActions.deletePosError(error));
  }
}

function* watcherSaga(){
  yield takeEvery('FETCH_POSTS_START', fetchPostsSaga);
}

function* watcherDeleteSaga(){
  yield takeLatest(PostActions.ActionType.DELETE_POST_SUCCESS, fetchDeletePostSaga);
}


export default function* rootPostsSaga() {
  yield all([
    watcherSaga(),
    watcherDeleteSaga()
  ])
}

