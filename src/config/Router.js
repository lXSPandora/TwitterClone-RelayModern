import { StackNavigator } from 'react-navigation';
import Feed from '../components/tweetsFeed/Feed';
import UserMenu from '../components/user/UserMenu';
import Login from '../components/user/Login';
import SignUp from '../components/user/SignUp';
import Splash from '../components/splash/Splash';
import Create from '../components/tweetsCreate/Create';
import Gallery from '../components/common/Gallery';

export const Router = StackNavigator(
  {
    Splash: {
      screen: Splash,
    },
    Feed: {
      screen: Feed,
      navigationOptions: {
        header: null,
        gesturesEnabled: false,
      },
    },
    Login: {
      screen: Login,
    },
    UserMenu: {
      screen: UserMenu,
    },
    SignUp: {
      screen: SignUp,
    },
    Create: {
      screen: Create,
    },
    Gallery: {
      screen: Gallery,
    },
  },
  {
    initialRouteName: 'Splash',
    mode: 'modal',
  }
);
