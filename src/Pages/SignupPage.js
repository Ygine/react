import React, {useContext, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
// import PropTypes from 'prop-types';
import AuthContainerForm from '../components/LoginForm/AuthContainerForm';
import SignUpForm from '../components/LoginForm/RegisterForm';
import * as sessionOperations from '../redux/session/sessionOperation';
import {authenticationContext} from '../contexts/authentication';

const SignupPage = (props) => {
  const {authenticated} = useContext(authenticationContext);
  const dispatch = useDispatch();
  const sessionError = useSelector(state => state.session.error);

  useEffect(() => {
    if(authenticated){
      props.history.replace('/account');
    }
  }, [authenticated, props.history]);

  const getFormData2 = (data) => {
    dispatch(sessionOperations.authSignup(data))
  };

  const handleCheckName = (value) => {
    if(value.length > 0){
      dispatch(sessionOperations.authCheckExistUsername(value))
      }
  };

  return (
    <div>
      <AuthContainerForm  formTitle={'Sign up'}  link={'/login'} text={'Sign in'}>
        <SignUpForm sessionError={sessionError}  onFocus={handleCheckName} onSubmit={getFormData2}/>
      </AuthContainerForm>
    </div>
  )
};

// LoginPage.propTypes = {};

export default SignupPage;
