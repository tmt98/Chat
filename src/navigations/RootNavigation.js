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





const ListChatStack= createStackNavigator(
  {
    ListChat: ListChat,
    Chat: Chat
  },
  {
    initialRouteName:'ListChat'
  }
)
 const Home = createAppContainer(
  createBottomTabNavigator(
    {
      ListChatStack: { screen: ListChatStack },
      Settings: { screen: Personalize },

    },
    // {
    //   defaultNavigationOptions: ({ navigation }) => ({
    //     tabBarIcon: ({ focused, tintColor }) =>
    //       getTabBarIcon(navigation, focused, tintColor),
    //   }),
    //   tabBarOptions: {
    //     activeTintColor: 'tomato',
    //     inactiveTintColor: 'gray',
    //   },
    // }
  )
);


const RootStack = createSwitchNavigator(
  {
    App : App,
    createAccount: createAccount,
     Home : Home,
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
