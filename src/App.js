import React, {Component} from 'react'
import {View,
		AppRegistry,
		TouchableOpacity} from 'react-native'
import Login from './screens/Login'

import { Provider} from 'react-redux'
import store from './store'

export default class App extends Component{

	render(){
		return(
				<Provider store={store}>
					<Login />
				</Provider>

			);
	}
}
AppRegistry.registerComponent("chatapp",()=> App);