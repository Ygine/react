import React, {useEffect, lazy, Suspense } from 'react';
import {useDispatch} from 'react-redux';
import { Route, Switch, Redirect} from 'react-router-dom';
import AppBar from './Appbar/appbar';
import NotFoundPage from '../pages/NotFound';
import Modal from '../components/Modal';
import {userInfoRequest} from '../redux/session/sessionActions';
import ProtectedRoute from '../components/ProtectedRoute';


const AsyncHomePage = lazy(() =>
  import('../pages/HomePage' /* webpackChunkName: "home-page" */),
);
const AsyncPostsPage = lazy(() =>
  import('../pages/PostsPage' /* webpackChunkName: "posts-page" */),
);
const AsyncPostPage = lazy(() =>
  import('../pages/PostPage' /* webpackChunkName: "post-page" */),
);
const AsyncAccountPage = lazy(() =>
  import('../pages/AccountPage' /* webpackChunkName: "account-page" */),
);
const AsyncLoginPage = lazy(() =>
  import('../pages/LoginPage' /* webpackChunkName: "login-page" */),
);
const AsyncSignUpPage = lazy(() =>
  import('../pages/SignupPage' /* webpackChunkName: "signUp-page" */),
);


const App = () => {
  const dispatch = useDispatch();

  useEffect(()=>{
      dispatch(userInfoRequest());

  },[dispatch]);

    return (
      <>
        <AppBar />

        <Suspense fallback={<h1>Loading...</h1>}>
          <Switch>
            <ProtectedRoute path="/account" component={AsyncAccountPage} redirectTo="/login" />
            <ProtectedRoute path="/posts/post/:id" component={AsyncPostPage} redirectTo="/login" />
            <ProtectedRoute path="/posts" component={AsyncPostsPage} redirectTo="/login" />
            <Route exact path="/" component={AsyncHomePage} />
            <Route path="/login" component={AsyncLoginPage} />
            <Route path="/signup" component={AsyncSignUpPage} />
            <Route component={NotFoundPage} />
            <Redirect to='/' />
          </Switch>
        </Suspense>

        <Modal/>

      </>
    );

};

export default App;