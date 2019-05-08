import {createStackNavigator,createAppContainer,createSwitchNavigator,createBottomTabNavigator} from 'react-navigation'


// import RootStack from './RootStack'
import React from 'react';
import Chat from '../screens/Chat'
import ListChat from '../screens/Home/ListChat'
import SettingsScreen from '../screens/Home/SettingsScreen'
import getTabBarIcon from '../screens/Home/Icon'
// import Home from '../screens/Home/Home'
import Personalize from '../screens/Personalize'
import createAccount from '../screens/createAccount'
import App from '../App'
import TabDemo from '../screens/Homes';

const RootStack = createSwitchNavigator(
  {
    App : App,
    createAccount: createAccount,
    TabDemo : TabDemo,
  },
  {
    initialRouteName: 'App',  
  }
);
// export default RootNavigation;
const AppContainer = createAppContainer(RootStack);

export default class RootNavigation extends React.Component {
  render() {
    return <AppContainer />;
  }
}
