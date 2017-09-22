import { StackNavigator } from "react-navigation";
import Feed from "../componets/tweetsFeed/Feed";
import UserMenu from "../componets/user/UserMenu";
import Login from "../componets/user/Login";
import SignUp from "../componets/user/SignUp";
import Splash from "../componets/splash/Splash";
import Create from "../componets/tweetsCreate/Create";

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
    mode: "modal",
    initialRouteName: "Splash"
  }
);
