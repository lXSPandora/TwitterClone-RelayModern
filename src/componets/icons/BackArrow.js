// @flow
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";

class BackArrowIcon extends Component {
  static defaultProps = {
    color: "black"
  };
  render() {
    const { size, color } = this.props;
    return (
      <Svg
        style={{
          width: size,
          height: size,
          marginVertical: 30,
          marginHorizontal: 10
        }}
        viewBox="0 0 1000 1000"
        enableBackground="new 0 0 1000 1000"
      >
        <Path
          fill={color}
          d="M990 503.4c0 25.9-21 46.9-46.9 46.9H56.9c-25.9 0-46.9-21-46.9-46.9v-4.6c0-25.9 21-46.9 46.9-46.9H943c25.9 0 46.9 21 46.9 46.9v4.6z"
        />
        <Path
          fill={color}
          d="M430.9 131.1c18.3 18.3 18.3 48.1 0 66.4L93.1 535.2c-18.3 18.3-48.1 18.3-66.4 0l-2.9-2.9c-18.3-18.3-18.3-48 .1-66.3l337.7-337.7c18.3-18.3 48.1-18.3 66.4 0l2.9 2.8z"
        />
        <Path
          fill={color}
          d="M430.9 868.9c18.3-18.3 18.3-48.1 0-66.4L93.1 464.8c-18.3-18.3-48.1-18.3-66.4 0l-2.9 2.9c-18.3 18.3-18.3 48 .1 66.3l337.7 337.7c18.3 18.3 48.1 18.3 66.4 0l2.9-2.8z"
        />
      </Svg>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
export default BackArrowIcon;
