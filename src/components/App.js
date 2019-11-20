import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import TodoBlock from './HOKS/todoBlock';

export default class App extends Component {

  state = {

  };

  render() {

    return (
      <div>
        <TodoBlock/>

        <Switch>
          <Route path='/' exact component={HomePage}/>
        </Switch>
      </div>
    );
  }
}
