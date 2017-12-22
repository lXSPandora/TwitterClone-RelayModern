// @flow
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Animated,
  ActivityIndicator
} from "react-native";
import styled from "styled-components/native";
import PostCard from "../common/PostCard";
import { QueryRenderer, graphql } from "react-relay";
import env from "../../config/Enviroment";
import Snackbar from "react-native-snackbar";
import { withNavigation } from "react-navigation";
import hoistStatics from "hoist-non-react-statics";

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

@withNavigation
class Feed extends Component {
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
    const { tweets, me } = this.props;
    console.log(this.props);
    return (
      <View style={styles.container}>
        <Header style={styles.shadow}>
          <ProfilePicture source={{ uri: me.image }} />
          <HeaderText>Home</HeaderText>
        </Header>
        <ScrollView>
          {tweets.edges.map((tweet, i) => (
            <PostCard
              user={tweet.node.username}
              description={tweet.node.text}
              likes={tweet.node.likes}
              image={tweet.node.userImage}
              userLogged={me.name}
              key={tweet.node.id}
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

const query = graphql`
  query FeedQuery {
    me {
      image
      name
    }
    tweets {
      edges {
        node {
          id
          username
          userImage
          text
          likes
        }
      }
    }
  }
`;

const FeedQueryRenderer = () => (
  <QueryRenderer
    environment={env}
    // variables={variables}
    query={query}
    render={({ error, props }) => {
      if (error) {
        return Snackbar.show({
          title: "An unexpected error occurred",
          duration: Snackbar.LENGTH_INDEFINITE,
          action: {
            title: "OK",
            color: "rgb(0, 148, 255)"
          }
        });
      } else if (props) {
        return <Feed {...props} />;
      }
      return (
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <ActivityIndicator
            animating={true}
            size="large"
            color="rgb(0, 148, 255)"
          />
        </View>
      );
    }}
  />
);

export default hoistStatics(FeedQueryRenderer, Feed);
