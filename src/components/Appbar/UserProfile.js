import React, {useContext} from 'react';
import{ Button, Menu, MenuItem} from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { withRouter } from 'react-router-dom';
import {authenticationContext} from '../../contexts/authentication';

const UserProfile = ({history}) => {
  const {handleLogOut} = useContext(authenticationContext);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleRedirect = () =>{
    handleLogOut();
  };

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <AccountCircle/>
      </Button>

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleRedirect}>Logout</MenuItem>
      </Menu>
    </div>
  );
};

export default withRouter(UserProfile);
