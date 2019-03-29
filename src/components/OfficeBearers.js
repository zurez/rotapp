import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button ,Card,CardItem,Icon} from 'native-base';
export default class OfficeBearers extends Component {
  render() {
    return (
      <Container>
      
        <Content padder>
          <Card>
            <CardItem header bordered>
              <Text>Shamil Khanna</Text>
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
            <Icon name='old-phone' type='Entypo'/>
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