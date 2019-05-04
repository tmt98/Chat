/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, 
        StyleSheet, 
        View,
        TextInput,
        TouchableOpacity,
        TouchableWithoutFeedback,
        Keyboard,
        ActivityIndicator,
        Alert,
        ImageBackground,} from 'react-native';
import {LoginButton, AccessToken, LoginManager} from 'react-native-fbsdk';
import { GoogleSignin } from 'react-native-google-signin'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Container, Header, Content, Button, Text, Icon ,Form, Label, Item} from 'native-base';
import { Input } from 'react-native-elements';
// import firebase from 'firebase';
import firebaseApp from  '../FirebaseConfig'
import {COLOR_PINK_LIGHT,COLOR_FACEBOOK, COLOR_GOOGLE} from './color.js'
import {connect} from 'react-redux';
import {InteractionManager} from 'react-native';
import background from './../image/background-image.jpg';
import { assignmentExpression } from '@babel/types';
import link from '../server'



class Login extends Component{
    
    constructor(props) {
      super(props);
      this.state = {
        errorEmail:'',
        errorPass:'',
        email:'',
        pass:'',
        result:''
      }
      // this.login = this.login.bind(this)
    }

    login = async() => {
      const { email }  = this.state ;
      const { pass }  = this.state ;
      if(email == ''){
        this.setState({
          errorEmail : 'VUI LÒNG NHẬP EMAIL'
        })
      }
      if (pass == ''){
        this.setState({
          errorPass : 'VUI LÒNG NHẬP MẬT KHẨU'
        })
      }
      if(email != '' && pass != '') {
        try {
          let response = await fetch (
            link + 'login/' + email ,
          );
          let responseJson = await response.json();
          if(responseJson.message != ''){
            this.setState({
              errorEmail : responseJson.message
            })
          } else {
            this.setState({
              errorPass :'Thành công'
            })
          }
        } catch (error) {
          console.error (error)
        }
      }
    }
    componentDidUpdate(){
      this.login()
    }
  render(){
    
    
    return (
      <ImageBackground source={ background } style={{width: '100%', height: '100%'}}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <View style={styles.up}>
              <Ionicons 
                  name="ios-contacts"
                  size={120}
                  info>
              </Ionicons>
            </View>
            <View style ={styles.down}>
            {this.state.result !== '' ? 
              <View>
                <Text style={{color:'red', fontSize:12}}>{this.state.result}</Text>
              </View>
              : null
            }
              
              <View style = {{width:'80%', margin:15}}>
                <Input
                  placeholder='Email'
                  shake={true}
                  leftIcon={
                    <Icon
                      name='email'
                      size={24}
                      color='gray'
                    />
                  }
                  errorStyle={{ color: 'red' }}
                  errorMessage={this.state.errorEmail}
                  onChangeText={(email) => this.setState({email})}
                />
                <Input
                  placeholder='Mật khẩu'
                  shake={true}
                  leftIcon={
                    <Icon
                      name='key'
                      size={24}
                      color='gray'
                    />
                  }
                  errorStyle={{ color: 'red' }}
                  errorMessage={this.state.errorPass}
                  onChangeText={(pass) => this.setState({pass})}
                />
              </View>
              
              <View style={{ margin:15, width:'80%'}}>
                <Button iconLeft bordered full success onPress={this.login}>
                  <Icon name='login'></Icon>
                  <Text>LOGIN</Text>
                </Button>
              </View>
              <View style={{margin:10, width:'80%'}}>
                <Button full info >
                  <Icon name='signin' style = {{color:'white'}}></Icon>
                  <Text style = {{color:'white'}}>SIGN IN</Text>
                </Button>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ImageBackground> 
    )
  }
}

const mapStateToProps= (state)=>{
  console.log('mapStateToProps',state)
  return{
    logged:state.Auth.loggedIn,
    user : state.Auth.user
  };
};

export default connect(mapStateToProps)(Login);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection : 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    // backgroundColor: '#1ab2ff',

  },
  up:{
  //  marginTop: 30,
    flex:1,
    flexDirection : 'column',
    justifyContent:'center',
    alignItems:'center',

  },
  down:{
    flex:2,
    flexDirection : 'column',
    justifyContent:'flex-start',
    alignItems:'center'
  },
  title:{
    color: '#C26E1F',
    textAlign : 'center',
    width: 400,
    fontSize:25,
//    marginBottom:10
  },
  
});

