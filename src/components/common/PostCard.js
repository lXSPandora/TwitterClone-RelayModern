// @flow

import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import SparkButton from "react-native-sparkbutton";
import styled from "styled-components/native";

const ProfilePicturePost = styled.Image`
  width: 50;
  height: 50;
  border-radius: 25;
`;

const PictureContainer = styled.View`
  width: 50;
  height: 50;
  border-radius: 25;
  margin-right: 10;
`;

const PostView = styled.View`
  flex-direction: row;
  padding-vertical: 10;
  padding-right: 20;
  padding-left: 10;
`;

const PostColumns = styled.View`
  flex-direction: column;
  justify-content: center;
`;

const PostTitle = styled.Text`
  font-size: 16;
  font-weight: bold;
  color: black;
`;

const PostUser = styled.Text`
  font-size: 16;
  font-weight: bold;
  color: grey;
`;

const PostDescription = styled.Text`
  font-size: 16;
  padding-right: 30;
  color: black;
`;

const IconButton = styled.TouchableOpacity`
  width: 30;
  height: 30;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-top: 2;
  margin-left: -5;
`;

const Icon = styled.Image`
  width: 40;
  height: 40;
`;

class PostCard extends Component {
  state = {
    checked: false,
    likes: 0
  };
  componentWillMount() {
    this.setState({
      likes: this.props.likes
    });
  }
  like = checked => {
    const { likes } = this.state;
    this.setState({
      checked
    });
    this.setState({
      likes: checked ? likes + 1 : likes - 1
    });
  };
  render() {
    const { checked } = this.state;
    const { image, title, user, description, likes } = this.props;
    return (
      <PostView style={{ marginBottom: 10, marginTop: 10 }}>
        <PostColumns>
          <PictureContainer style={styles.shadow}>
            <ProfilePicturePost source={image} style={styles.shadow} />
          </PictureContainer>
        </PostColumns>
        <PostColumns>
          <PostTitle>
            {title} <PostUser>@{user}</PostUser>
          </PostTitle>
          <PostDescription>{description}</PostDescription>
          <IconButton onPress={() => this.like(!checked)}>
            <Icon
              source={
                this.state.checked
                  ? require("../../img/heartFilled.png")
                  : require("../../img/heart.png")
              }
            />
            <Text>{this.state.likes}</Text>
          </IconButton>
        </PostColumns>
      </PostView>
    );
  }
}

const styles = StyleSheet.create({
  shadow: {
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "darkgrey",
    shadowOpacity: 0.5
  }
});

export default PostCard;
