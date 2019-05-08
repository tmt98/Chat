
import React, { Component } from 'react';
import { View, Image, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text, Icon,Card, CardItem, } from 'native-base';
import SearchInput, { createFilter } from 'react-native-search-filter';
const KEYS_TO_FILTERS = ['Name'];
export default class Friends extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      friend: []
    }
  }
  searchUpdated(term) {
    this.setState({ searchTerm: term })
  }
  getFriendFromApi = async () =>{
    try {
      let response = await fetch (
        link +'friend/1',
      );
      let responseJson = await response.json();
      this.setState({
        friend: responseJson
      },
      function(){

      })
    } catch (error) {
      console.error (error)
    }
  }
  async componentDidMount(){
    await this.getFriendFromApi()
  }
  render() {
    const {friend} = this.state
     const filteredName = friend.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))

    return (
      <View style={styles.container}>
        <Header style={{backgroundColor: 'white', width:'100%'}}>
            <SearchInput 
              onChangeText={(term) => { this.searchUpdated(term) }} 
              style={styles.searchInput}
              placeholder="Tìm bạn bè ..."
              />
        </Header>
          <Container>
            
            <Content >
              <Card>
                <ScrollView>
                  {
                    filteredName.map((u, i)=>{
                      return(
                        <CardItem key={i}>
                          <Thumbnail source={{ uri: u.Avatar }} />
                          <Text style={{left:10}}>{u.Name}</Text>
                          <Right>
                            <Icon active name='phone'></Icon>
                            {/* <Icon active name='video-camera'></Icon> */}
                          </Right>
                        </CardItem>
                    )
                  })
                }
                
                </ScrollView>
            </Card>
          </Content>
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
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 40,
  }
})