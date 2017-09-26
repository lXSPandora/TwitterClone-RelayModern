// @flow
import React, { Component } from "react";
import { View, Text, StyleSheet, Animated } from "react-native";
import styled from "styled-components/native";
import Svg, { Path } from "react-native-svg";
import BackArrow from "../icons/BackArrow";
import TwitterIcon from "../icons/TwitterIcon";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";
import { NavigationActions } from "react-navigation";

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
    scaleAnimated: new Animated.Value(2)
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
      // this.props.navigation.dispatch(resetAction);\
      this.props.navigation.navigate('Feed')
    });
  };

  login = () => {
    // const { navigate } = this.props.navigation;
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
            placeholder="Email"
            placeholderTextColor="rgb(101, 119, 134)"
          />
          <Input
            placeholder="Password"
            placeholderTextColor="rgb(101, 119, 134)"
          />
          <LoginButton onPress={this.startViewAnimated}>
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
