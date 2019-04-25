'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,Dimensions,
} from 'react-native';

import {Content, Container} from 'native-base';
import Pdf from 'react-native-pdf';


class PdfViewer extends Component {

    constructor(props){
        super(props);
        console.log(this.props)
        this.state={
            source:this.props.source
        }
    }
  render() {
      console.log(this.state.source)
        const source = {uri:this.props.source,cache:true};
       

        return (
            <View style={styles.container}>
                <Pdf
                    source={source}
                    onLoadComplete={(numberOfPages,filePath)=>{
                        console.log(`number of pages: ${numberOfPages}`);
                    }}
                    onPageChanged={(page,numberOfPages)=>{
                        console.log(`current page: ${page}`);
                    }}
                    onError={(error)=>{
                        console.log(error);
                    }}
                    style={styles.pdf}/>
            </View>
        )
  }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 25,
    },
    pdf: {
        flex:1,
        width:Dimensions.get('window').width,
    }
});


export default PdfViewer;