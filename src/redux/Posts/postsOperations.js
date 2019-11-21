import {fetchPostsStart, fetchPostsSuccess, fetchPostsError,
  deletePostStart, deletePostSuccess, deletePosError,
  addPostStart, addPostSuccess, addPostError} from './postActions'
import * as postAPI from '../../services/posts-api';

export const fetchPosts = () => dispatch => {
  dispatch(fetchPostsStart());

  postAPI.fetchPosts().then(response => {
    dispatch(fetchPostsSuccess(response.data))
  }).catch(error => {
    dispatch(fetchPostsError(error.message))
  })
};

export const deletePost = (id) => dispatch => {
  dispatch(deletePostStart());

  postAPI.deletePost(id).then(() => {
    dispatch(deletePostSuccess(id))
  }).catch(error => {
    dispatch(deletePosError(error.message))
  })
};

export const createPost = (post) => dispatch => {
  dispatch(addPostStart());

  postAPI.createPost().then((response) => {
    dispatch(addPostSuccess(response.data))
  }).catch(error => {
    dispatch(addPostError(error.message))
  })
};


export const updatePost = (post) => dispatch => {
  dispatch(addPostStart());

  postAPI.updatePost().then((response) => {
    dispatch(addPostSuccess(response.data))
  }).catch(error => {
    dispatch(addPostError(error.message))
  })
};
