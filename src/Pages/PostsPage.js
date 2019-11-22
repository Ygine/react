import React, {useEffect, useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
// import * as postsOperations from '../redux/Posts/postsOperations';
import PostList from '../components/Posts/PostList';
import {makeStyles, Typography} from '@material-ui/core';
import * as PostActions from '../redux/Posts/postActions';
import AddPostModal from '../components/Posts/AddPostModal';
import PopoverPost from '../components/Posts/Popover';
// import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  title:{
    position: 'relative',
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: 600,
    marginTop: 20,
  },
}));


const PostsPage = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts.items);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
      dispatch(PostActions.fetchPostsStart());
  }, [dispatch]);

  const handleDeletePost = (id) =>{
    dispatch(PostActions.deletePostSuccess(id));
  };

  const handleOpenModal = (isOpenModal) =>{
    setIsOpen(isOpenModal);
  };

  const handleCloseModal = (isOpenModal) =>{
    setIsOpen(!isOpenModal);
  };

  return (
    <>
      <AddPostModal handleClose={handleCloseModal} isOpen={isOpen}/>
      <Typography  className={classes.title} variant='h4'  component="h1">
        MY POSTS
        <PopoverPost onOpenModal={handleOpenModal}/>
      </Typography>
      <PostList posts={posts} deletePost={handleDeletePost}/>
    </>
  )
};

// MessagePage.propTypes = {};

export default PostsPage;
