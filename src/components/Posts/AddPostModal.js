import React from 'react';
import AddPostForm from './AddPostForm';
import {Dialog,DialogContent,DialogTitle,Slide} from '@material-ui/core';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function AlertDialogSlide({isOpen, handleClose, handleAddPost}) {

  return (
        <Dialog style={{top: -280}}
          open={isOpen}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">Add your post</DialogTitle>
          <DialogContent style={{ paddingBottom: 20}}>

              <AddPostForm onAddPost={handleAddPost} onCloser={handleClose}/>

          </DialogContent>
        </Dialog>
  );
}