import axios from 'axios';

axios.defaults.baseURL = 'https://rest-api-sandbox-ds.herokuapp.com/api/v1';

const setAuthToken = token => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//  чтоб при каждом запросе не сетить токен в хедер
};

const clearAuthToken = () => {
  axios.defaults.headers.common['Authorization'] = null;
//  сбросить при logout
};

 export const getUserProfile = (data) => {
   return axios.get(`/user/profile`, data).then(response => response.data);
 };

 export const authSignup = (userData) => {
   return axios.post(`/auth/register`, userData).then(response => response.data);
 };

 export const authLogin = ({email, password}) => {
   return axios.post(`/auth/login`, {email, password}).then(response => {
     setAuthToken(response.data.token);
     return response.data
   });
 };

 export const authCheckExistUsername = (username) => {
   return axios.get(`/auth/checkExistUsername?username=${username}`).then(response => response.data);
 };

 export const authCheckToken = ({token}) => {
   return axios.get(`/auth/checkToken`, token).then(response => response.data);
 };