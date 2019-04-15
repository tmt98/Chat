
import {createStackNavigator,createAppContainer,createSwitchNavigator} from 'react-navigation'


// import RootStack from './RootStack'
import React from 'react';
import Login from '../screens/Login'
import Splash from '../screens/Splash'
import Chat from '../screens/Chat'
import HomeScreen from './HomeScreen'
import DetailsScreen from './DetailsScreen'
import Home from '../screens/Home'
import App from './../App'

const RootStack = createSwitchNavigator(
  {
    Login: Login,
    Home : Home,
    App : App
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
