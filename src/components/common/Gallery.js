// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components/native';
import BackArrow from '../icons/BackArrow';
import CameraRollPicker from 'react-native-camera-roll-picker';
import { imageAdd } from '../../redux/actions/appActions';

const Wrapper = styled.View`
  flex: 1;
  background-color: #fff;
`;

const Header = styled.View`
  padding-top: 20;
  flex-direction: row;
  align-items: center;
  height: 70;
`;

const BackButton = styled.TouchableOpacity`
  width: 20;
  margin-left: 5;
`;

const ActionButton = styled.TouchableOpacity`
  background-color: rgb(28, 156, 235);
  align-items: center;
  justify-content: center;
  width: 60;
  height: 60;
  border-radius: 30;
  bottom: 20;
  right: 20;
  position: absolute;
`;

const Title = styled.Text`
  color: black;
  font-size: 22;
  font-weight: bold;
  margin-left: 25;
`;

const CheckIcon = styled.Image`
  width: 20;
  height: 20;
  tint-color: #fff;
`;

class Gallery extends Component {
  static navigationOptions = {
    header: null,
  };
  state = {
    num: 0,
    image: [],
    uri: '',
  };

  getSelectedImage = (images: Image[]) => {
    // TODO - handle multiple images

    this.setState({
      image: images,
      uri: images[0].uri,
    });
  };

  confirmSelection = async () => {
    const { uri } = this.state;

    await this.props.imageAdd(uri);

    this.props.navigation.goBack();
  };

  render() {
    console.log(this.state);
    console.log(this.props);
    return (
      <Wrapper>
        <Header>
          <BackButton>
            <BackArrow size={20} color="black" />
          </BackButton>
          <Title>Pick a profile picture</Title>
        </Header>
        <CameraRollPicker
          callback={this.getSelectedImage}
          imagesPerRow={3}
          imageMargin={1}
          maximum={1}
          selected={this.state.image}
          emptyText="Carregando imagens"
          selectSingleItem={true}
        />
        <ActionButton
          onPress={this.confirmSelection}
          style={{
            shadowColor: 'grey',
            shadowOffset: { width: 1, height: 1 },
            shadowOpacity: 1.0,
          }}
        >
          <CheckIcon source={require('../../img/check.png')} />
        </ActionButton>
      </Wrapper>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  imageAdd: uri => dispatch(imageAdd(uri)),
});

export default connect(null, mapDispatchToProps)(Gallery);
