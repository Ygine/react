import React, { useContext } from 'react';
import {useSelector} from 'react-redux';
import {Dialog,DialogContent,DialogContentText,DialogTitle,Slide} from '@material-ui/core';
import {authenticationContext} from '../contexts/authentication';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
  const {userInfo} = useContext(authenticationContext);
  const authenticated = useSelector(state => state.session.authenticated);
  const [open, setOpen] = React.useState(true);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {(authenticated && userInfo.username) && (
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">HELLO {userInfo.username}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              Let Google help apps determine location. This means sending anonymous location data to
              Google, even when no apps are running.
            </DialogContentText>
          </DialogContent>
        </Dialog>
      )}

    </div>
  );
}