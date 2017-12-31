// @flow
import React, { Component } from 'react';
// import { AsyncStorage } from 'react-native';
import { Router } from './config/Router';
import Store from './redux/Store';
import { Provider } from 'react-redux';

class App extends Component {
  componentWillMount() {
    // AsyncStorage.clear();
  }
  render() {
    return (
      <Provider store={Store}>
        <Router />
      </Provider>
    );
  }
}
export default App;
