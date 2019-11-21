import React, { useEffect, useContext} from 'react';
import {useDispatch} from 'react-redux';
// import queryString from 'query-string';
import PropTypes from 'prop-types';
import AuthContainerForm from '../components/LoginForm/AuthContainerForm';
import LoginForm from '../components/LoginForm/LoginForm';
import * as sessionOperations from '../redux/session/sessionOperation';
import {authenticationContext} from '../contexts/authentication';

const LoginPage = (props) => {
  const {authenticated} = useContext(authenticationContext);
  const dispatch = useDispatch();

  useEffect(() => {
    if(authenticated){
      props.history.replace('/account');
    }
  }, [authenticated, props.history]);

  const getFormData = (data) => {
    dispatch(sessionOperations.authLogin(data))
  };

  return (
       <div>
         <AuthContainerForm link={'/signup'} text={'Sign up'} formTitle={'Sign in'} >
           <LoginForm onSubmit={getFormData}/>
         </AuthContainerForm>
       </div>
    )
};

LoginPage.propTypes = {
  history: PropTypes.object.isRequired
};

export default LoginPage;
