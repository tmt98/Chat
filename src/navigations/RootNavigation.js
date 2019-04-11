import {createStackNavigator,createAppContainer} from 'react-navigation'


// import RootStack from './RootStack'
import React from 'react';
import Login from '../screens/Login'
import Chat from '../screens/Chat'
import HomeScreen from './HomeScreen'
import DetailsScreen from './DetailsScreen'
const RootStack = createStackNavigator(
  {
    Login: Login,
    Chat : Chat,
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
