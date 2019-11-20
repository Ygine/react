import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// Reducers
import {todosReducer} from '../components/HOKS/todoBlock';

// Middleware
import logger from './middleware/logger';
import ReduxThunk from 'redux-thunk';

const middleware = [ReduxThunk, logger];
const enhancer = applyMiddleware(...middleware);

const rootReducer = combineReducers({
  // todos: todosReducer,
});

const store = createStore(rootReducer,  composeWithDevTools(enhancer));
export default store;