// @flow
import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import styled from "styled-components/native";

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

const ActionButtonLogo = styled.Image`
  width: 30;
  height: 30;
  border-radius: 15;
`;

const Header = styled.View`
  flex-direction: row;
  padding-horizontal: 20;
  padding-top: 30;
  padding-bottom: 10;
  align-items: center;
  background-color: #ffffff;
`;

const HeaderText = styled.Text`
  font-size: 20;
  font-weight: bold;
  color: black;
`;

const ProfilePicture = styled.Image`
  width: 40;
  height: 40;
  border-radius: 20;
  margin-right: 10;
`;

const PostView = styled.View`
  flex-direction: row;
  padding: 20px;
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

class Feed extends Component {
  static navigationOptions = {
    header: null,
    liked: true,
    likes: 0
  };

  Like = () => {
    const { liked, likes } = this.state;
    if (liked === false) {
      let newLikes = likes + 1;
      this.setState({
        liked: true
      });
      this.setState({
        likes: newLikes
      });
    } else {
      let newLikes = likes - 1;
      this.setState({
        liked: false
      });
      this.setState({
        likes: newLikes
      });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Header style={styles.shadow}>
          <ProfilePicture source={require("../../img/profileEgg.jpg")} />
          <HeaderText>Home</HeaderText>
        </Header>
        <ScrollView>
          <PostView>
            <PostColumns>
              <ProfilePicture source={require("../../img/c3po.jpg")} />
            </PostColumns>
            <PostColumns>
              <PostTitle>
                Oh My God <PostUser>@C3PO</PostUser>
              </PostTitle>
              <PostDescription>
                Lets take a look they say! Where we are now lost in the galaxy
                again
              </PostDescription>
              <IconButton onPress={this.Like}>
                <Icon
                  source={
                    this.state.liked === true ? (
                      require("../../img/heart.png")
                    ) : (
                      require("../../img/heartFilled.png")
                    )
                  }
                />
                <Text>{this.state.likes}</Text>
              </IconButton>
            </PostColumns>
          </PostView>
        </ScrollView>
        <ActionButton style={styles.shadow}>
          <ActionButtonLogo source={require("../../img/compose.png")} />
        </ActionButton>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  shadow: {
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "grey",
    shadowOpacity: 1.0
  }
});

export default Feed;
