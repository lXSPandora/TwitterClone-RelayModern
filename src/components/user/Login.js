// @flow
import React, { Component } from "react";
import { View, Text, StyleSheet, Animated, AsyncStorage } from "react-native";
import styled from "styled-components/native";
import Svg, { Path } from "react-native-svg";
import BackArrow from "../icons/BackArrow";
import TwitterIcon from "../icons/TwitterIcon";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";
import { NavigationActions } from "react-navigation";
import commit from "./mutation/LoginEmailMutation";
import Snackbar from "react-native-snackbar";

const ViewAnimated = Animated.createAnimatedComponent(View);

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
  background-color: rgba(0, 0, 0, 0);
`;

class Login extends Component {
  static navigationOptions = {
    header: null
  };

  state = {
    scaleAnimated: new Animated.Value(2),
    email: null,
    password: null
  };

  startViewAnimated = () => {
    const { scaleAnimated, username } = this.state;

    Animated.sequence([
      Animated.timing(scaleAnimated, {
        duration: 100,
        toValue: 0.1
      }),
      Animated.timing(scaleAnimated, {
        duration: 300,
        toValue: 1000
      })
    ]).start(() => {
      // const resetAction = NavigationActions.reset({
      //   index: 0,
      //   actions: [NavigationActions.navigate({ routeName: "Feed" })]
      // });
      // this.props.navigation.dispatch(resetAction);
      this.props.navigation.navigate("Feed");
    });
  };

  login = async (email, password) => {
    if (email === null || password === null) {
      Snackbar.show({
        title: "Favor preencher todos os campos",
        duration: Snackbar.LENGTH_INDEFINITE,
        action: {
          title: "OK",
          color: "rgb(0, 148, 255)"
        }
      });
      return;
    }
    try {
      const token = await commit(email, password); //stores the token inside the token variable

      //checking if token is null
      if (token == null) {
        Snackbar.show({
          title: "Usuario não encontrado",
          duration: Snackbar.LENGTH_INDEFINITE,
          action: {
            title: "OK",
            color: "rgb(0, 148, 255)"
          }
        });
        return;
      }

      AsyncStorage.setItem("token", token); // Stores the token on the storage

      return this.startViewAnimated();
    } catch (err) {
      console.log(err.message);
      Snackbar.show({
        title: "Ocorreu um erro inesperado",
        duration: Snackbar.LENGTH_INDEFINITE,
        action: {
          title: "OK",
          color: "rgb(0, 148, 255)"
        }
      });
    }
  };

  render() {
    const { scaleAnimated } = this.state;
    return (
      <KeyboardAwareScrollView style={styles.container}>
        <BackButtonView>
          <BackButton
            onPress={() => {
              this.props.navigation.goBack();
            }}
          >
            <BackArrow size={20} color="black" />
          </BackButton>
        </BackButtonView>
        <LogoView>
          <TwitterIcon size={45} color="rgb(29, 161, 242)" />
          <LogoText>Log in to Twitter</LogoText>
        </LogoView>
        <View style={{ marginTop: 40, flex: 1 }}>
          <Input
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            placeholder="Email"
            placeholderTextColor="rgb(101, 119, 134)"
          />
          <Input
            secureTextEntry={true}
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            placeholder="Password"
            placeholderTextColor="rgb(101, 119, 134)"
          />
          <LoginButton
            onPress={() => this.login(this.state.email, this.state.password)}
          >
            <LoginButtonText>Log in</LoginButtonText>
            <ViewAnimated
              style={{
                width: 1,
                height: 1,
                borderRadius: 100,
                backgroundColor: "rgb(29, 161, 242);",
                transform: [
                  {
                    scale: scaleAnimated
                  }
                ]
              }}
            />
          </LoginButton>
          <ForgetPassword>Forgot my Password</ForgetPassword>
        </View>
      </KeyboardAwareScrollView>
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
