
import React, { Component } from 'react';
import { View, Image, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail,Separator, Text, Icon,Card, CardItem, Button} from 'native-base';
import SearchInput, { createFilter } from 'react-native-search-filter';
const KEYS_TO_FILTERS = ['name'];
export default class RequestFriend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requestFriend: [],
      sendRequestFriend:[]
    }
  }
  getRequestFriendFromApi = async () =>{
    try {
      let response = await fetch (
        link +'requestFriend/1',
      );
      let responseJson = await response.json();
      this.setState({
        requestFriend: responseJson
      },
      function(){

      })
    } catch (error) {
      console.error (error)
    }
  }
  getSendRequestFriendFromApi = async () =>{
    try {
      let response = await fetch (
        link +'sendRequestFriend/1',
      );
      let responseJson = await response.json();
      this.setState({
        sendRequestFriend: responseJson
      },
      function(){

      })
    } catch (error) {
      console.error (error)
    }
  }
  async componentDidMount(){
    await this.getRequestFriendFromApi()
    await this.getSendRequestFriendFromApi()
  }

  render() {
    const {requestFriend, sendRequestFriend}= this.state
    return (
      <View style={styles.container}>
        <Container>
          <ScrollView>
            <Content >
              <Separator bordered>
                <Text>DANH SÁCH LỜI MỜI KẾT BẠN</Text>
              </Separator>
              {
                requestFriend.map((u, i)=>{
                  return(
                  
                      <ListItem avatar  key={i}>
                        <Left>
                          <Thumbnail source={{ uri: u.Avatar }} />
                        </Left>
                        <Body>
                          <Text >{u.Name}</Text>
                          <Text note>Muốn kết bạn</Text>
                        </Body>        
                        <Right >
                            <Button rounded success small>
                              <Text>Đồng ý</Text>
                            </Button>
                          {/* <Icon active nam  e='video-camera'></Icon> */}
                        </Right>
                      </ListItem>
                
                  
                  
                )
              })
            }
            </Content>
            <Content >
              <Separator bordered>
                <Text>DANH SÁCH GỬI ĐÃ GỬI YÊU CẦU KẾT BẠN</Text>
              </Separator>
              {
                sendRequestFriend.map((u, i)=>{
                  return(
                  
                      <ListItem avatar  key={ i}>
                        <Left>
                          <Thumbnail source={{ uri: u.Avatar }} />
                        </Left>
                        <Body>
                          <Text >{u.Name}</Text>
                          <Text note>Muốn kết bạn</Text>
                        </Body>        
                        <Right >
                            <Button rounded success small>
                              <Text>Đồng ý</Text>
                            </Button>
                          {/* <Icon active nam  e='video-camera'></Icon> */}
                        </Right>
                      </ListItem>
                
                  
                  
                )
              })
            }
            </Content>
          </ScrollView>
        </Container>
      </View>
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