import React from 'react';
import {Platform, 
  StyleSheet, 
  Text, 
  View,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  ActivityIndicator,
  BackHandler} from 'react-native';
import firebaseSvc from '../FirebaseSvc';
import {COLOR_PINK_LIGHT,COLOR_FACEBOOK} from './color.js'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class CreateAccount extends React.Component {
  static navigationOptions = {
    title: 'Creat account',
  };

  state = {
    name: 'Alex B',
    email: 'test3@gmail.com',
    password: 'test123',
    avatar: '',
  };


  onPressCreate = async () => {
    console.log('create account... email:' + this.state.email);
    try {
      const user = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        avatar: this.state.avatar,
      };
      await firebaseSvc.createAccount(user);
    } catch ({ message }) {
      console.log('create account failed. catch error:' + message);
    }
  };

  onChangeTextEmail = email => this.setState({ email });
  onChangeTextPassword = password => this.setState({ password });
  onChangeTextName = name => this.setState({ name });


  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.up}>
              <Ionicons 
              name="ios-finger-print"
              size={100}
              color={'white'}> </Ionicons>

              

              <Text style={styles.title}>
              Creat Account
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
              <View style ={styles.textInputContainer}>
                  <TextInput style={styles.textInput}
                  placeholder='Enter your name' 
                  
                  onChangeText={this.onChangeTextName}
                  value={this.state.name}
                  ></TextInput>
              </View>  
              <TouchableOpacity 
              style={styles.loginButton}
              onPress={this.onPressCreate}
              >
                <Text style={styles.loginButtonTittle}>
                Create
                </Text>
              </TouchableOpacity>  



 


          </View>

        </View>
   </TouchableWithoutFeedback>
    );
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

});



