import React from 'react';
import {useDispatch} from 'react-redux';
// import queryString from 'query-string';
import PropTypes from 'prop-types';
import AuthContainerForm from '../components/LoginForm/AuthContainerForm';
import LoginForm from '../components/LoginForm/LoginForm';
import {loginRequest} from '../redux/session/sessionActions';
import withAuthRedirect from '../components/HOC/WithAuthRedirect';

const LoginPage = (props) => {
  const dispatch = useDispatch();

  const getFormData = (data) => {
    dispatch(loginRequest(data))
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

export default withAuthRedirect(LoginPage);
