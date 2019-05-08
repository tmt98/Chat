
import React, { Component } from 'react';
import { View, Image, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text, Icon,Card, CardItem, Button} from 'native-base';
import SearchInput, { createFilter } from 'react-native-search-filter';
const KEYS_TO_FILTERS = ['Name'];
export default class AllUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      notFriend:[]
    }
  }
  searchUpdated(term) {
    this.setState({ searchTerm: term })
  }
  getNotFriendFromApi = async () =>{
    try {
      let response = await fetch (
        link +'notFriend/2',
      );
      let responseJson = await response.json();
      this.setState({
        notFriend: responseJson
      },
      function(){

      })
    } catch (error) {
      console.error (error)
    }
  }
  async componentDidMount(){
    await this.getNotFriendFromApi()
  }
  render() {
    const {notFriend} = this.state
     const filteredName = notFriend.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))

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
                        <CardItem key={ i } style={{flexDirection:'row'}}>
                          <View style={{flex:1}}>
                            <Thumbnail source={{ uri: u.Avatar }}/>
                          </View>
                          <View style={{flex:3}}>
                            <Text >{u.Name}</Text>
                            <Button rounded primary small>
                              <Text>Kết Bạn</Text>
                            </Button>
                          </View>
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
    width:'90%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 40,
  }
})