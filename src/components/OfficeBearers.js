import React, { Component } from 'react';
import {Image,Dimensions} from 'react-native';
import { Container, Header, Content, List, ListItem, Thumbnail,
 Text, Left, Body, Right, Button ,Card,CardItem,Icon} from 'native-base';


const {height,width}=Dimensions.get('window');
import {base_url} from '../../config';
import { material } from 'react-native-typography'
export default class OfficeBearers extends Component {

  constructor(props){
    super(props)
    this.state={
      bearers:[]
    }
  }
  componentDidMount(){
    const url=`${base_url}/bearers`;
    
    fetch(url).then(r=>r.json())
    .then((bearers)=>this.setState({bearers}))
    
  }

  render_list(){
    return this.state.bearers.map((e,i)=>{
      return(
        
        <Card key={i}>
        <CardItem cardBody>
           <Image source={{uri:e.image_url}}
            style={{ flex: 1,resizeMode:'cover',width: width,
 height: width,}}/>
         </CardItem>
         <CardItem header bordered>
           <Text style={{fontSize:20}}>{e.user.name || ''}</Text>
         </CardItem>

         <CardItem bordered>
           <Body>
             <Text>
               {e.title || ''}
               
             </Text>
             <Text>{e.quote}</Text>
           </Body>
         </CardItem>
         <CardItem  bordered>
         <Icon name='old-phone' type='Entypo'
         
         />
           <Text>{e.phone}</Text>
         
         </CardItem>
         <CardItem footer bordered>
           <Icon name='email' type='Entypo'/>
         <Text>{e.user.email}</Text>
         </CardItem>
       </Card>
      )
    })
  }
  render() {
    return (
      <Container>
      
        <Content padder>
          {this.render_list()}
         
        </Content>
      </Container>
    );
  }
}