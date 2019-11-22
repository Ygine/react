import React from 'react';
import { NavLink } from 'react-router-dom';
import useStyles from './appStyle';
import { useSelector} from 'react-redux';


const TabMenu = (props) => {
  const authenticated = useSelector(state => state.session.authenticated);
  const classes = useStyles();

  return(
    <ul className={classes.menu}>
      {!authenticated && (
        <>
        <li>
          <NavLink activeClassName={classes.active} className={classes.link} to='/login'>
            LOGIN
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={classes.active} className={classes.link} to='/signup'>
            SIGNUP
          </NavLink>
        </li>
        </>
      )}
      {authenticated && (
        <>
      <li>
        <NavLink activeClassName={classes.active} className={classes.link} to='/account'>
          ACCOUNT
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName={classes.active} className={classes.link} to='/posts'>
          POSTS
        </NavLink>
      </li>
        </>
      )}
</ul>
  )
};

export default TabMenu;