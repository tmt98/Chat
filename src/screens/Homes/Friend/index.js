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
        const users = [
            {
              key:1,
               name: 'Nguyễn Hiếu',
               avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
            },
            {
              key:2,
              name: 'Trần Mạnh Tùng',
              avatar: 'https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-simple-512.png',
           },
           {
             key:3,
              name: 'Lê Công Thương',
              avatar: 'http://24htinhyeu.net/wp-content/uploads/2017/05/avatar-cap-999-anh-cap-doi-facebook-cho-2-nguoi-de-thuong-nhat-30..jpg',
            },
            {
              key:4,
              name: 'Kumar Pratik',
              avatar: 'http://farm4.staticflickr.com/3770/33711721016_a3856cde6f_o.jpg',
            },
            {
              key:5,
              name: 'Nguyen Hieu',
              avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
           },
           {
             key:6,
             name: 'Tran Manh Tung',
             avatar: 'https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-simple-512.png',
          },
          {
            key:7,
             name: 'Le Cong Thuong',
             avatar: 'http://24htinhyeu.net/wp-content/uploads/2017/05/avatar-cap-999-anh-cap-doi-facebook-cho-2-nguoi-de-thuong-nhat-30..jpg',
           },
           {
             key:8,
             name: 'Kumar',
             avatar: 'http://farm4.staticflickr.com/3770/33711721016_a3856cde6f_o.jpg',
           },
        ]
        const filteredName = users.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
      
        return (
            <Container>
                <Header style={{ backgroundColor: '#1ab2ff', width:'100%', flexDirection:'row'}} hasTabs>
                    <View style={{flex:1, alignItems:'center'}}>
                        <Icon active name='search' color='white' style={{alignItems:'center'}}></Icon>
                    </View>
                    <View style={{flex:4}}>
                        <SearchInput 
                            onChangeText={(term) => { this.searchUpdated(term) }} 
                            style={styles.searchInput}
                            placeholder="Tìm bạn bè ..."
                            />
                    </View>
                </Header>
                <Tabs style={{backgroundColor:'white'}}>
                    <Tab heading={ <TabHeading><Icon name="camera" /><Text>Bạn bè</Text></TabHeading>}>
                        <Friends />
                    </Tab>
                    <Tab heading={ <TabHeading><Text>Lời mời</Text></TabHeading>}>
                        <AllUser />
                    </Tab>
                    <Tab heading={ <TabHeading><Text>Người dùng</Text></TabHeading>}>
                        <RequestFriend />
                    </Tab>
                </Tabs>
            </Container>
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