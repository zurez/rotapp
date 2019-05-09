import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';

import {Icon,List, ListItem,Container,Content} from 'native-base';
import { Actions } from 'react-native-router-flux';
import {base_url} from '../../config';
export default class Profile extends Component {

  constructor(props){
    super(props)
    this.state={
      volunteers:[],
      user:{}
    }
  }

  volunteer=()=>{
    const url=`${base_url}/volunteer/single/${this.state.user_id}`;
    
    fetch(url).then(r=>r.json())
    .then((response)=>this.setState({volunteers:response.data}))
  }
  componentDidMount = () => {
    AsyncStorage.getItem('user_id').then((user_id)=>{
      if(!user_id){
        Actions.reset('login')
      }
      AsyncStorage.getItem('user').then(user=>{
        const ruser =JSON.parse(user)
        this.setState({user:ruser,user_id:ruser.id},()=>this.volunteer());
      })
    })
  };
  
  render_volunteer=()=>{
    if(this.state.volunteers && this.state.volunteers.length>0){
        return(
          this.state.volunteers.map((e,i)=><ListItem key={i}>
            <Text style={{fontWeight:'600'}}>{e.title}</Text>
            <Text>  on {e.created_at}</Text>
          </ListItem>)
        )
    }else{
      return [
        <ListItem key={1}>
          <Text>Nothing to display...</Text>
        </ListItem>
      ]
    }
  }
  render() {
    return (
      <Container>
      	<Content>
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>{this.state.user.name}</Text>
              
             
		<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
		<Icon name="phone" style={[styles.pinfo,{marginVertical:3}]} type='AntDesign' />
		<Text style={styles.pinfo}> +91-{this.state.user.phone || ''}</Text>
		</View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between',marginTop:10 }}>
		<Icon name="mail" style={[styles.pinfo,{marginVertical:4}]} type='AntDesign' />
		<Text style={styles.pinfo}>{this.state.user.email || ''}</Text>
		</View>
             
            </View>
        </View>
          <View >
          <List >
           		<ListItem style={styles.bodyContent}>
           			<Text style={[styles.name,{fontSize:20,fontWeight:'800'}]}>
                   Events you have volunteered for
                 </Text>
           		</ListItem>
           		  {this.render_volunteer()}
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
 