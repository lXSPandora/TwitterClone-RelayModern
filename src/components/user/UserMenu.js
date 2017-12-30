// @flow
import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import styled from 'styled-components/native';
import Svg, { Path } from 'react-native-svg';
import TwitterIcon from '../icons/TwitterIcon';

const { width } = Dimensions.get('window');

const birdWidth = width + 220;

const BackgroundView = styled.View`
  background-color: rgb(29, 161, 242);
  flex: 1;
`;

const WelcomeText = styled.Text`
  color: #ffffff;
  font-size: 50;
  font-weight: 700;
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
  padding-horizontal: 40;
  padding-vertical: 10;
  align-items: center;
  margin-horizontal: 10;
  justify-content: center;
  border-radius: 45;
`;

const LoginButton = styled.TouchableOpacity`
  border-style: solid;
  border-width: 1;
  border-color: #ffffff;
  padding-horizontal: 40;
  padding-vertical: 10;
  align-items: center;
  justify-content: center;
  border-radius: 40;
  margin-horizontal: 10;
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
  left: 0;
  right: 0;
  bottom: 20;
`;

class UserMenu extends Component {
  static navigationOptions = {
    header: null,
    gesturesEnabled: false,
  };
  goLogin = () => {
    this.props.navigation.navigate('Login');
  };

  goSignUp = () => {
    this.props.navigation.navigate('SignUp');
  };

  render() {
    return (
      <BackgroundView>
        <TwitterIcon
          style={{
            marginLeft: -210,
            marginTop: 10,
          }}
          size={birdWidth}
          color="#71c9f8"
        />
        <ActionView>
          <WelcomeText>Welcome to {'\n'}Twitter</WelcomeText>
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
    flex: 1,
  },
});
export default UserMenu;
