// @flow
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  KeyboardAvoidingView
} from "react-native";
import styled from "styled-components/native";
import CloseIcon from "../icons/CloseIcon";

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  padding-top: 30;
  background-color: #ffffff;
`;

const ProfilePicture = styled.Image`
  width: 40;
  height: 40;
  border-radius: 20;
`;

const CloseButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;

const Textarea = styled.TextInput`
  padding: 20px;
  margin-top: 10;
  font-size: 20;
  font-weight: bold;
  color: #2d2d2d;
`;

const SignUpButton = styled.TouchableOpacity`
  background-color: rgb(29, 161, 242);
  padding-horizontal: 30;
  padding-vertical: 10;
  align-items: center;
  justify-content: center;
  border-radius: 40;
`;

const SignUpText = styled.Text`
  color: white;
  font-size: 18;
  font-weight: 800;
`;

const Footer = styled.View`
  align-items: flex-end;
  justify-content: center;
  bottom: 20;
  right: 20;
`;

const ViewAnimated = Animated.createAnimatedComponent(View);

class Create extends Component {
  static navigationOptions = {
    header: null
  };

  goBack = () => {
    this.props.navigation.goBack();
  };

  Tweet = () => {
    console.log("apertei esta porra");
  };

  render() {
    return (
      <View style={styles.container}>
        <Header>
          <CloseButton onPress={this.goBack}>
            <CloseIcon
              style={{
                marginRight: 10
              }}
              color="rgb(29, 161, 242)"
              size={20}
            />
          </CloseButton>
          <View>
            <ProfilePicture source={require("../../img/profileEgg.png")} />
          </View>
        </Header>
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
          <View style={{ flex: 1 }}>
            <Textarea
              multiline={true}
              numberOfLines={4}
              placeholder="What is happening?"
              autoFocus={true}
              autoCorrect={false}
            />
          </View>
          <Footer>
            <SignUpButton onPress={this.Tweet}>
              <SignUpText>Tweet</SignUpText>
            </SignUpButton>
          </Footer>
        </KeyboardAvoidingView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff"
  }
});
export default Create;
