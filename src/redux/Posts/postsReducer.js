import { combineReducers } from 'redux';
import { ActionType } from './postActions';

const itemsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ActionType.FETCH_POSTS_SUCCESS:
      return payload.posts;

    case ActionType.DELETE_POST_SUCCESS:
      return state.filter(item => item._id !== payload.id);

    case ActionType.ADD_POST_SUCCESS:
      return [...state, payload.post];

    case ActionType.FETCH_POSTS_ERROR:
      return state;

    default:
      return state;
  }
};

const loadReducer = (state = false, { type, payload }) => {
  switch (type) {
    case ActionType.FETCH_POSTS_START:
    case ActionType.DELETE_POST_START:
    case ActionType.ADD_POST_START:
      return true;
    case ActionType.FETCH_POSTS_SUCCESS:
    case ActionType.FETCH_POSTS_ERROR:
    case ActionType.DELETE_POST_SUCCESS:
    case ActionType.DELETE_POST_ERROR:
    case ActionType.ADD_POST_SUCCESS:
    case ActionType.ADD_POST_ERROR:
      return false;

    default:
      return state;
  }
};

const errorReducer = (state = null, { type, payload }) => {
  switch (type) {
    case ActionType.FETCH_POSTS_START:
    case ActionType.DELETE_POST_START:
    case ActionType.ADD_POST_START:
      return null;
    case ActionType.FETCH_POSTS_ERROR:
    case ActionType.DELETE_POST_ERROR:
    case ActionType.ADD_POST_ERROR:
      return payload.error;

    default:
      return state;
  }
};

export default combineReducers({
  items: itemsReducer,
  loading: loadReducer,
  error: errorReducer
});
