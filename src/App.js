// @flow
import React, { Component } from "react";
import { View, Text, StyleSheet, AsyncStorage } from "react-native";
import { Router } from "./config/Router";

class App extends Component {
  componentWillMount() {
    // AsyncStorage.clear();
  }
  render() {
    return <Router />;
  }
}
export default App;
