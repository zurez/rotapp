import React, { Component } from 'react';
import { View,Image,AsyncStorage} from 'react-native';
import { Container, Header, Content, Card, CardItem, Body, Text ,Button} from 'native-base';
import {base_url} from '../../config';
import { Actions } from 'react-native-router-flux';
export default class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
        messages:[],
        is_registered:false,
        user_id:undefined,
        event_id:0
    };
  }
  componentDidMount(){
   let url=`${base_url}/messages`;
    AsyncStorage.getItem('user_id').then((user_id)=>{
      
      if(user_id){
        url+='/'+user_id;
        this.setState({user_id,is_registered:true},()=>{

          fetch(url).then(r=>r.json())
          .then((messages)=>this.setState({messages},()=>console.log(messages)))

          
        });
      }
      
    })
    

    
    
  }

  volunteer=(event_id)=>{
    const url=`${base_url}/volunteer`;
    
    fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id: this.state.user_id,
        event_id
      }),
    });
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
        
        {(this.state.is_registered)?<Button block
          onPress={
            (e)=>this.volunteer(e.id)
          }
          
        >
            <Text>Volunteer</Text>
          </Button>:
          <Button block warning
          onPress={
            ()=>Actions.reset('signup')
          }
          >
          <Text>Please register to volunteer</Text>
          </Button>
        }
       
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
