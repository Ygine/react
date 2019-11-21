import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import { authSignup } from './session/sags';

// Reducers
import sessionReducer from './session/sessionReducer';
import postReducer from './Posts/postsReducer';

// Middleware
// import logger from './middleware/logger';
// import createSagaMiddleware from 'redux-saga'
// const sagaMiddleware = createSagaMiddleware();
import ReduxThunk from 'redux-thunk';
const middleware = [ReduxThunk];
const enhancer = applyMiddleware(...middleware);

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

// sagaMiddleware.run(authSignup);
