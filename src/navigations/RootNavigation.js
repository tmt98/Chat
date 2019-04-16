
import {createStackNavigator,createAppContainer,createSwitchNavigator,createBottomTabNavigator} from 'react-navigation'


// import RootStack from './RootStack'
import React from 'react';
import Login from '../screens/Login'

import App from './../App'
import ListChat from '../screens/Home/ListChat'
import SettingsScreen from '../screens/Home/SettingsScreen'
import getTabBarIcon from '../screens/Home/Icon'
// import Home from '../screens/Home/Home'







// const ListChatStack= createStackNavigator(
//   {
//     ListChat: ListChat,
//     Chat: Chat
//   },
//   {
//     initialRouteName:'ListChat'
//   }
// )
//  const Home = createAppContainer(
//   createBottomTabNavigator(
//     {
//       ListChatStack: { screen: ListChatStack },
//       Settings: { screen: SettingsScreen },

//     },
//     // {
//     //   defaultNavigationOptions: ({ navigation }) => ({
//     //     tabBarIcon: ({ focused, tintColor }) =>
//     //       getTabBarIcon(navigation, focused, tintColor),
//     //   }),
//     //   tabBarOptions: {
//     //     activeTintColor: 'tomato',
//     //     inactiveTintColor: 'gray',
//     //   },
//     // }
//   )
// );


const RootStack = createSwitchNavigator(
  {
    Login: Login,
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
