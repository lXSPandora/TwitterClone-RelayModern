// @flow
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import styled from "styled-components/native";
import Svg, { Path } from "react-native-svg";

const LogoView = styled.View`
  align-items: center;
  justify-content: center;
`;

const LogoText = styled.Text`
  font-size: 22;
  text-align: center;
  margin-top: 20;
`;

const LoginButton = styled.TouchableOpacity`
  background-color: rgb(29, 161, 242);
  padding-vertical: 10;
  align-items: center;
  justify-content: center;
  margin-horizontal: 10;
  border-radius: 30;
  margin-top: 20;
`;

const LoginButtonText = styled.Text`
  color: #ffffff;
  font-size: 22;
  font-weight: 800;
`;

const Input = styled.TextInput`
  background-color: rgb(245, 248, 250);
  color: rgb(101, 119, 134),
  border-radius: 40;
  font-weight: 600;
  padding-horizontal: 20;
  padding-vertical: 15;
  margin-top: 10;
  margin-horizontal: 10;
`;

const BackButtonView = styled.View`
  align-items: flex-start;
  padding: 10px;
`;

const BackButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;

const ForgetPassword = styled.Text`
  margin-vertical: 20;
  text-align: center;
  margin-horizontal: 10;
  font-weight: 500;
  color: rgb(29, 161, 242);
`;

class Login extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <View style={styles.container}>
        <BackButtonView>
          <BackButton
            onPress={() => {
              this.props.navigation.goBack();
            }}
          >
            <Svg
              style={{
                width: 20,
                height: 20,
                marginVertical: 30,
                marginHorizontal: 10
              }}
              viewBox="0 0 1000 1000"
              enableBackground="new 0 0 1000 1000"
            >
              <Path d="M990 503.4c0 25.9-21 46.9-46.9 46.9H56.9c-25.9 0-46.9-21-46.9-46.9v-4.6c0-25.9 21-46.9 46.9-46.9H943c25.9 0 46.9 21 46.9 46.9v4.6z" />
              <Path d="M430.9 131.1c18.3 18.3 18.3 48.1 0 66.4L93.1 535.2c-18.3 18.3-48.1 18.3-66.4 0l-2.9-2.9c-18.3-18.3-18.3-48 .1-66.3l337.7-337.7c18.3-18.3 48.1-18.3 66.4 0l2.9 2.8z" />
              <Path d="M430.9 868.9c18.3-18.3 18.3-48.1 0-66.4L93.1 464.8c-18.3-18.3-48.1-18.3-66.4 0l-2.9 2.9c-18.3 18.3-18.3 48 .1 66.3l337.7 337.7c18.3 18.3 48.1 18.3 66.4 0l2.9-2.8z" />
            </Svg>
          </BackButton>
        </BackButtonView>
        <LogoView>
          <Svg
            style={{
              width: 45,
              height: 45,
              marginTop: 10
            }}
            viewBox="0 0 24 24"
          >
            <Path
              fill="rgb(29, 161, 242)"
              d="M23.643 4.937c-.835.37-1.732.62-2.675.733a4.67 4.67 0 0 0 2.048-2.578 9.3 9.3 0 0 1-2.958 1.13 4.66 4.66 0 0 0-7.938 4.25 13.229 13.229 0 0 1-9.602-4.868c-.4.69-.63 1.49-.63 2.342A4.66 4.66 0 0 0 3.96 9.824a4.647 4.647 0 0 1-2.11-.583v.06a4.66 4.66 0 0 0 3.737 4.568 4.692 4.692 0 0 1-2.104.08 4.661 4.661 0 0 0 4.352 3.234 9.348 9.348 0 0 1-5.786 1.995 9.5 9.5 0 0 1-1.112-.065 13.175 13.175 0 0 0 7.14 2.093c8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602a9.47 9.47 0 0 0 2.323-2.41z"
            />
          </Svg>
          <LogoText>Log in to Twitter</LogoText>
        </LogoView>
        <View style={{ marginTop: 40, flex: 1 }}>
          <Input
            placeholder="Email"
            placeholderTextColor="rgb(101, 119, 134)"
          />
          <Input
            placeholder="Password"
            placeholderTextColor="rgb(101, 119, 134)"
          />
          <LoginButton>
            <LoginButtonText>Log in</LoginButtonText>
          </LoginButton>
          <ForgetPassword>Forgot my Password</ForgetPassword>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  }
});
export default Login;
