import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

import {Icon,List, ListItem,Container,Content} from 'native-base';

export default class Profile extends Component {

  render() {
    return (
      <Container>
      	<Content>
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>Md Zurez Tuba</Text>
              
             
		<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
		<Icon name="phone" style={[styles.pinfo,{marginVertical:3}]} type='AntDesign' />
		<Text style={styles.pinfo}> +91-9891661654</Text>
		</View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between',marginTop:10 }}>
		<Icon name="mail" style={[styles.pinfo,{marginVertical:4}]} type='AntDesign' />
		<Text style={styles.pinfo}> zurez4u@gmail.com</Text>
		</View>
             
            </View>
        </View>
          <View >
          <List >
           		<ListItem style={styles.bodyContent}>
           			<Text style={[styles.name,{fontSize:20,fontWeight:'800'}]}>Upcoming Events</Text>
           		</ListItem>
           		<ListItem style={styles.bodyContent}>
           			<Text style={styles.info}>Blood Donation Drive</Text>
           		</ListItem>
           		<ListItem style={styles.bodyContent}>
           			<Text style={styles.info}>Cleanliness Drive</Text>
           		</ListItem>
           		<ListItem style={styles.bodyContent}>
           			<Text style={styles.info}>Teach India</Text>
           		</ListItem>
           		<ListItem style={styles.bodyContent}>
           			<Text style={styles.info}>Swachh Bharat</Text>
           		</ListItem>
           </List>
           <List style={styles.body}>
           		<ListItem style={styles.bodyContent}>
           			<Text style={[styles.name,{fontSize:20,fontWeight:'800'}]}>Interests</Text>
           		</ListItem>
           		<ListItem style={styles.bodyContent}>
           			<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
					<Icon name="checkcircle" style={[styles.pinfo,{marginVertical:14,color:'green'}]} type='AntDesign' />
				<Text style={styles.info}> Blood Donation Drive</Text>
				</View>
           		</ListItem>
           		<ListItem style={styles.bodyContent}>
           			<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
					<Icon name="checkcircle" style={[styles.pinfo,{marginVertical:14,color:'green'}]} type='AntDesign' />
				<Text style={styles.info}> Swatchh Bharat</Text>
				</View>
           		</ListItem>
           		<ListItem style={styles.bodyContent}>
           			<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
					<Icon name="checkcircle" style={[styles.pinfo,{marginVertical:14,color:'green'}]} type='AntDesign' />
				<Text style={styles.info}> Swatchh Bharat</Text>
				</View>
           		</ListItem>
           		<ListItem style={styles.bodyContent}>
           			<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
					<Icon name="checkcircle" style={[styles.pinfo,{marginVertical:14,color:'green'}]} type='AntDesign' />
				<Text style={styles.info}> Swatchh Bharat</Text>
				</View>
           		</ListItem>
           		<ListItem style={styles.bodyContent}>
           			<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
					<Icon name="checkcircle" style={[styles.pinfo,{marginVertical:14,color:'green'}]} type='AntDesign' />
				<Text style={styles.info}> Swatchh Bharat</Text>
		</View>
           		</ListItem>
           </List>
        </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#1e3c64",
    height:200,
  },
  pinfo:{
  	fontSize:15
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:32,
    color: "#696969",
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: "#1e3c64",
    marginTop:10
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
});
 