import React from 'react';
import {Link} from 'react-router-dom';
// import PropTypes from 'prop-types';

const signUpRedirect = ({link, text}) => {

    return (
       <Link to={link}>
         {text}
       </Link>
    )
};

// signUpRedirect.propTypes = {};

export default signUpRedirect;
