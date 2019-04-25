import React, {Component} from 'react'
import {View,
	AppRegistry,
	TouchableOpacity
} from 'react-native'
import Login from './screens/Login'

import { Provider} from 'react-redux'
import store from './store'
import Home from './screens/Home/Home';
import TabDemo from './screens/Homes/index'

export default class App extends Component{
	render(){
		return(
				<Provider store={store}>
					<Login />
				</Provider>

			);
	}
}
//AppRegistry.registerComponent("chatapp",()=> App);