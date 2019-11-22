import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const signUpRedirect = ({link, text}) => {

    return (
       <Link to={link}>
         {text}
       </Link>
    )
};

signUpRedirect.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default signUpRedirect;
