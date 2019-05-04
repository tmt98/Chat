import React, { Component } from 'react';
import { View, Image, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import image from './../../image/wall.png'
import avatar from './../../image/background-image.jpg'
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
import Chat from '../Chat';
import { createStackNavigator,createBottomTabNavigator, createAppContainer } from 'react-navigation';
import link from '../../server'
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message : [],
      user : ''
    }
  }
  
 getMessageFromApi=async()=> {
    try {
      let response = await fetch(
        link +'message/1',
      );
      let responseJson = await response.json();
      this.setState({
        message: responseJson
      },
      function(){

      })
    } catch (error) {
      console.error(error);
    }
  }

  getUserFromApi = async () =>{
    try {
      let response = await fetch (
        link +'users/2',
      );
      let responseJson = await response.json();
      this.setState({
        user: responseJson
      },
      function(){

      })
    } catch (error) {
      console.error (error)
    }
  }
  async componentDidMount(){
    await this.getMessageFromApi()
    await this.getUserFromApi()
  }
  
  render() {
    let mes = this.state.message
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <ImageBackground source={ image } style={{width: '100%', height: '100%', flexDirection:'column'}}>
            {/* <View style={{ flex:3, flexDirection:'row' }}></View>
            <View style={{ flex:1, flexDirection:'row' }}>
              <Image source={ avatar } style={styles.avatar}></Image>
              <Text style={ styles.name }>Nguyễn Hiếu</Text>
            </View> */}
          </ImageBackground>
        </View>
        <View style={styles.down}>
          {/* { (mes != null || this.state.user != null) ? */}
            <ScrollView>
            {
              this.state.message.map((u, i)=>{
                return(
                  <Content key={i}>
                    <List >
                      <ListItem avatar >
                        <Left>
                          <Thumbnail source={{ uri: u.Avatar }} />
                        </Left>
                        <Body>
                          <Text>{ u.Name }</Text>
                          <Text note>{ u.Message }</Text>
                        </Body>
                        <Right>
                          <Text note>{ u.Time }</Text>
                        </Right>
                      </ListItem>
                    </List>
                  </Content>
                )
              })
            }
            </ScrollView>
            {/* :null
          } */}
          
          {/* <Text style={{ fontWeight: 'bold', fontSize: 22, color: 'black' }}>This is Home Screen</Text>
          <Text style={{ fontWeight: 'bold', fontSize: 22, color: 'black' }}>This is Home Screen</Text>
          <Text style={{backgroundColor:'gray', height:1, width:'90%'}}></Text>
          <Text style={{ fontWeight: 'bold', fontSize: 22, color: 'black' }}>This is Home Screen</Text> */}
        </View>
        
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
  top:{
    flex:4,
    flexDirection : 'column',
    justifyContent:'center',
    alignItems:'center',
  },
  down:{
    flex:5,
    flexDirection : 'column',
  },
  avatar:{
    flex:1,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:50,
    height: 60,
    width:60,
    marginLeft:10,
  },
  name:{
    flex:3,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    fontWeight: 'bold',
    fontSize: 22,
  }
})