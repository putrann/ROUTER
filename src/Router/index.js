import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router } from '@reach/router';
import Home from './Home';
import List from './List';
import Item from './Item';
import myReducer from './Reducer'
const store = createStore(myReducer);

class Myapp extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Home path="/" />
          <List path="/list" />
          <Item path="/new/:id"/>
        </Router>
      </Provider>
    );
  }
}
export default Myapp;
