import React, { Component } from "react";
import { Image,AsyncStorage } from "react-native";
import {
  Content,
  Text,
  List,
  ListItem,
  Icon,
  Container,
  Left,
  Right,
  Badge
} from "native-base";
import styles from "../styles/sidebar";
import {Actions} from 'react-native-router-flux';
import RNRestart from 'react-native-restart'; // Import package from node modules

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shadowOffsetWidth: 1,
      shadowRadius: 4,
      user_id:undefined,
      datas:[
        {
          name: "Home Page",
          icon: "home",
          bg: "#C5F442",
          route:"home"
        },
        {
          name: "Messages",
          route: "message",
          icon: "mail",
          bg: "#477EEA",
          types: "11"
        },
        {
          name: "Gallery",
          route: "gallery",
          icon: "photos",
          bg: "#DA4437",
          types: "4"
        },
        
        {
          name: "News Letter",
          route: "newsletter",
          icon: "newspaper-o",
          type:"FontAwesome",
          bg: "#C5F442"
        },
        {
          name:'Timeline',
          route:'timeline',
          type:'MaterialIcons',
          icon:'timeline'
        },
        {
          name: "Office Bearers",
          route: "office_bearers",
          type:"MaterialIcons",
          icon: "people",
          bg: "#4DCAE0"
        }
      
      ]
      
    };
  }

  componentDidMount() {
    
    
    AsyncStorage.getItem('user_id').then(user_id=>{
      const datas=Object.assign({},this.state.datas)
      console.log({user_id})
      if(user_id){
        datas[datas.length-1]={
          name: "Profile",
          route: "profile",
          icon: "face-profile",
          type:'MaterialCommunityIcons',
          bg: "#C5F442",
          types: "5"
        }
        datas[datas.length]={
          name: "Logout",
          route:undefined,
          type:"AntDesign",
          icon: "logout",
          bg: "red"
        }
      
      }else{
        datas[datas.length]={
          name: "Login",
          route:'login',
          type:"AntDesign",
          icon: "login",
          bg: "red"
        }
      }
      this.setState({user_id,datas})
    
    });
  }
  
  render() {
    
    return (
      <Container>
        <Content
          bounces={false}
          style={{ flex: 1, backgroundColor: "#1e3c64", top: -1 }}
      >
          <Image source={{uri:'https://clubrunner.blob.core.windows.net/00000002427/PhotoAlbum/branding/Mark-of-Excellence-4992.png'}} 
          style={styles.drawerCover} />                                                    
          <List
            dataArray={this.state.datas}
            renderRow={
              data =>{
                return(
                <ListItem
                button
                noBorder
                onPress={() => {
                  if(data.route){
                    return Actions[data.route].call()
                  }else{
                    AsyncStorage.multiRemove(['user','user_id']).then(()=>RNRestart.Restart());
                
                  }
                }}

                >
                <Left>
                  <Icon
                    active
                    name={data.icon}
                    type={(data.type)?data.type:null}
                    style={{ color: "white", fontSize: 26, width: 30 }}
                  />
                  <Text style={[styles.text,{color:'white'}]}>
                    {data.name}
                  </Text>
                </Left>
            
                </ListItem>
              )}
            
            }
          />
        </Content>
      </Container>
    );
  }
}

export default SideBar;
