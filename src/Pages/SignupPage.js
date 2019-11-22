import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
// import PropTypes from 'prop-types';
import AuthContainerForm from '../components/LoginForm/AuthContainerForm';
import SignUpForm from '../components/LoginForm/RegisterForm';
import {checkExistUsernameRequest, signupRequest} from '../redux/session/sessionActions';
import withAuthRedirect from '../components/HOC/WithAuthRedirect';

const SignUpPage = (props) => {
  const dispatch = useDispatch();
  const sessionError = useSelector(state => state.session.error);

  const getFormData2 = (data) => {
    dispatch(signupRequest(data))
  };

  const handleCheckName = (value) => {
    if(value.length > 1){
      dispatch(checkExistUsernameRequest(value))
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

export default withAuthRedirect(SignUpPage);
