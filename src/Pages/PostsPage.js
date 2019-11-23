import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import PostList from '../components/Posts/PostList';
import { makeStyles, Typography } from '@material-ui/core';
import * as PostActions from '../redux/Posts/postActions';
import PostModal from '../components/Posts/PostModal';
import PopoverPost from '../components/Posts/Popover';
import AddPostForm from '../components/Posts/AddPostForm';
import { withSnackbar } from 'notistack';
import PropTypes from 'prop-types';


const filteredPosts = (posts, query) => posts.filter(post => {
  const str = post.title.toLowerCase() + "<span style='color: red'>1</span>" + post.text.toLowerCase();
  return str.includes(query.toLowerCase());
});


const PostsPage = ({enqueueSnackbar}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts.items);
  const filter = useSelector(state => state.posts.filter);

  const [isOpenAddPost, setOpenAddPost] = useState(false);
  const [isOpenUpdatePost, setOpenUpdatePost] = useState(false);
  const [postLength, setPostLength] = useState(0);
  const [updatePostId, setupdatePostId] = useState(null);
  const [updatePostData, setupdatePostData] = useState(null);

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
    setOpenAddPost(false);
  };
  const handleUpdatePost = (data) =>{
    dispatch(PostActions.updatePostStart(data, updatePostId));
    setOpenUpdatePost(false);
  };


  const handleOpenAddPostModal = () =>{
    setOpenAddPost(true);
  };
  const handleCloseAddPostModal = () =>{
    setOpenAddPost(false);
  };


  const handleOpenUpdatePostModal = (id, data) =>{
    setupdatePostData(data);
    setupdatePostId(id);
    setOpenUpdatePost(true);
  };
  const handleCloseUpdatePostModal = () =>{
    setOpenUpdatePost(false);
  };

  return (
    <>
        {isOpenAddPost && (
          <PostModal  title='Add new post' handleClose={handleCloseAddPostModal} isOpen={isOpenAddPost}>
            <AddPostForm  textButton="add post" onAddPost={handleAddPost}/>
          </PostModal>
        )}

        {isOpenUpdatePost && (
          <PostModal title='Update your post' handleClose={handleCloseUpdatePostModal}  isOpen={isOpenUpdatePost}>
            <AddPostForm postData={updatePostData} textButton="update post" onAddPost={handleUpdatePost}/>
          </PostModal>
        )}

      <Typography  className={classes.title} variant='h4' component="h1"> MY POSTS
        <PopoverPost onOpenModal={handleOpenAddPostModal}/>
      </Typography>
      <PostList posts={filteredPosts(posts, filter)} onOpenUpdatePost={handleOpenUpdatePostModal} deletePost={handleDeletePost}/>
    </>
  )
};

PostsPage.propTypes = {
  enqueueSnackbar: PropTypes.func.isRequired,
};

export default withSnackbar(PostsPage);

const useStyles = makeStyles(theme => ({
  title:{
    position: 'relative',
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: 600,
    marginTop: 20,
  },
}));


