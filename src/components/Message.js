import React, { Component } from 'react';
import { View,Image} from 'react-native';
import { Container, Header, Content, Card, CardItem, Body, Text } from 'native-base';
import {base_url} from '../../config';
export default class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
        messages:[]
    };
  }
  componentDidMount(){
    const url=`${base_url}/messages`;
    
    fetch(url).then(r=>r.json())
    .then((messages)=>this.setState({messages}))
    
  }

 messages(){
   return this.state.messages.map((e,i)=>{
       return(
        <Card key={i}>
        <CardItem header bordered>
          <Text>{e.title}</Text>
        </CardItem>
        <CardItem bordered>
          <Body>
          {
              (e.image)?<Image source={{uri:e.image}} style={{height: 200, width: 200, flex: 1}}/>:null
          }
          
            <Text>
              {e.description}
            </Text>
          </Body>
        </CardItem>
        <CardItem footer bordered>
          <Text>{e.subtitle || 'Sent by President'}</Text>
        </CardItem>
      </Card>
    
       )
   })
 }

  render() {
    return (
      <Container>
  
        <Content>
          {this.messages()}
        </Content>
      </Container>
    );
  }
}
