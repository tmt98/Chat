import React, {Component} from 'react';
import {
		StyleSheet, 
        Text, 
        View,
    	Animated,
    	Dimensions
    	} from 'react-native'
import {COLOR_PINK_LIGHT,COLOR_FACEBOOK} from './color.js'
import Ionicons from 'react-native-vector-icons/Ionicons'
import ProgressBar from 'react-native-progress/Bar';
export default class Splash extends Component{
	render(){
		return(
			<View style={styles.container}>
				<Ionicons
					name="ios-chatbubbles"
					size={200}
					color={'white'}> 
				</Ionicons>
				<Text style={styles.title}>
                     ChatApp
                </Text>
                <ProgressBar progress={0.3} width={200} indeterminate={true} color={'white'}/>
			</View>
			)
	}

}
const styles =StyleSheet.create({
	container:{
		flex:1,
		flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#1ab2ff'
	},
	title:{
	    color: '#0077b3',
        textAlign : 'center',
        width: 400,
        fontSize:25,
        marginBottom:40
	}
})