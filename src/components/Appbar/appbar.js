import React, {useContext, useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {AppBar, Toolbar, Box, Typography, InputBase } from '@material-ui/core';
import TabMenu from '../Appbar/tabs';
import { NavLink } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import UserProfile from './UserProfile';
import useStyles from './appStyle';
import {authenticationContext} from '../../contexts/authentication';
import {filterPostStart} from '../../redux/Posts/postActions';



 const AppBarProvider = ({location}) => {
  const {authenticated} = useContext(authenticationContext);
  const classes = useStyles();
  const dispatch = useDispatch();
  const [filterText, setFilterText] = useState('');

  useEffect(() => {
    dispatch(filterPostStart(filterText));
  }, [filterText]);


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

          {location.pathname === '/posts' && (
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase onChange={(e) => setFilterText(e.target.value)}
                 placeholder="Search…"
                 classes={{
                   root: classes.inputRoot,
                   input: classes.inputInput,
                 }}
                 inputProps={{ 'aria-label': 'search' }}
              />
            </div>
          )}

          {authenticated && (
            <UserProfile/>
          )}

        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withRouter(AppBarProvider);