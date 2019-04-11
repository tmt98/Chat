import {createStackNavigator,createAppContainer,createSwitchNavigator} from 'react-navigation'


// import RootStack from './RootStack'
import React from 'react';
import Login from '../screens/Login'
import Chat from '../screens/Chat'
import HomeScreen from './HomeScreen'
import DetailsScreen from './DetailsScreen'
import Home from '../screens/Home'
const RootStack = createSwitchNavigator(
  {
    Login: Login,
    Home : Home,
  },
  {
    initialRouteName: 'Login',
  }
);
// export default RootNavigation;
const AppContainer = createAppContainer(RootStack);

export default class RootNavigation extends React.Component {
  render() {
    return <AppContainer />;
  }
}
