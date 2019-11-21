import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import { Route, Switch, Redirect} from 'react-router-dom';
// import { withStyles } from '@material-ui/core/styles';
import HomePage from '../pages/HomePage';
import AccountPage from '../pages/AccountPage';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import AppBar from './Appbar/appbar';
import PostsPage from '../pages/PostsPage';
import PostPage from '../pages/PostPage';
import NotFoundPage from '../pages/NotFound';
import Modal from '../components/Modal';
import {getUserProfile} from '../redux/session/sessionOperation';

const App = () => {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getUserProfile());

  },[dispatch]);

    return (
      <>
        <AppBar />

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/account" component={AccountPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignupPage} />
          <Route path="/posts/post/:id" component={PostPage} />
          <Route path="/posts" component={PostsPage} />
          <Route component={NotFoundPage} />
          <Redirect to='/' />
        </Switch>

          <Modal/>

      </>
    );

};

export default App;