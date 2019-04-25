// import { createBottomTabNavigator } from 'react-navigation';
// import home from './home';
// import setting from './setting'
// import Friends from './Friends'

// let routeConfigs = {
//   'Home': {
//     screen: home,
//   },
//   'Setting': {
//     screen: setting,
//   },
//   'Friends': {
//     screen: Friends,
//   },
// };

// let tabNavigatorConfig = {
//   tabBarPosition: 'bottom',
//   animationEnabled: true,
//   swipeEnabled: true,
//   tabBarOptions: {
//     showIcon: true,
//     activeTintColor: 'blue',
//     labelStyle: {
//       fontSize: 13,
//     },
//     style: {
//       backgroundColor: 'lightgray',
//       padding: -10
//     },
//   },
//   order: ['Home', 'Friends', 'Setting'],
// };

// export const TabNavigator = createBottomTabNavigator(routeConfigs, tabNavigatorConfig);
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/FontAwesome'
import {Dimensions} from 'react-native'
import Home from './Home'
import Friends from './Friends'
import Setting from './Setting'

const deviceW = Dimensions.get('window').width

const basePx = 375

function px2dp(px) {
  return px *  deviceW / basePx
}

class TrangChu extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Home/>
      </View>
    )
  }
}

class Friend extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Friends/>
      </View>
    )
  }
}

class CaiDat extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Setting/>
      </View>
    )
  }
}

export default class TabDemo extends Component {
  state= {
    selectedTab: 'home'
  };

  render() {
    return (
      <TabNavigator style={styles.container}>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'home'}
          title="Trang chủ"
          selectedTitleStyle={{color: "#3496f0"}}
          renderIcon={() => <Icon name="home" size={px2dp(22)} color="#666"/>}
          renderSelectedIcon={() => <Icon name="home" size={px2dp(22)} color="#3496f0"/>}
          badgeText="1"
          onPress={() => this.setState({selectedTab: 'home'})}>
          <TrangChu/>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'friends'}
          title="Bạn bè"
          selectedTitleStyle={{color: "#3496f0"}}
          renderIcon={() => <Icon name="user" size={px2dp(22)} color="#666"/>}
          renderSelectedIcon={() => <Icon name="user" size={px2dp(22)} color="#3496f0"/>}
          onPress={() => this.setState({selectedTab: 'friends'})}>
          <Friend/>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'setting'}
          title="Cài đặt"
          selectedTitleStyle={{color: "#3496f0"}}
          renderIcon={() => <Icon name="home" size={px2dp(22)} color="#666"/>}
          renderSelectedIcon={() => <Icon name="home" size={px2dp(22)} color="#3496f0"/>}
          onPress={() => this.setState({selectedTab: 'setting'})}>
          <CaiDat/>
        </TabNavigator.Item>
      </TabNavigator>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  }
})