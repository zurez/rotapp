import React,{Component} from 'react';
import {ImageBackground,Dimensions} from 'react-native';
import {Container,Content,Text} from 'native-base';
import {Grid,Row,Col} from 'react-native-easy-grid';
import SvgUri from 'react-native-svg-uri';
import { material,human ,systemWeights,sanFranciscoWeights,robotoWeights} from 'react-native-typography';

const bg=``;
let {height, width} = Dimensions.get('window');
export default class HomeComponent extends Component{

	constructor(props) {
	  super(props);
	
	  this.state = {};
	}

	render(){
		return(
<Container >
<Content>
<ImageBackground style={{width, height}} source={{uri:'https://www.rotary.org/sites/all/themes/rotary_rotaryorg/images/home/AmbientWebDemo,w_1400.jpg'}} blurRadius={3}>
			
			
			
			<Grid>
<Row style={{height: 200}}></Row>
<Row style={{height: 100}}>
<Col style={{ flexDirection: 'row',textAlign:'center',justifyContent:'center' }}>
<Text style={[rt]}>Rotary</Text>
 <SvgUri
    width="100"
    height="100"
    style={{textAlign:'center'}}
    source={{
      uri: 'https://www.rotary.org/sites/all/themes/rotary_rotaryorg/images/rotary-logo-white.svg',
    }}
  />
</Col>
</Row>
			  <Row style={{height:100}}>
<Col>
	<Text style={[yt]}>People of Action</Text>
</Col>

			  </Row>
<Row>
<Col>
<Text style={[it]}>

    Rotary is where neighbors, friends, and problem-solvers share ideas, join leaders, and take action to create lasting change.
  
</Text>
</Col>
</Row>	
			</Grid>
			
			
</ImageBackground>
</Content>
</Container>
		)
	}
}
const rt={
color:'#fff',
textAlign:'justify',
fontSize:50,
marginRight:10,
...systemWeights.bold
}
const yt={
color:'#ffc000',
fontSize:50,
...systemWeights.thin,
textAlign: 'center'
}
const it={
color:'#fff',
textAlign:'justify',
textAlignVertical: "center",textAlign: "center",
fontSize:22,
...systemWeights.light
}
