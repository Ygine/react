import { combineReducers } from 'redux';
import {ActionType} from './sessionActions';

const user = (state = {}, {type, payload}) => {
  switch(type){
    // на что будет реагировать юзер?
    case ActionType.LOGIN_SUCCESS:
      return {
        userId: payload.response.userId
      };

    case ActionType.USERINFO_SUCCESS:
      return payload.response;

    case ActionType.LOGOUT:
      return null;

    default:
      return state;
  }
};

const token = (state = null, {type, payload}) => {
  switch(type){
    case ActionType.LOGIN_SUCCESS:
      return payload.response.token;

    case ActionType.LOGOUT:
      return null;

    default:
      return state;
  }
};

const authenticated = (state = false, {type, payload}) => {
  switch(type){
    case ActionType.LOGIN_SUCCESS:
    case ActionType.USERINFO_SUCCESS:
      return true;

    case ActionType.LOGOUT:
      return false;

    default:
      return state;
  }
};

const error = (state = '', {type, payload}) => {
  switch(type){
    case ActionType.LOGIN_ERROR:
    case ActionType.SIGNUP_ERROR:
    case ActionType.USERINFO_ERROR:
      return payload.error;

    case ActionType.CHECKEXISTUSERNAME_ERROR:
      return 'Логин занят';

    case ActionType.CHECKEXISTUSERNAME_SUCCESS:
      return '';

    default:
      return state;
  }
};

export default combineReducers({
    user,
    token,
    authenticated,
    error,
  }
)