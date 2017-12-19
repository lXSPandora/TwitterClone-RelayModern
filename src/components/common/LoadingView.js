// @flow

import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import styled from "styled-components/native";
import * as Progress from "react-native-progress";

const Wrapper = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

class LoadingView extends Component {
  render() {
    return (
      <Wrapper>
        <Progress.CircleSnail color={["rgb(0, 148, 255)"]} />
      </Wrapper>
    );
  }
}

export default LoadingView;

