// @flow
import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, Animated } from "react-native";
import styled from "styled-components/native";
import PostCard from "../common/PostCard";

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

const ProfilePicturePost = styled.Image`
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

const ViewAnimated = Animated.createAnimatedComponent(View);

const Separator = styled.View`
  height: 1;
`;

const data = [
  {
    user: "C3P0",
    description:
      'When your PR start growing up and when you look to that you stop and think - "I Created a Monsteeer!!"',
    title: "Monster PR",
    likes: 13,
    image: require("../../img/c3po.png")
  },
  {
    user: "R2D2",
    description:
      'Some people like cars, others like cell phones and now you ask me what i like? - "CODEEEE EDITORS!!!"',
    title: "Code Editors",
    likes: 90,
    image: require("../../img/r2d2.png")
  },
  {
    user: "R2D2",
    description:
      'BeeYoop BeeDeepBoom Weeop DEEpaEEya: "Please dont run the latest update."',
    title: "BEEEEEEP",
    likes: 32,
    image: require("../../img/r2d2.png")
  }
];

class Feed extends Component {
  static navigationOptions = {
    header: null,
    gesturesEnabled: false
  };

  state = {
    liked: false,
    likes: 0,
    likeImg: require("../../img/heart.png"),
    scaleAnimated: new Animated.Value(2)
  };

  Create = () => {
    this.props.navigation.navigate("Create");
  };

  startViewAnimated = () => {
    const { scaleAnimated, username } = this.state;

    Animated.sequence([
      Animated.timing(scaleAnimated, {
        duration: 2000,
        toValue: 0.1
      }),
      Animated.timing(scaleAnimated, {
        duration: 500,
        toValue: 500
      })
    ]).start(() => {
      if (username === null) {
        this.props.navigation.navigate("UserMenu");
      } else {
        this.props.navigation.navigate("Feed");
      }
    });
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
      this.setState({
        likeImg: require("../../img/heartFilled.png")
      });
    } else {
      let newLikes = likes - 1;
      this.setState({
        liked: false
      });
      this.setState({
        likes: newLikes
      });
      this.setState({
        likeImg: require("../../img/heart.png")
      });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Header style={styles.shadow}>
          <ProfilePicture source={require("../../img/profileEgg.png")} />
          <HeaderText>Home</HeaderText>
        </Header>
        <ScrollView>
          {/* <PostCard title="Oh My God" user="C3PO" */}
          {/* <PostView style={{ marginBottom: 10, marginTop: 10 }}>
            <PostColumns>
              <ProfilePicturePost
                style={styles.shadow}
                source={require("../../img/c3po.png")}
              />
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
                <Icon source={this.state.likeImg} />
                <Text>{this.state.likes}</Text>
              </IconButton>
            </PostColumns>
          </PostView> */}
          {data.map((tweet, i) => (
            <PostCard
              user={tweet.user}
              title={tweet.title}
              description={tweet.description}
              likes={tweet.likes}
              image={tweet.image}
              key={i}
            />
          ))}
        </ScrollView>
        <ActionButton onPress={this.Create} style={styles.shadow}>
          <ActionButtonLogo source={require("../../img/compose.png")} />
        </ActionButton>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9"
  },
  shadow: {
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#777777",
    shadowOpacity: 1.0
  }
});

export default Feed;
