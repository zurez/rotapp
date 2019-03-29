'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,Modal,Text
} from 'react-native';

import ImageViewer from 'react-native-image-zoom-viewer';
import {List,ListItem} from 'native-base';

const images = [{
    url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460'


},
{
    url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460'


}
,
{
    url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460'


},
{
    url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460'


}

]


class Gallery extends Component {

	constructor(props) {
	  super(props);
	
	  this.state = {
	  	visible:false
	  };
	}
  render() {
    return (
    	<View>
    	   <List>
            <ListItem onPress={()=>this.setState({visible:true})}>
              <Text>Images of Blood Donation Drive</Text>
            </ListItem>
            </List>
	      <Modal visible={this.state.visible} transparent={true}
	      onRequestClose={()=>this.setState({visible:false})}
	      >
	                <ImageViewer imageUrls={images}/>
	       </Modal>
       </View>
    );
  }
}

const styles = StyleSheet.create({

});


export default Gallery;