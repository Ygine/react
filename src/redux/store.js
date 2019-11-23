import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


// Reducers
import sessionReducer from './session/sessionReducer';
import postReducer from './Posts/postsReducer';

//Sags
import rootPostsSaga from './Posts/postSagas'
import rootSessionSaga from './session/sessionSagas'

// Middleware
// import logger from './middleware/logger';
import ReduxThunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'
const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware, ReduxThunk];
const enhancer = applyMiddleware(...middleware);

//Persist
const sessionPersistConfig = {
  key: 'session',
  storage,
  whitelist: ['token'],
};

const rootReducer = combineReducers({
  session: persistReducer(sessionPersistConfig, sessionReducer),
  posts: postReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(enhancer));
export const persistor = persistStore(store);


sagaMiddleware.run(rootSessionSaga);
sagaMiddleware.run(rootPostsSaga);

