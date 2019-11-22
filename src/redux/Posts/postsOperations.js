// import axios from 'axios';
// import {fetchPostsStart, fetchPostsSuccess, fetchPostsError,
//   deletePostStart, deletePostSuccess, deletePosError,
//   addPostStart, addPostSuccess, addPostError} from './postActions'
// import * as postAPI from '../../services/posts-api';
// import * as sessionSelectors from '../session/sessionsSelectors';
//
// const setAuthToken = token => {
//   axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
// //  чтоб при каждом запросе не сетить токен в хедер
// };
//
// export const fetchPosts = () => dispatch => {
//   dispatch(fetchPostsStart());
//
//   postAPI.fetchPosts().then(response => {
//     dispatch(fetchPostsSuccess(response.data))
//   }).catch(error => {
//     dispatch(fetchPostsError(error.message))
//   })
// };
//
// export const deletePost = (id) =>( dispatch, getState) => {
//   dispatch(deletePostStart());
//   const token = sessionSelectors.getToken(getState());
//   setAuthToken(token);
//
//   postAPI.deletePost(id).then(() => {
//     dispatch(deletePostSuccess(id))
//   }).catch(error => {
//     dispatch(deletePosError(error.message))
//   })
// };
//
// export const createPost = (post) => dispatch => {
//   dispatch(addPostStart());
//
//   postAPI.createPost().then((response) => {
//     dispatch(addPostSuccess(response.data))
//   }).catch(error => {
//     dispatch(addPostError(error.message))
//   })
// };
//
//
// export const updatePost = (post) => dispatch => {
//   dispatch(addPostStart());
//
//   postAPI.updatePost().then((response) => {
//     dispatch(addPostSuccess(response.data))
//   }).catch(error => {
//     dispatch(addPostError(error.message))
//   })
// };
