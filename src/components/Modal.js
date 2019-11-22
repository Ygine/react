import React, { useContext } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Dialog,DialogContent,DialogContentText,DialogTitle,Slide} from '@material-ui/core';
import {authenticationContext} from '../contexts/authentication';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
  const {userInfo} = useContext(authenticationContext);
  const dispatch = useDispatch();
  const showSalutWindow = useSelector(state => state.session.showSalutWindow);

  const handleClose = () => {
    dispatch({type: 'SOLUTION_WINDOW_HIDE', payload: false})
  };

  return (
    <div>
      {showSalutWindow && (

        <Dialog
          open={showSalutWindow}
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