import React, {useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import * as postsOperations from '../redux/Posts/postsOperations';
import PostList from '../components/Posts/PostList';
import {makeStyles, Typography } from '@material-ui/core';
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

  useEffect(() => {
      dispatch(postsOperations.fetchPosts());

  }, [dispatch]);

  const handleDeletePost = (id) =>{
    dispatch(postsOperations.deletePost(id));
  };

  return (
    <div>
      <Typography  className={classes.title} variant='h4'  component="h1">
        MY POSTS
      </Typography>
      <PostList posts={posts} deletePost={handleDeletePost}/>
    </div>
  )
};

// MessagePage.propTypes = {};

export default PostsPage;
