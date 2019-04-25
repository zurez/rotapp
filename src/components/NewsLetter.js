'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';
import {Container, Content,List,ListItem,Text} from 'native-base';
import {base_url} from '../../config';
import {Actions} from 'react-native-router-flux';
import { material } from 'react-native-typography'
class NewsLetter extends Component {

  constructor(props) {
	  super(props);
	
	  this.state = {
    newsletter:[]
	  };
  }
  componentDidMount(){
    const url=`${base_url}/newsletter`;
    
    fetch(url).then(r=>r.json())
    .then((newsletter)=>this.setState({newsletter}))
    
  }

  render_list(){
    return this.state.newsletter.map((e,i)=>{
     
      return(
        
      <ListItem onPress={()=> Actions.pdf({source:e.url})}
      key={i}

      itemDivider
      >
  
      <Text style={material.title}>{e.title || 'Missing Title'}</Text>
      </ListItem>
      )
    })
  }

  render() {
    return (
      <Container>
      	<Content>

 {this.render_list()}
      	</Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({

});


export default NewsLetter;