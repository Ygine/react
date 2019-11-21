import React, { createContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {logout} from '../redux/session/sessionActions';

export const authenticationContext = createContext();

export const AuthenticationProvider = (props) => {
  const authenticated = useSelector(state => state.session.authenticated);
  const userInfo = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  // const logIn = () => {
  //   setAuthenticated(true);
  // };

  const handleLogOut = () => {
    dispatch(logout());
  };
    
    return (
      <authenticationContext.Provider value={{ authenticated, handleLogOut, userInfo }}>
        {props.children}
      </authenticationContext.Provider>
    )
};

