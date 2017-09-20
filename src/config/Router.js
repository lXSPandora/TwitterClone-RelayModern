import { StackNavigator } from "react-navigation";
import Feed from "../componets/tweetsFeed/Feed";
import Details from "../componets/tweetsDetails/Details";
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
    Details: {
      screen: Details
    },
    Create: {
      screen: Create
    }
  },
  {
    initialRouteName: "Splash"
  }
);
