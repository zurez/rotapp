'use strict';




 
import React, { Component } from 'react';

import {
  StyleSheet,
  View,Image,TouchableOpacity
} from 'react-native';

import {Container, Content, Card, CardItem, Body, Text,Button,Left,Right,Icon ,Thumbnail} from 'native-base';

import {Actions} from 'react-native-router-flux';

class EventCard extends Component {


  constructor(props) {
    super(props);
  
    this.state = {};
  }


  render() {

  	const image=this.props.data.image;
  	const d=this.props.data
    return (
     		<TouchableOpacity onPress={()=>Actions.event_detail()}> 
      
      		 <Card style={{flex: 0}} >
            <CardItem>
              <Left>
                <Thumbnail source={{uri:image}} />
                <Body>
                  <Text>{d.title}</Text>
                  <Text note>{d.time}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>

                <Text>
                  react-native-router-flux is a different API over react-navigation. It helps users to define all the routes in one central place and navigate and communicate between different screens in an easy way. But it also means that react-native-router-flux inherits all limitations and changes from updated versions.
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="hands-helping" type="FontAwesome5" />
                  <Text>1,926 Volunteers</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
          </TouchableOpacity>
      	
    );
  }
}

const styles = StyleSheet.create({

});


export default EventCard;