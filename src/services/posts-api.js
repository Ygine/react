import axios from 'axios';

axios.defaults.baseURL = 'https://rest-api-sandbox-ds.herokuapp.com/api/v1';

export const fetchPosts = () => {
  return axios.get(`/posts`).then(response => response.data);
};

export const fetchPostWithId = (id) => {
  return axios.get(`/posts/post/${id}`).then(response => response.data);
};

export const deletePost = (id, options) => {
  return axios.delete(`/posts/post/${id}`, options).then(response => response.data);
};

export const createPost = (data) => {
  return axios.post(`/posts`, data).then(response => response.data);
};

export const updatePost = (postData) => {
  return axios.put(`/posts/post/${postData.updatePostId}`, postData.data ).then(response => response.data);
};
