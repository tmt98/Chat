import React from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import Login from './Login'
import link from './../server'
import { View , Text, Header, Left, Right, Body, Icon, Thumbnail} from 'native-base';

export default class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      userIdSend: 1,
      userSend : [],
      message : {}
    }
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
  }

  getInfoUserSend = async() => {
    if(this.state.userIdSend !== -1){
      try {
        let response = await fetch (
          link + 'users/2' ,
        );
        let responseJson = await response.json();
        this.setState ({
          userSend : responseJson
        })
      } catch (error) {
        console.error (error)
      }
    }
  }

  getMessage = async () => {
    try {
      let response = await fetch (
        link + 'message/2/to/1' ,
      );
      let responseJson = await response.json();
      await responseJson.forEach(m => {
        this.setState(prevState => ({
          messages: [...prevState.messages, {
            _id: m.UserIdRec,
            text: m.Message,
            createdAt: m.Time,
            user: {
              _id: m.UserIdSend,
              name: this.state.userSend.Name,
              avatar: this.state.userSend.Avatar,
            },
          }]
        }))
      });
    } catch (error) {
      console.error (error)
    }
  }

  async componentDidMount() {
    await this.getInfoUserSend();
    // await this.getMessage();
  }
  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: "Hello developer",
          createdAt: new Date(),
          user: {
            _id: 2,
            name: "React Native",
            avatar: "https://placeimg.com/140/140/any"
          }
        }
      ]
    });
  }
  render() {
    return (
      <View>
        <Header style={{ backgroundColor: '#1ab2ff'}}>
          <Left >
            <Icon name='arrow-left' style={{ color:'white', margin:5}}></Icon>
            
          </Left>
          <Body style={{ alignItems:"center"}}>
            <Text style={{ fontWeight: 'bold', fontSize:15, color:'white',alignItems:"center"}}>
              {this.state.userSend.Name}
            </Text>
          </Body>
          <Right>
            <Thumbnail 
              source={{uri: this.state.userSend.Avatar}}
              small
            ></Thumbnail>
          </Right>
        </Header>
          <GiftedChat
            messages={this.state.messages}
            onSend={messages => this.onSend(messages)}
            user={{
              _id: 1,
            }}
          />
      </View>
    )
  }
}