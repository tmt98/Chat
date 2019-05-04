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
        ActivityIndicator} from 'react-native';
import {LoginButton, AccessToken, LoginManager} from 'react-native-fbsdk';
import Ionicons from 'react-native-vector-icons/Ionicons';
<<<<<<< HEAD
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
=======
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import firebase from 'firebase';

import {COLOR_PINK_LIGHT,COLOR_FACEBOOK} from './color.js'

// const config = {
//     apiKey: "AIzaSyAIP8Ug0OqI5Rxv29HK8hMYTWNrgG8Yvoc",
//     authDomain: "chat-app-87fd5.firebaseapp.com",
//     databaseURL: "https://chat-app-87fd5.firebaseio.com",
//     projectId: "chat-app-87fd5",
//     storageBucket: "chat-app-87fd5.appspot.com",
//     messagingSenderId: "1096520825590"
//   };
// firebase.initializeApp(config);



>>>>>>> f1ea1b10bdc63c7fc0c6ceee3d4785bc292c1f70

import firebaseSvc from  '../FirebaseSvc'


<<<<<<< HEAD
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
    
    
=======
export default class Login extends Component{
    state = {
    logged: false,
    animating: false,
    name: 'Alex B',
    email: 'test3@gmail.com',
    password: 'test123',
    avatar: '',
    }

    constructor(props) {
      super(props);
    }
    // onLogin = async () => {
    //     try {
    //         this.setState({
    //             animating: true,
    //             logged:true
    //         });
    //         //console.log(this.state.logged)
    //         const result = await LoginManager.logInWithReadPermissions(['public_profile', 'email']);
    //         const tokenData = await AccessToken.getCurrentAccessToken();
    //         const token = tokenData.accessToken.toString();
    //         const credential = firebaseApp.auth.FacebookAuthProvider.credential(token);
    //         const user = await firebaseApp.auth().signInAndRetrieveDataWithCredential(credential);
    //         console.log("ahihihi")
    //         console.log(user);
    //         firebase.database().ref(`/users/${user.uid}/profile`).set({
    //             name: user.displayName,
    //             email: user.email,
    //             avatar: user.photoURL
    //         });
    //         this.setState({
    //             animating: false
    //         });                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
    //     } catch (error) {
    //         this.setState({
    //             animating: false
    //         });
    //         console.log(error.message);
    //         // do something here
    //     }
    //     this.props.navigation.navigate('Home')

    // } 
    
    
    onPressLogin = async () => {
        console.log('pressing login... email:' + this.state.email);
        const user = {
          name: this.state.name,
          email: this.state.email,
          password: this.state.password,
          avatar: this.state.avatar,
        };
        console.log(typeof user+ '      ahihishidhishdi') 
        if(user== undefined){
            console.log("DDMMMMMMMMMMMMMMMMMMM")
        }
        else{
            console.log("UHMMMMMMMMMM")
        }

        const response = await firebaseSvc.login(
          user,
          this.loginSuccess,
          this.loginFailed        
          );
        
      };
    
      loginSuccess = () => {
        console.log('login successful, navigate to chat.');
        this.props.navigation.navigate('Home', {
          name: this.state.name,
          email: this.state.email,
          avatar: this.state.avatar,
        });
      };
      loginFailed = () => {
        console.log('login failed ***');
        alert('Login failure. Please tried again.');
      };

    onChangeTextEmail = email => this.setState({email})
    onChangeTextPassword= password => this.setState({password})

    createAccount=async()=>{
        this.props.navigation.navigate('createAccount')
    }

                                                                            


    render(){
        const Divider = (props) => {        //props =  style={styles.divider}
        return <View {...props}>
        <View style={styles.line}></View>
        <Text style={styles.textOR}>OR</Text>
        <View style={styles.line}></View>
        </View>
        }
>>>>>>> f1ea1b10bdc63c7fc0c6ceee3d4785bc292c1f70
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
<<<<<<< HEAD
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
=======
            <View style={styles.container}>
              <View style={styles.up}>
                  <Ionicons 
                  name="ios-finger-print"
                  size={100}
                  color={'white'}> </Ionicons>

                  

                  <Text style={styles.title}>
                  ChatApp for everyone
                  </Text>
              </View>
              <View style ={styles.down}>
                  <View style ={styles.textInputContainer}>
                      <TextInput style={styles.textInput}
                      textContentType='emailAddress'
                      keyboardType='email-address'  
                      placeholder='Enter your email'
                      onChangeText={this.onChangeTextEmail}
                      value={this.state.email}
                      >
                      </TextInput>
                  </View>

                  <View style ={styles.textInputContainer}>
                      <TextInput style={styles.textInput}
                      placeholder='Enter your password' 
                      secureTextEntry={true}
                      onChangeText={this.onChangeTextPassword}
                      value={this.state.password}
                      ></TextInput>
                  </View>  
                  <TouchableOpacity 
                  style={styles.loginButton}
                  onPress={this.onPressLogin}
                  >
                    <Text style={styles.loginButtonTittle}>
                    LOGIN
                    </Text>
                  </TouchableOpacity>  



                  <Divider style={styles.divider}></Divider>

                  <FontAwesome.Button 

                  style={styles.facebookButton}
                  name='facebook'
                  onPress={this.createAccount}
                  backgroundColor={COLOR_FACEBOOK}>
                  <Text style={styles.loginButtonTittle}>
                          
                    Create new account

                  </Text>
                
                  </FontAwesome.Button>   
                <ActivityIndicator
                    //{console.log(this.state.logged)}
                    animating={this.state.animating}
                    
                    color="#ddd"
                    size="large"
                />

>>>>>>> f1ea1b10bdc63c7fc0c6ceee3d4785bc292c1f70
              </View>

            </View>
      </TouchableWithoutFeedback>
      )

}


}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection : 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: COLOR_PINK_LIGHT,
    },
    up:{
        flex:3,
        flexDirection : 'column',
        justifyContent:'center',
        alignItems:'center',

    },
    down:{
        flex:7,
        flexDirection : 'column',
        
        justifyContent:'flex-start',
        alignItems:'center'
    },
    title:{
        color: 'firebrick',
        textAlign : 'center',
        width: 400,
        fontSize:25,
        marginBottom:40
    },
    textInputContainer:{
        paddingHorizontal:10,
        borderRadius:6,
        marginBottom:20, 
        backgroundColor:'rgba(255,255,255,0.2)',
    },
    textInput:{
        width:280,
        height : 45,
    },
    loginButton:{
        width:300,
        height:45,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:6,
        backgroundColor:'red'

<<<<<<< HEAD
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
  
=======

    },
    loginButtonTittle:{
        fontSize :18, 
        color:'white'
    },
    facebookButton:{
        width:300,
        height:45,
        borderRadius:6,
        justifyContent:'center',
    },
  line: {
    height: 1,
    flex: 2,
    backgroundColor: 'black'
  },
  textOR: {
    flex: 1,
    textAlign: 'center'
  },
  divider: {
    flexDirection: 'row',
    height: 40,
    width: 298,
    justifyContent: 'center',
    alignItems: 'center'
  }

>>>>>>> f1ea1b10bdc63c7fc0c6ceee3d4785bc292c1f70
});

