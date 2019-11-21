import React, {useContext} from 'react';
import {AppBar, Toolbar, Box, Typography, InputBase } from '@material-ui/core';
import TabMenu from '../Appbar/tabs';
import { NavLink } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import UserProfile from './UserProfile';
import useStyles from './appStyle';
import {authenticationContext} from '../../contexts/authentication';


export default function AppBarProvider() {
  const {authenticated} = useContext(authenticationContext);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>

          <Typography variant="h6" className={classes.title}>
            <NavLink exact to='/' className={classes.link}>
              Messenger
            </NavLink>
          </Typography >

          <Box className={classes.title}>
            <TabMenu />
          </Box>

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          {authenticated && (
            <UserProfile/>
          )}

        </Toolbar>
      </AppBar>
    </div>
  );
}