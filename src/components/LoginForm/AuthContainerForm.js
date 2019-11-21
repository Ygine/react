import React from 'react';
import { CssBaseline, Typography } from '@material-ui/core';
import {Container} from '@material-ui/core';
import useStyles from './loginFormStyle';
import SignUpRedirect from '../singUpRedirect';

export default function SignIn({formTitle, link, text, children}) {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline/>
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          {formTitle}
        </Typography>

          {children}

        <SignUpRedirect link={link} text={text}/>
      </div>
    </Container>
  );
}
