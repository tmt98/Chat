import React, {Component} from 'react'
import {View,
		AppRegistry,
		TouchableOpacity} from 'react-native'
import Login from './screens/Login'
import Personal from './screens/canhan.js'

import { Provider} from 'react-redux'
import store from './store'

export default class App extends Component{

	render(){
		return(
				<Provider store={store}>
					<Personal />
				</Provider>

			);
	}
}
AppRegistry.registerComponent("chatapp",()=> App);
