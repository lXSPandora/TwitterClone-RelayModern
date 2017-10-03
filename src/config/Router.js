import { StackNavigator } from "react-navigation";
import Feed from "../components/tweetsFeed/Feed";
import UserMenu from "../components/user/UserMenu";
import Login from "../components/user/Login";
import SignUp from "../components/user/SignUp";
import Splash from "../components/splash/Splash";
import Create from "../components/tweetsCreate/Create";

export const Router = StackNavigator(
  {
    Splash: {
      screen: Splash
    },
    Feed: {
      screen: Feed
    },
    Login: {
      screen: Login
    },
    UserMenu: {
      screen: UserMenu
    },
    SignUp: {
      screen: SignUp
    },
    Create: {
      screen: Create
    }
  },
  {
    initialRouteName: "Splash"
  }
);
