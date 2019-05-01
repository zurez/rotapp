import React, { Component } from 'react';
import { View, Text,WebView } from 'react-native';
import { Actions} from 'react-native-router-flux';

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  onNavigationStateChange=()=>{
      return Actions.reset('login');
  }
  render() {
    return (
        <WebView
        source={{uri: 'http://192.168.0.245:8000/'}}
        onNavigationStateChange={this.onNavigationStateChange}
      />
    );
  }
}
