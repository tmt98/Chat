import React, { Component } from 'react';
import { Container, Content, Tabs, Tab, TabHeading, Text, Icon , Header} from 'native-base';
import { View, StyleSheet } from 'react-native';
import Friends from './Friends'
import AllUser from './AllUser'
import RequestFriend from './RequestFriend'
import SearchInput, { createFilter } from 'react-native-search-filter';
const KEYS_TO_FILTERS = ['name'];
export default class Friend extends Component {
    constructor(props) {
        super(props);
        this.state = {
          searchTerm: ''
        }
      }
      searchUpdated(term) {
        this.setState({ searchTerm: term })
      }
    
    render() {
        return (
            
                // <Header style={{ backgroundColor: '#1ab2ff', width:'100%', }} hasTabs>
                    
                    <Tabs >
                    <Tab heading={ <TabHeading><Icon name="home" /><Text>Bạn bè</Text></TabHeading>}>
                        <Friends />
                    </Tab>
                    <Tab heading={ <TabHeading><Text>Lời mời</Text></TabHeading>}>
                        <RequestFriend />
                    </Tab>
                    <Tab heading={ <TabHeading><Text>Kết bạn</Text></TabHeading>}>
                        <AllUser />
                    </Tab>
                </Tabs>
                // </Header>
                
           
        );
    }
}
const styles = StyleSheet.create({
    container:{
      flexDirection:'column',
      justifyContent: 'center',
      flex:1,
      width: '100%'
    },
    searchInput:{
      margin:8,
      width:'90%',
      borderColor: 'white',
      borderWidth: 1,
      borderRadius: 40,
    }
  })