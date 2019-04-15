import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json
//import RootStack from './RootStack'
import DetailsScreen from './DetailsScreen'
class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

// const root = createStackNavigator(
//   {
//     Home: HomeScreen,
//     Details: DetailsScreen
//   },
//   {
//     initialRouteName:'Home'
//   }
// )
export default HomeScreen;
