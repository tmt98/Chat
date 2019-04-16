import React from 'react';
import { Text, View,Button} from 'react-native';


export default class ListChat extends React.Component {
    constructor(props) {
      super(props);
    }
  
    
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Home!</Text>
          <Button
            title="Go to Chat"
            onPress={() => this.props.navigation.navigate('Chat')}
          />
          
        </View>
      );
    }
  }