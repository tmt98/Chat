// import React,{Component} from 'react'
// import RootNavigation from './navigations/RootNavigation'
// import {connect} from 'react-redux'
// class AppNavigator extends Component{
// 	render(){
// 		return(
// 			<RootNavigation navigation={{
// 				dispath: this.props.dispath,
// 				state: this.props.nav

// 			}}

// 			/>
// 			)
// 	}
// }
// const mapStateToProps= (state)=>{
// 	return {nav:state.nav}
// }
// export default connect(mapStateToProps)(AppNavigator);
import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Login from './src/screens/Login'
class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Home: Login,
  Settings: SettingsScreen,
});
const tab=createAppContainer(TabNavigator);
export default tab;