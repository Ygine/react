import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
// import { Typography, Checkbox } from '@material-ui/core';
import useStyles from './loginFormStyle';

function SignUpForm({ onSubmit, onFocus, sessionError}) {
  const classes = useStyles();

  const [username, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const[rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({ username, email, password });

    setName('');
    setEmail('');
    setPassword('');
    // setRememberMe(false);
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setName(e.target.value)}
          onBlur={(e) => onFocus(e.target.value)}
          value={username}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="Name"
          label="Name"
          type="text"
          id="name"
          autoComplete="name"
          autoFocus
        />
      {sessionError && (
        <p style={{color: 'red', fontWeight: 600}}>Етот логин уже занят</p>
      )}

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
      {/*<FormControlLabel*/}
      {/*  onChange={() => setRememberMe(!rememberMe)}*/}
      {/*  control={<Checkbox checked={rememberMe} color="primary"/>}*/}
      {/*  label="Remember me"*/}
      {/*/>*/}
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
export default SignUpForm;