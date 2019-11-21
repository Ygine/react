import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import useStyles from './loginFormStyle';
import PropTypes from 'prop-types';

function LoginForm({onSubmit}) {
  const classes = useStyles();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({ email, password });

    setEmail('');
    setPassword('');
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <TextField
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="Email"
        autoComplete="email"
        autoFocus
      />
      <TextField
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="Password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
      />

      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
      >Sign In
      </Button>
    </form>
  );
}

LoginForm.prototype = {
  onSubmit: PropTypes.func.isRequired,
};

export default LoginForm;