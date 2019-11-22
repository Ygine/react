import React, { useContext, useEffect } from 'react';
// import { connect } from 'react-redux';
import {authenticationContext} from '../../contexts/authentication';
//на redux подписывается не ХОК а класс, кажды новый вызов ХОК будет возвращать новый класс
// нам нужно подписывать каждый класс


const withAuthRedirect = BaseComponent => {
  return (props) => {
      const {authenticated} = useContext(authenticationContext);

    useEffect(() => {
      if(authenticated){
        props.history.replace('/account');
      }
    }, [authenticated, props.history]);

    return (
        <BaseComponent {...props}/>
      );

  };

  // каждый екземпляр будет подписан на свои PROPS, чтобы при изменении пропов не перерендривались все компоненты
  //которые подписаны
  //
  // const mapStateToProps = state => ({
  //   authenticated: sessionSelectors.authenticated(state)
  // });
  //
  // return connect(mapStateToProps, null)(WithAuthRedirect);
};

export default withAuthRedirect;

