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
        Text, 
        View,
        TextInput,
        TouchableOpacity,
        TouchableWithoutFeedback,
        Keyboard,
        ActivityIndicator,
        Alert} from 'react-native';
import {LoginButton, AccessToken, LoginManager} from 'react-native-fbsdk';
import { GoogleSignin } from 'react-native-google-signin'
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import firebase from 'firebase';
import {COLOR_PINK_LIGHT,COLOR_FACEBOOK, COLOR_GOOGLE} from './color.js'
import {connect} from 'react-redux';
import {InteractionManager} from 'react-native';
const config = {
    apiKey: "AIzaSyAIP8Ug0OqI5Rxv29HK8hMYTWNrgG8Yvoc",
    authDomain: "chat-app-87fd5.firebaseapp.com",
    databaseURL: "https://chat-app-87fd5.firebaseio.com",
    projectId: "chat-app-87fd5",
    storageBucket: "chat-app-87fd5.appspot.com",
    messagingSenderId: "1096520825590"
  };
firebase.initializeApp(config);

const _setTimeout = global.setTimeout;
const _clearTimeout = global.clearTimeout;
const MAX_TIMER_DURATION_MS = 60 * 1000;
if (Platform.OS === 'android') {
// Work around issue `Setting a timer for long time`
// see: https://github.com/firebase/firebase-js-sdk/issues/97
  const timerFix = {};
  const runTask = (id, fn, ttl, args) => {
    const waitingTime = ttl - Date.now();
    if (waitingTime <= 1) {
        InteractionManager.runAfterInteractions(() => {
            if (!timerFix[id]) {
                return;
            }
            delete timerFix[id];
            fn(...args);
        });
        return;
    }

    const afterTime = Math.min(waitingTime, MAX_TIMER_DURATION_MS);
    timerFix[id] = _setTimeout(() => runTask(id, fn, ttl, args), afterTime);
  };

  global.setTimeout = (fn, time, ...args) => {
    if (MAX_TIMER_DURATION_MS < time) {
        const ttl = Date.now() + time;
        const id = '_lt_' + Object.keys(timerFix).length;
        runTask(id, fn, ttl, args);
        return id;
    }
    return _setTimeout(fn, time, ...args);
  };

  global.clearTimeout = id => {
    if (typeof id === 'string' && id.startWith('_lt_')) {
        _clearTimeout(timerFix[id]);
        delete timerFix[id];
        return;
    }
    _clearTimeout(id);
  };
}


class Login extends Component{
    state = {
      logged: false,
      animating: false
    }

    constructor(props) {
      super(props);
        this.logInSocial = this.logInSocial.bind(this)
    }
    onLoginFacebook = async () => {
      try {
        this.setState({
          animating: true,
          logged:true
        });
        //console.log(this.state.logged)
        const result = await LoginManager.logInWithReadPermissions(['public_profile', 'email']);
        const tokenData = await AccessToken.getCurrentAccessToken();
        const token = tokenData.accessToken.toString();
        const credential = firebase.auth.FacebookAuthProvider.credential(token);
        const user = await firebase.auth().signInAndRetrieveDataWithCredential(credential);
        firebase.database().ref(`/users/${user.uid}/profile`).set({
          name: user.displayName,
          email: user.email,
          avatar: user.photoURL
        });
        this.setState({
            animating: false
        });                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
      } catch (error) {
        this.setState({
            animating: false
        });
        console.log(error.message);
        // do something here
      }
    }   

//    onLoginGoogle = async()  => {
//        console.log("abc")
//        await GoogleSignin.signIn().then(async (googleUser) => {
//           this.setState({
//               userInfo: googleUser.user,
//           });
//           console.log("thành công")
//           alert("thành công")
//       }).catch((err) => {
//           console.log('WRONG SIGNIN', { err })
//       })
//
//    }
        logInSocial () {
            this.setupSocial()
            GoogleSignin.signIn().then(async (googleUser) => {
                this.setState({
                    userInfo: googleUser.user
                })
                console.log(this.state.userInfo)
            }).catch((err) => {
                Alert.alert('WRONG SIGNIN', { err })
            }).done()

        }
         doLogin(provider) {

            let methodlogy;
            switch (provider) {
                case 'google':
                    methodlogy = this.logInSocial('google')
                    console.log("info" )
                    break
                default:
                    methodlogy = null
            }
        }
    setupSocial = async() =>{
        try {
//            await GoogleSignin.hasPlayServices({ autoResolve: true })
            await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true })
            await GoogleSignin.configure({
                webClientId: '990923304215-b2fe366888ceo4jr48djttkclnoevqo1.apps.googleusercontent.com',
//                offlineAccess: true,
            })

            const user = await GoogleSignin.currentUserAsync()
            console.log('Saved google user', user)
            resetAuthSocial()
        } catch (err) {
            console.log('Something wrong with google play service!', { err })
        }
    }
    loginFacebook = async() => {
    // alert("1234")
        try {
          let result = await LoginManager.logInWithReadPermissions(['public_profile'])
          if (result.isCancelled) {
            alert('Login was cancelled');
          } else {
            alert('Login was successful with permissions: ' + result.grantedPermissions.toString());
          }
        } catch (error) {
          alert('Login failed with error: ' + error)
        }
    }
  componentDidMount(){
    console.log('acb')
    console.log('componentDidMount',this.props);
  }

  render(){
    const Divider = (props) => {        //props =  style={styles.divider}
      return (
        <View {...props}>
        <View style={styles.line}></View>
        <Text style={styles.textOR}>OR</Text>
        <View style={styles.line}></View>
        </View>
      )
    }
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.up}>
            <Ionicons 
                name="ios-chatbubbles"
                size={150}
                color={'white'}>
            </Ionicons>
            <Text style={styles.title}>
              ChatApp for everyone
            </Text>
          </View>
          <View style ={styles.down}>
            <View style={{ flex:1, margin: 10}}>
              <FontAwesome.Button
                style={styles.googleButton}
                name='google'
                onPress={this.logInSocial}
                backgroundColor={COLOR_GOOGLE}>
                  <Text style={styles.loginButtonTittle}>
                    Google
                  </Text>
              </FontAwesome.Button>
              <ActivityIndicator
//                  {console.log(this.state.logged)}
                  animating={this.state.animating}
                  color="#ddd"
                  size="large"
              />
            </View>
            <View style={{ flex:1, margin:10}}>
              <FontAwesome.Button
                style={styles.facebookButton}
                name='facebook'
                onPress={this.onLoginFacebook}
                backgroundColor={COLOR_FACEBOOK}>
                  <Text style={styles.loginButtonTittle}>
                    Facebook
                  </Text>
              </FontAwesome.Button>
              <ActivityIndicator
                  //{console.log(this.state.logged)}
                  animating={this.state.animating}
                  color="#ddd"
                  size="large"
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
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
    backgroundColor: '#1ab2ff',

  },
  up:{
//    marginTop: '30%',
    flex:3,
    flexDirection : 'column',
    justifyContent:'center',
    alignItems:'center',

  },
  down:{
    flex:1,
    flexDirection : 'row',
    justifyContent:'flex-start',
    alignItems:'center'
  },
  title:{
    color: 'white',
    textAlign : 'center',
    width: 400,
    fontSize:25,
//    marginBottom:10
  },
  textInputContainer:{
    paddingHorizontal:10,
    borderRadius:6,
//    marginBottom:20,
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
  googleButton:{
//    width: 100
    justifyContent:'center',
    alignItems:'center',
  },
  loginButtonTittle:{
    fontSize :18, 
    color:'white'
  },
  facebookButton:{
    justifyContent:'center',
    alignItems:'center',
//    width:300,
//    borderRadius:6,
//    justifyContent:'center',
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

