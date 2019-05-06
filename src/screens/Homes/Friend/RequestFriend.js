
import React, { Component } from 'react';
import { View, Image, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail,Separator, Text, Icon,Card, CardItem, Button} from 'native-base';
import SearchInput, { createFilter } from 'react-native-search-filter';
const KEYS_TO_FILTERS = ['name'];
export default class RequestFriend extends Component {
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
      <View style={styles.container}>
        <Container>
          <ScrollView>
            <Content >
              <Separator bordered>
                <Text>DANH SÁCH LỜI MỜI KẾT BẠN</Text>
              </Separator>
              {
                filteredName.map((u)=>{
                  return(
                  
                      <ListItem avatar  key={ u.key }>
                        <Left>
                          <Thumbnail source={{ uri: u.avatar }} />
                        </Left>
                        <Body>
                          <Text >{u.name}</Text>
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
                filteredName.map((u)=>{
                  return(
                  
                      <ListItem avatar  key={ u.key }>
                        <Left>
                          <Thumbnail source={{ uri: u.avatar }} />
                        </Left>
                        <Body>
                          <Text >{u.name}</Text>
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