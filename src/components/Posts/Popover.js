import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { Fab, makeStyles, Popover, Typography } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
  fab: {
    marginLeft: 50
  },
  popover: {
    pointerEvents: 'none',
  },
  paper: {
    padding: theme.spacing(1),
  },
}));

const PopoverPost = ({onOpenModal}) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopoverOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <Fab onClick={ () => onOpenModal(true)} color="primary" aria-label="add" className={classes.fab}
           aria-owns={open ? 'mouse-over-popover' : undefined}
           aria-haspopup="true"
           onMouseEnter={handlePopoverOpen}
           onMouseLeave={handlePopoverClose}
      >
        <AddIcon/>
        <Popover
          id="mouse-over-popover"
          className={classes.popover}
          classes={{
            paper: classes.paper,
          }}
          open={open}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          onClose={handlePopoverClose}
          disableRestoreFocus
        >
          <Typography>Add post</Typography>
        </Popover>
      </Fab>

    </>
  );
};

// Popover.propTypes = {};

export default PopoverPost;
