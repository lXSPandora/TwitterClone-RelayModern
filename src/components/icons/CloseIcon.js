// @flow
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';

class CloseIcon extends Component {
  static defaultProps = {
    color: 'black',
    size: 20,
  };
  render() {
    const { color, size, style } = this.props;
    return (
      <Svg
        style={{
          width: size,
          height: size,
          ...style,
        }}
        viewBox="0 0 1000 1000"
      >
        <Path
          fill={color}
          d="M964.7 157.6L622.3 500l342.4 342.4c15.7 15.7 25.3 37.3 25.3 61.1 0 47.7-38.7 86.5-86.5 86.5-23.9 0-45.5-9.7-61.1-25.3L500 622.3 157.6 964.7C142 980.3 120.3 990 96.5 990 48.7 990 10 951.3 10 903.5c0-23.9 9.7-45.5 25.3-61.1L377.7 500 35.3 157.6C19.7 142 10 120.3 10 96.5 10 48.7 48.7 10 96.5 10c23.9 0 45.5 9.7 61.1 25.3L500 377.7 842.4 35.3C858 19.7 879.7 10 903.5 10c47.8 0 86.5 38.7 86.5 86.5 0 23.8-9.7 45.5-25.3 61.1z"
        />
      </Svg>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default CloseIcon;
