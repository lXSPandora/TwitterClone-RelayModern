// @flow
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import styled from "styled-components/native";
import { withNavigation } from "react-navigation";

const Container = styled.View`
  flex: 1;
  background-color: #42b3f4;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.Image`
  width: 100;
  height: 100;
`;
class Splash extends Component {
  static navigationOptions = {
    header: null
  };

  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate("Feed");
    }, 5000);
  }

  render() {
    return (
      <Container>
        <Logo source={require("../../img/logo.png")} />
      </Container>
    );
  }
}

export default Splash;
