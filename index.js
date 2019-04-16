/**
 * @format
 */
 import React, {Component} from 'react'
import {AppRegistry} from 'react-native';
import App from './src/App';
import Splash from './src/screens/Splash';
import {name as appName} from './app.json';
import RootNavigation from'./src/navigations/RootNavigation'



// import {name as appName} from './app.json';

// import Login from './src/screens/Login'
//import Home from './src/screens/Home'
//import GG from './GG'
// import RootNavigation from './src/navigations/RootNavigation'



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
        let mainScreen = currentScreen === 'Splash' ? <Splash/> : <RootNavigation/>
        return mainScreen
    }
}
AppRegistry.registerComponent(appName, () => Main);
// AppRegistry.registerComponent('chatapp', () => Main);

