// @flow
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
class Create extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>I'm the Create component</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
export default Create;
