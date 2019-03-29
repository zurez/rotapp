/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Router,Scene,Stack,Drawer} from 'react-native-router-flux';
import {LandingComponent} from './src/LandingComponent';
import SideBar from './src/components/DrawerContent';
import Gallery from './src/components/Gallery';
import OfficeBearers from './src/components/OfficeBearers';
import EventDetail from './src/components/EventDetail';
import HomeComponent from './src/HomeComponent';

export default class App extends Component{
  render() {
    return (
      <Router>

         <Stack key="root">
        
        <Drawer
              hideNavBar
              key="drawer"
              
             
              contentComponent={SideBar}
              drawerWidth={300}
           >
               <Scene key="home" component={HomeComponent} title='Home' initial/>
                <Scene  key='events' component={LandingComponent}  title="Events"/>
                <Scene  key='gallery' component={Gallery} title="Gallery"/>
                <Scene key='office_bearers' component={OfficeBearers} title='Office Bearers'/>
         
                <Scene key='event_detail' component={EventDetail} title='Details'/>
       
        </Drawer>
       </Stack>
              
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
