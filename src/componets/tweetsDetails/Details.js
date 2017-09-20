// @flow
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
class Details extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>I'm the Details component</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
export default Details;
