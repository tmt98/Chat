/**
 * @format
 */


import {AppRegistry, StyleSheet, Text,View} from 'react-native';
import React, {Component} from 'react'

import {name as appName} from './app.json';

import Splash from './src/screens/Splash'
//import Home from './src/screens/Home'
//import GG from './GG'
import RootNavigation from './src/navigations/RootNavigation'
//import TestFireBase from './TestFireBase'

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentScreen : 'Splash'
        }
    }
    
    render(){
        setTimeout(() => {
            this.setState({
                currentScreen:'Login'
            })
        }, 3000)
        const {currentScreen} = this.state
        let mainScreen = currentScreen === 'Splash' ? <Splash/> : <RootNavigation/>
        return mainScreen
    }
    
}
AppRegistry.registerComponent('chatapp', () => Main);



