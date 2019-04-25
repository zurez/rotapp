'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,Modal,Text
} from 'react-native';

import ImageViewer from 'react-native-image-zoom-viewer';
import {List,ListItem} from 'native-base';
import {base_url} from '../../config';
import { material } from 'react-native-typography'


class Gallery extends Component {

	constructor(props) {
	  super(props);
	
	  this.state = {
      visible:false,
      gallery:[],
      active:0
	  };
  }
  
  componentDidMount(){
    const url=`${base_url}/gallery`;
    
    fetch(url).then(r=>r.json())
    .then((gallery)=>this.setState({gallery}))
    
  }

  render_list(){
    return this.state.gallery.map((e,i)=>{
      return(
        
      <ListItem onPress={()=>this.setState({visible:true,active:i})}
      key={i}

      itemDivider
      >
  
      <Text style={material.title}>{e.title || 'Missing Title'}</Text>
      </ListItem>
      )
    })
  }


  render() {
    const image_urls=(this.state.gallery[this.state.active])?
    this.state.gallery[this.state.active].images.map((e)=>{
       return {url:e.title}}):[]
   
    return (
    	<View>
    	   <List>
            {this.render_list()}
          </List>
	      <Modal visible={this.state.visible} transparent={true}
	      onRequestClose={()=>this.setState({visible:false})}
	      >
	                <ImageViewer imageUrls={
                    image_urls
                    }/>
	       </Modal>
       </View>
    );
  }
}

const styles = StyleSheet.create({
  
});


export default Gallery;