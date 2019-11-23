import React from 'react';
import {Dialog,DialogContent,DialogTitle,Slide} from '@material-ui/core';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function AlertDialogSlide({title, isOpen, handleClose, children}) {

  return (
        <Dialog style={{top: -280}}
          open={isOpen}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">{title}</DialogTitle>
          <DialogContent style={{ paddingBottom: 20}}>

            {children}

          </DialogContent>
        </Dialog>
  );
}