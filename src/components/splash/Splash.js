// @flow
import React, { Component } from 'react';
import {
  Animated,
  View,
  Text,
  StyleSheet,
  ImageBackground,
  AsyncStorage,
} from 'react-native';
import styled from 'styled-components/native';
import Svg, { Path } from 'react-native-svg';

const ViewAnimated = Animated.createAnimatedComponent(View);

const Wrapper = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: rgb(29, 161, 242);
`;

const Logo = styled.ImageBackground`
  width: 100;
  height: 100;
  align-items: center;
  justify-content: center;
`;

class Login extends Component {
  state = {
    scaleAnimated: new Animated.Value(2),
    token: '',
  };

  static navigationOptions = {
    header: null,
  };

  componentDidMount() {
    AsyncStorage.getItem('token')
      .then(this.startViewAnimated)
      .done();
  }

  startViewAnimated = value => {
    const { scaleAnimated } = this.state;
    Animated.sequence([
      Animated.timing(scaleAnimated, {
        duration: 2000,
        toValue: 0.1,
      }),
      Animated.timing(scaleAnimated, {
        duration: 500,
        toValue: 1000,
      }),
    ]).start(() => {
      if (!value) {
        this.props.navigation.navigate('UserMenu');
      } else {
        this.props.navigation.navigate('Feed');
      }
    });
  };

  render() {
    const { scaleAnimated } = this.state;

    return (
      <Wrapper>
        <Svg
          style={{
            width: 70,
            height: 70,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          viewBox="0 0 24 24"
        >
          <Path
            fill="white"
            d="M23.643 4.937c-.835.37-1.732.62-2.675.733a4.67 4.67 0 0 0 2.048-2.578 9.3 9.3 0 0 1-2.958 1.13 4.66 4.66 0 0 0-7.938 4.25 13.229 13.229 0 0 1-9.602-4.868c-.4.69-.63 1.49-.63 2.342A4.66 4.66 0 0 0 3.96 9.824a4.647 4.647 0 0 1-2.11-.583v.06a4.66 4.66 0 0 0 3.737 4.568 4.692 4.692 0 0 1-2.104.08 4.661 4.661 0 0 0 4.352 3.234 9.348 9.348 0 0 1-5.786 1.995 9.5 9.5 0 0 1-1.112-.065 13.175 13.175 0 0 0 7.14 2.093c8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602a9.47 9.47 0 0 0 2.323-2.41z"
          />
          <ViewAnimated
            style={{
              width: 2,
              height: 2,
              borderRadius: 40,
              backgroundColor: 'white',
              justifyContent: 'center',
              alignItems: 'center',
              transform: [
                {
                  scale: scaleAnimated,
                },
              ],
            }}
          />
        </Svg>
      </Wrapper>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default Login;
