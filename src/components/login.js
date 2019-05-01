import React, { Component } from 'react';
import { Container, Header,Item,Text,Input ,Form, Button} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import {AsyncStorage} from 'react-native';
import MaterialsIcon from 'react-native-vector-icons/MaterialIcons';
import { Kohana } from 'react-native-textinput-effects';
import { Actions } from 'react-native-router-flux';
import {base_url} from '../../config';

export default class Login extends Component {

  constructor(props){
    super(props)
    this.state={
      number:0
    }
    AsyncStorage.getItem('user_id').then((user_id)=>{
      
      if(user_id){Actions.reset('home')}
      
    })
  }

  login=()=>{
    const url=`${base_url}/login`;
    
    fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        phone:this.state.number
      }),
    }).then((r)=>r.json())
    .then((response)=>{
    
      if(response.status!='error'){
        
        AsyncStorage.setItem('user_id',`${response.user.id}`);
        AsyncStorage.setItem('user',JSON.stringify(response.user));
        Actions.reset('home');
      }
    })
    
    ;
  }
  render() {
    return (
      <Container>
      
        <Grid style={{backgroundColor:'#b490aa'}}>
        <Row style={{padding:10}}>
          <Col height={80}>
          <Kohana
            style={{ backgroundColor: '#f9f5ed' }}
            label={'Enter your phone number'}
            iconClass={MaterialsIcon}
            iconName={'phone'}
            iconColor={'#f4d29a'}
            inputPadding={5}
            labelStyle={{ color: '#91627b' }}
            inputStyle={{ color: '#91627b' }}
            labelContainerStyle={{ padding:5 }}
            iconContainerStyle={{ padding: 5 }}
            onChangeText={(text)=>this.setState({number:text})}
            keyboardType = 'numeric'
            useNativeDriver
        />
                </Col>
          </Row>
          <Row style={{padding:10}}>
            <Col >
              <Button block success onPress={()=>{
                this.login()
               
              }
              }>
                <Text>Login</Text>
              </Button>
            </Col>
          </Row>
        </Grid>
      </Container>
    );
  }
}