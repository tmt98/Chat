import React, { Component } from 'react';
import { View, Image, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import image from './../../image/wall.png'
import avatar from './../../image/background-image.jpg'
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
import Chat from '../Chat';
import { createStackNavigator,createBottomTabNavigator, createAppContainer } from 'react-navigation';
export default class Home extends Component {
  constructor(props) {
    super(props);
  }
  // static navigationOptions = ({ navigation }) => {
  //   const { params = {} } = navigation.state;
  //   let tabBarLabel = 'Home';
  //   let tabBarIcon = () => (
  //     <Image
  //       source={''}
  //       style={{ width: 26, height: 26, tintColor: '#0067a7' }}
  //     />
  //   );
  //   return { tabBarLabel, tabBarIcon };
  // }
  
  render() {
    const users = [
      {
         name: 'Nguyễn Hiếu',
         avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
         massage: 'Doing what you like will always keep you happy . .',
         time:'4:00 pm'
      },
      {
        name: 'Trần Mạnh Tùng',
        avatar: 'https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-simple-512.png',
        massage: 'Doing what you like will always keep you happy . .',
        time:'3:45 pm'
     },
     {
        name: 'Lê Công Thương',
        avatar: 'http://24htinhyeu.net/wp-content/uploads/2017/05/avatar-cap-999-anh-cap-doi-facebook-cho-2-nguoi-de-thuong-nhat-30..jpg',
        massage: 'Doing what you like will always keep you happy . .',
        time:'3:43 pm'
      },
      {
        name: 'Kumar Pratik',
        avatar: 'http://farm4.staticflickr.com/3770/33711721016_a3856cde6f_o.jpg',
        massage: 'Doing what you like will always keep you happy . .',
        time:'3:43 pm'
      },
     ]
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
          <ScrollView>
            {
              users.map((u, i)=>{
                return(
                  <Content key={i}>
                    <List >
                      <ListItem avatar >
                        <Left>
                          <Thumbnail source={{ uri: u.avatar }} />
                        </Left>
                        <Body>
                          <Text>{ u.name }</Text>
                          <Text note>{ u.massage }</Text>
                        </Body>
                        <Right>
                          <Text note>{ u.time }</Text>
                        </Right>
                      </ListItem>
                    </List>
                  </Content>
                )
              })
            }
            
            </ScrollView>
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