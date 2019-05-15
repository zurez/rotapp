import React, { Component } from 'react';
import { Container, Header,Item,Text,Input ,Form, Button,Label} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import {AsyncStorage} from 'react-native';
import MaterialsIcon from 'react-native-vector-icons/MaterialIcons';
import { Kohana } from 'react-native-textinput-effects';
import { Actions } from 'react-native-router-flux';
import {base_url} from '../../config';
import RNRestart from 'react-native-restart'; // Import package from node modules

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
        RNRestart.Restart();
      }
    })
    
    ;
  }
  render() {
    return (
      <Container>
      
        <Grid >
        <Row>
          <Col>
          <Form>
            <Item floatingLabel>
              <Label>Phone Number</Label>
              <Input 
            keyboardType = 'numeric'
              onChangeText={(text)=>this.setState({number:text})}
              />
            </Item>
          </Form>
          </Col>
        </Row>
    
          <Row style={{padding:5}}>
          <Col >
              <Button warning success onPress={()=>{
                return Actions.signup();
               
              }
              }>
                <Text>Sign Up</Text>
              </Button>
            </Col>
            <Col></Col>
            <Col >
              <Button  success onPress={()=>{
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