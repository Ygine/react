import React from 'react';
import PropTypes from 'prop-types';
import { Fab, makeStyles} from '@material-ui/core';
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

  return (
    <>
      <Fab href={null} onClick={onOpenModal} color="primary"
           aria-label="add" className={classes.fab} aria-haspopup="true">
        <AddIcon/>
      </Fab>

    </>
  );
};

PopoverPost.propTypes = {
  onOpenModal: PropTypes.func.isRequired,
};

export default PopoverPost;
