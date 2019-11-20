import axios from 'axios';

axios.defaults.baseURL = 'https://rest-api-sandbox-ds.herokuapp.com/api/v1';

 export const fetchPosts = () => {
   return axios.get(`/posts`).then(response => response.data);
 };






// export const fetchTasks = () => {
//   return axios.get(`/tasks`).then(response => response.data);
// };
//
// export const postTask = task => {
//   return axios.post(`/tasks`, task).then(response => response.data);
// };
//
// export const deleteTask = id => {
//   return axios.delete(`/tasks/${id}`);
// };
//
// export const updateTask = (id, update) => {
//   return axios.patch(`/tasks/${id}`, update).then(response => response.data);
// };
