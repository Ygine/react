import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import PostList from '../components/Posts/PostList';
import {makeStyles, Typography} from '@material-ui/core';
import * as PostActions from '../redux/Posts/postActions';
import AddPostModal from '../components/Posts/AddPostModal';
import PopoverPost from '../components/Posts/Popover';
import { withSnackbar } from 'notistack';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  title:{
    position: 'relative',
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: 600,
    marginTop: 20,
  },
}));


const PostsPage = ({enqueueSnackbar}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts.items);
  const [isOpen, setIsOpen] = useState(false);
  const [postLength, setPostLength] = useState(0);

  useEffect(() => {
      dispatch(PostActions.fetchPostsStart());
  }, [dispatch]);

  useEffect(() => {
    setPostLength(posts.length);

    if (postLength > posts.length) {
      showNotifBar('Post DELETE', 'success');
    }else if(postLength > 0 && postLength < posts.length){
      showNotifBar('Post ADD', 'info');
    }

  }, [posts, postLength]);

  const showNotifBar = (message, variant) => {
    enqueueSnackbar(message, {
      variant: `${variant}`,
      autoHideDuration: 3000,
      anchorOrigin:{
        vertical: 'bottom',
        horizontal: 'right',
      },
    });
  };

  const handleDeletePost = (id) =>{
    dispatch(PostActions.deletePostStart(id));
  };
  const handleAddPost = (data) =>{
    dispatch(PostActions.addPostStart(data));
  };


  const handleOpenModal = (isOpenModal) =>{
    setIsOpen(isOpenModal);
  };
  const handleCloseModal = (isOpenModal) =>{
    setIsOpen(!isOpenModal);
  };

  return (
    <>
      <AddPostModal handleAddPost={handleAddPost} handleClose={handleCloseModal} isOpen={isOpen}/>
      <Typography  className={classes.title} variant='h4'  component="h1">
        MY POSTS
        <PopoverPost onOpenModal={handleOpenModal}/>
      </Typography>
      <PostList posts={posts} deletePost={handleDeletePost}/>
    </>
  )
};

PostsPage.propTypes = {
  enqueueSnackbar: PropTypes.func.isRequired,
};

export default withSnackbar(PostsPage);
