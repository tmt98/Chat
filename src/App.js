import React, {Component} from 'react'
import {View,
	AppRegistry,
	TouchableOpacity
} from 'react-native'
import Login from './screens/Login'

import { Provider} from 'react-redux'
// import store from './store'
import Home from './screens/Home/Home';
import TabDemo from './screens/Homes/index'
import Friends from './screens/Homes/Friend/Friends'
import Chat from './screens/Chat';

export default class App extends Component{
	render(){
		return(
			<TabDemo/>

			);
	}
}
//AppRegistry.registerComponent("chatapp",()=> App);