// @flow
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  AsyncStorage,
} from 'react-native';
import styled from 'styled-components/native';
import Svg, { Path } from 'react-native-svg';
import BackArrow from '../icons/BackArrow';
import TwitterIcon from '../icons/TwitterIcon';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import Snackbar from 'react-native-snackbar';
import commit from './mutation/RegisterEmailMutation';
import * as firebase from 'firebase';
import { firebaseConfig } from '../../config/consts';
import { connect } from 'react-redux';

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
  height: 50;
  flex-direction: row;
`;

const BackButton = styled.TouchableOpacity`
  flex-direction: row;
  width: 30;
  margin-left: 5;
`;

const PictureInput = styled.TouchableOpacity`
  background-color: rgb(245, 248, 250);
  border-radius: 40;
  padding-horizontal: 20;
  padding-vertical: 15;
  margin-top: 10;
  margin-left: 5;
  margin-right: 12;
  flex: 1;
`;

const PicturePreview = styled.View`
  width: 45;
  height: 45;
  border-radius: 22;
  align-items: center;
  justify-content: center;
  background-color: rgb(245, 248, 250);
  margin-top: 10;
  margin-left: 10;
`;

const ProfilePicture = styled.Image`
  width: 45;
  height: 45;
  border-radius: 22;
`;

const CameraIcon = styled.Image`
  height: 20;
  width: 20;
  tint-color: rgb(101, 119, 134);
`;

const PictureInputText = styled.Text`
  color: rgb(101, 119, 134);
`;

const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

class SignUp extends Component {
  state = {
    name: null,
    email: null,
    password: null,
    confirmPassword: null,
  };
  static navigationOptions = {
    header: null,
  };

  goToFeed = async token => {
    await AsyncStorage.setItem('token', token);
    this.props.navigation.navigate('Feed');
  };

  getPicture = () => {
    this.props.navigation.navigate('Gallery');
  };

  registerAndProceed = async (name, email, password, confirmPassword) => {
    if (
      name === null ||
      email === null ||
      password === null ||
      confirmPassword === 'null'
    ) {
      Snackbar.show({
        title: 'Please fill all the fields',
        duration: 3000,
        action: {
          title: 'OK',
          color: 'rgb(0, 148, 255)',
        },
      });
      return;
    }
    if (password !== confirmPassword) {
      Snackbar.show({
        title: 'The confirm password and password must be equal',
        duration: 3000,
        action: {
          title: 'OK',
          color: 'rgb(0, 148, 255)',
        },
      });
      return;
    }

    const userImage = 'https://i.imgur.com/C3YDUHi.png';

    try {
      const token = await commit(email, name, userImage, password); //stores the token inside the token variable

      if (token == null) {
        Snackbar.show({
          title: 'Email already in use',
          duration: 3000,
          action: {
            title: 'DISMISS',
            color: 'rgb(0, 148, 255)',
            action: () => this.goToFeed(),
          },
        });
        return;
      }

      Snackbar.show({
        title: 'The user has been added! Want to make the login?',
        duration: Snackbar.LENGTH_INDEFINITE,
        action: {
          title: 'MAKE LOGIN',
          color: 'rgb(0, 148, 255)',
          action: () => this.goToFeed(token),
        },
      });
    } catch (err) {
      console.log(err.message);
      Snackbar.show({
        title: 'An unexpected error occurred',
        duration: Snackbar.LENGTH_INDEFINITE,
        action: {
          title: 'OK',
          color: 'rgb(0, 148, 255)',
        },
      });
    }
  };

  render() {
    const { name, email, password, confirmPassword } = this.state;
    const { image } = this.props;
    return (
      <View style={styles.container}>
        <BackButtonView>
          <BackButton
            onPress={() => {
              this.props.navigation.goBack();
            }}
          >
            <BackArrow size={20} color="black" />
          </BackButton>
        </BackButtonView>
        <KeyboardAwareScrollView style={styles.container}>
          <LogoView>
            <TwitterIcon size={45} color="rgb(29, 161, 242)" />
            <LogoText>Sign up to Twitter</LogoText>
          </LogoView>
          <View style={{ marginTop: 40, flex: 1 }}>
            <InputContainer>
              <PicturePreview>
                {image === '' && (
                  <CameraIcon source={require('../../img/camera.png')} />
                )}
                {image !== '' && <ProfilePicture source={{ uri: image }} />}
              </PicturePreview>
              <PictureInput onPress={this.getPicture}>
                <PictureInputText>Select a profile picture</PictureInputText>
              </PictureInput>
            </InputContainer>
            <Input
              value={name}
              onChangeText={name => this.setState({ name })}
              placeholder="Username"
              placeholderTextColor="rgb(101, 119, 134)"
            />
            <Input
              value={email}
              onChangeText={email => this.setState({ email })}
              placeholder="Email"
              placeholderTextColor="rgb(101, 119, 134)"
            />
            <Input
              value={password}
              secureTextEntry={true}
              onChangeText={password => this.setState({ password })}
              placeholder="Password"
              placeholderTextColor="rgb(101, 119, 134)"
            />
            <Input
              value={confirmPassword}
              secureTextEntry={true}
              onChangeText={confirmPassword =>
                this.setState({ confirmPassword })
              }
              placeholder="Confirm Password"
              placeholderTextColor="rgb(101, 119, 134)"
            />
            <LoginButton
              onPress={() =>
                this.registerAndProceed(name, email, password, confirmPassword)
              }
            >
              <LoginButtonText>Sign up</LoginButtonText>
            </LoginButton>
          </View>
        </KeyboardAwareScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

const mapStateToProps = state => ({
  image: state.appReducers.image,
});

export default connect(mapStateToProps, null)(SignUp);
