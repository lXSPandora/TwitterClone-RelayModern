// @flow
import React, { Component } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import styled from "styled-components/native";
import Svg, { Path } from "react-native-svg";

const { width } = Dimensions.get("window");

const birdWidth = width + 220;

const BackgroundView = styled.View`
  background-color: rgb(29, 161, 242);
  flex: 1;
`;

const WelcomeText = styled.Text`
  color: #ffffff;
  font-size: 50;
  font-weight: bold;
  margin-top: 30;
  text-align: left;
  margin-left: 10;
`;

const DescriptionText = styled.Text`
  color: #ffffff;
  font-size: 22;
  font-weight: bold;
  margin-top: 10;
  margin-horizontal: 10;
`;

const ActionView = styled.View`
  margin-top: -550;
  background-color: rgba(0, 0, 0, 0);
`;

const SignUpButton = styled.TouchableOpacity`
  background-color: #ffffff;
  padding-horizontal: 50;
  padding-vertical: 10;
  align-items: center;
  justify-content: center;
  border-radius: 40;
  margin-right: 10;
`;

const LoginButton = styled.TouchableOpacity`
  border-style: solid;
  border-width: 1;
  border-color: #ffffff;
  padding-horizontal: 50;
  padding-vertical: 10;
  align-items: center;
  justify-content: center;
  border-radius: 40;
`;

const LoginButtonText = styled.Text`
  color: #ffffff;
  font-size: 22;
  font-weight: 800;
`;

const SignUpText = styled.Text`
  color: rgb(29, 161, 242);
  font-size: 22;
  font-weight: 800;
`;

const ButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  position: absolute;
  padding: 12px;
  bottom: 20;
`;

class UserMenu extends Component {
  static navigationOptions = {
    header: null,
    gesturesEnabled: false
  };
  goLogin = () => {
    this.props.navigation.navigate("Login");
  };

  goSignUp = () => {
    this.props.navigation.navigate("SignUp");
  };

  render() {
    return (
      <BackgroundView>
        <Svg
          style={{
            width: birdWidth,
            height: birdWidth,
            marginLeft: -210,
            marginTop: 10
          }}
          viewBox="0 0 24 24"
        >
          <Path
            fill="#71c9f8"
            d="M23.643 4.937c-.835.37-1.732.62-2.675.733a4.67 4.67 0 0 0 2.048-2.578 9.3 9.3 0 0 1-2.958 1.13 4.66 4.66 0 0 0-7.938 4.25 13.229 13.229 0 0 1-9.602-4.868c-.4.69-.63 1.49-.63 2.342A4.66 4.66 0 0 0 3.96 9.824a4.647 4.647 0 0 1-2.11-.583v.06a4.66 4.66 0 0 0 3.737 4.568 4.692 4.692 0 0 1-2.104.08 4.661 4.661 0 0 0 4.352 3.234 9.348 9.348 0 0 1-5.786 1.995 9.5 9.5 0 0 1-1.112-.065 13.175 13.175 0 0 0 7.14 2.093c8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602a9.47 9.47 0 0 0 2.323-2.41z"
          />
        </Svg>
        <ActionView>
          <WelcomeText>Welcome to {"\n"}Twitter</WelcomeText>
          <DescriptionText>
            See what’s happening in the world right now.
          </DescriptionText>
        </ActionView>
        <ButtonsContainer>
          <SignUpButton onPress={this.goSignUp}>
            <SignUpText>Sign up</SignUpText>
          </SignUpButton>
          <LoginButton onPress={this.goLogin}>
            <LoginButtonText>Log in</LoginButtonText>
          </LoginButton>
        </ButtonsContainer>
      </BackgroundView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
export default UserMenu;
