import React, { Component } from 'react';
import { View, Image, StyleSheet, ImageBackground, ScrollView , } from 'react-native';
import { Container, Header,Button, Content, List, ListItem, Left, Body, Right, Thumbnail, Text, Icon,Card, CardItem,Switch  } from 'native-base';

export default class Setting extends Component {
  render() {

    return (
      <View style={styles.container}>
        <Header style={{ backgroundColor: '#1ab2ff'}}>
          <Left>
            <Icon name='arrow-left' style={{ color:'white' }}></Icon>
          </Left>
          <Body>
            <Text style={{ fontWeight: 'bold', fontSize:20, color:'white' }}>Cài đặt</Text>
          </Body>
        </Header>
        <ScrollView>
          <View style={{ margin:10 }}>
            <Body>
              <Thumbnail 
                source={{uri: 'http://farm4.staticflickr.com/3770/33711721016_a3856cde6f_o.jpg'}}
              ></Thumbnail>
              <Text style={{ fontWeight: 'bold', fontSize:20,  }}>Nguyễn Hiếu</Text>
            </Body>
          </View>
          <Text style={{ backgroundColor:'gray', width:'100%', height:1}}></Text>
          <Content>
            <ListItem icon>
              <Left>
                <Button style={{ backgroundColor: "#007AFF" }}>
                  <Icon active name="facebook" />
                </Button>
              </Left>
              <Body>
                <Text>Facebook</Text>
              </Body>
            </ListItem>
            <ListItem icon>
              <Left>
                <Button style={{ backgroundColor: "#FF9501" }}>
                  <Icon active name="log-out" />
                </Button>
              </Left>
              <Body>
                <Text>Đăng xuất</Text>
              </Body>
              <Right>
                <Switch value={false} />
              </Right>
            </ListItem>
          </Content>
        </ScrollView>
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
}) 