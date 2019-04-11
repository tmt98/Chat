/**
 * @format
 */
 import React, {Component} from 'react'
import {AppRegistry} from 'react-native';
import App from './src/App';
import Splash from './src/screens/Splash';
//export default class App extends Component{
//
//	render(){
//		return(
//			<App />
//			);
//	}
//}
class Main extends Component {
    constructor(props){
        super(props);
        this.state = { currentScreen: 'Splash'};
        setTimeout(()=>{
            this.setState({currentScreen: 'Login'})
        }, 5000)
    }
    render(){
        const {currentScreen} = this.state
        let mainScreen = currentScreen === 'Splash' ? <Splash/> : <App/>
        return mainScreen
    }
}
AppRegistry.registerComponent('chatapp', () => Main);
/*
import {AppRegistry, StyleSheet, Text,View} from 'react-native';
import Login from './src/components/Login.js';
import {name as appName} from './app.json';
*/
//AppRegistry.registerComponent(appName, () => Login);
