import React, {Component} from 'react';
import {
		StyleSheet, 
        Text, 
        View,
    	Animated,
        Dimensions,
        ImageBackground,
        TouchableWithoutFeedback,
        Keyboard,
        ActivityIndicator,
        FormLabel, FormInput, FormValidationMessage,TextInput
    	} from 'react-native'
import {COLOR_PINK_LIGHT,COLOR_FACEBOOK} from './color.js'
import Ionicons from 'react-native-vector-icons/Ionicons'
import background from '../image/background-image.jpg'
import {Input, Icon, Button} from 'native-base'
export default class Login extends Component{
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
      getEmail(email){
        this.setState({
          email : email
        })
      }
      getPassword(pass){
        this.setState({
          pass : pass
        })
      }
      componentDidUpdate(){
        
      }
	render(){
		return(
      <ImageBackground source={background} style={{width: '100%', height: '100%',}}>
        
        <View style={styles.container}>
          <View style = {{width:'80%', margin:15}}>
            {this.state.result != '' ?
              <Text style={{color:'red', textAlign : "center"}}>{this.state.result}</Text>
              :null
            }
            <TextInput style = {styles.input} 
               onChangeText={(email) => this.getEmail(email)}
               keyboardType='email-address' 
               placeholder='Email' 
               placeholderTextColor='gray'/>
              {this.state.errorEmail != '' ?
                <Text style={{color:'red'}}>{this.state.errorEmail}</Text>
              :null}
            <TextInput style = {styles.input}   
              onChangeText={(pass) => this.getPassword(pass)}
              placeholder='Mật khẩu' 
              placeholderTextColor='gray' 
              secureTextEntry/>
              {this.state.errorPass != '' ?
                <Text style={{color:'red'}}>{this.state.errorPass}</Text>
              :null}
          </View>
          <View style={{ margin:10, width:'80%'}}>
              <Button iconLeft bordered full success onPress={this.login}>
                <Icon name='login'></Icon>
                <Text>ĐĂNG NHẬP</Text>
              </Button>
          </View>
          <View style={{margin:10, width:'80%'}}>
              <Button full info >
              <Icon name='signin' style = {{color:'white'}}></Icon>
              <Text style = {{color:'white'}}>ĐĂNG KÝ</Text>
              </Button>
          </View>
        </View>
      </ImageBackground>
			
			)
	}

}
const styles =StyleSheet.create({
	container:{
		flex:1,
		flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
        
  },
  input:{
    height: 40,
    borderBottomWidth: 1, 
    borderBottomColor: 'gray',
    marginBottom: 10,
    padding: 10,
    color: 'gray'
},
})