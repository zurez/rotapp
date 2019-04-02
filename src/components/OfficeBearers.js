import React, { Component } from 'react';
import {Image,Dimensions} from 'react-native';
import { Container, Header, Content, List, ListItem, Thumbnail,
 Text, Left, Body, Right, Button ,Card,CardItem,Icon} from 'native-base';


const {height,width}=Dimensions.get('window');

export default class OfficeBearers extends Component {
  render() {
    return (
      <Container>
      
        <Content padder>
          <Card>
           <CardItem cardBody>
              <Image source={{uri: 'data:image/jpeg;base64,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'}}
               style={{ flex: 1,resizeMode:'cover',width: width,
    height: width,}}/>
            </CardItem>
            <CardItem header bordered>
              <Text style={{fontSize:20}}>Shamil Khanna</Text>
            </CardItem>

            <CardItem bordered>
              <Body>
                <Text>
                  President Rotary Club
                  I flow with the wind
                </Text>
              </Body>
            </CardItem>
            <CardItem  bordered>
            <Icon name='old-phone' type='Entypo'
            
            />
              <Text>{`+91-989898989`}</Text>
            
            </CardItem>
            <CardItem footer bordered>
              <Icon name='email' type='Entypo'/>
            <Text>test@demo.com</Text>
            </CardItem>
          </Card>
         
        </Content>
      </Container>
    );
  }
}