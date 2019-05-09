import React, { Component } from 'react';
import { View, Text,WebView } from 'react-native';
import { Actions} from 'react-native-router-flux';
import {base_url} from '../../config';
export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      load:false
    };
  }
  onNavigationStateChange=()=>{
   
    
    if(this.state.load){
      return Actions.reset('login');
    }
     
  }
  render() {
    return (
        <WebView
        source={{uri:base_url}}
        onNavigationStateChange={this.onNavigationStateChange}
        onLoad={()=>this.setState({load:true})}
      />
    );
  }
}
