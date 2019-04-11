/**
 * @format
 */


import {AppRegistry, StyleSheet, Text,View} from 'react-native';
//import TabNavigator from './TabNavigator.js';
import { Provider} from 'react-redux'

import {name as appName} from './app.json';
import RootNavigation from'./src/navigations/RootNavigation'
import React from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
// import Login from './src/screens/Login'
import Home from './src/screens/Home'

import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json


AppRegistry.registerComponent(appName, () => RootNavigation);



