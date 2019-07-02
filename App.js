/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,AsyncStorage} from 'react-native';
import {Router,Scene,Stack,Drawer,Lightbox} from 'react-native-router-flux';
import {LandingComponent} from './src/LandingComponent';
import SideBar from './src/components/DrawerContent';
import Gallery from './src/components/Gallery';
import OfficeBearers from './src/components/OfficeBearers';
import EventDetail from './src/components/EventDetail';
import HomeComponent from './src/HomeComponent';
import Profile from './src/components/Profile';
import {Icon} from 'native-base';
import NewsLetter from './src/components/NewsLetter';
import PdfViewer from './src/components/Pdf';
import firebase from 'react-native-firebase';
import Message from './src/components/Message';
import Login from './src/components/login';
import SignUp from './src/components/signup';
import TimelineView from './src/components/Timeline';

export default class App extends Component{


  async createChannel(){
    const channel = new firebase.notifications.Android.Channel('test-channel', 'Test Channel', firebase.notifications.Android.Importance.Max)
    .setDescription('My apps test channel');
    try{

      await firebase.notifications().android.createChannel(channel);

    }
    catch(error){
      alert(error.message)
    }
    
  }


  async showNotif(data){



          const notification = new firebase.notifications.Notification()
        .setNotificationId('notificationId')
        .setTitle(data.title)
        .setBody(data.body)
        .setData({
          key1: 'value1',
          key2: 'value2',
        });
      notification.android.setBigPicture('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_iU8Yzjy2pQ4R-7uBQBJtxVfqG5F91V7jqXpbgcdmztDB92oEaQ')
      notification.android.setPriority(firebase.notifications.Android.Priority.High) /// set to High
      notification.android.setChannelId("test-channel")  ///for android 8.0 and above
      try{
        await firebase.notifications().displayNotification(notification)
        alert('notification')
      }
      catch(error){
        console.log({error})
        alert(error.message)
      }
      


  }



  async getToken(){
    const fcmToken = await firebase.messaging().getToken();
 


    if (fcmToken) {

        console.log({fcmToken})
            firebase.messaging().subscribeToTopic('common');
        return fcmToken;
    } else {
        alert('No token')
    }
  }


  componentDidMount() {

    this.getToken()
    
    this.createChannel()
    this.messageListener = firebase.messaging().onMessage((message) => {
      alert('Received a message')
        this.showNotif(message)
    });


    
    firebase.messaging().hasPermission()
    .then(enabled => {
    if (enabled) {
      
        
    } else {
      // user doesn't have permission
      firebase.messaging().requestPermission()
      .then(() => {
        

      })
      .catch(error => {
        alert('Please allow notifications.')  
      });
    } 
    });
  }

  render() {
    return (
      <Router navigationBarStyle={{ backgroundColor: "#1e3c64"}}
      titleStyle={{color:'white'}}
      >

         
        
        <Drawer
              hideNavBar
              key="drawer"
              
              drawerIcon={<Icon name='md-menu' type='Ionicons' 
              style={{color:'white'}}/>}
              contentComponent={SideBar}
              drawerWidth={300}
           >
      
           <Stack key="root">
               <Scene key="home" component={HomeComponent} title='Home' initial/>
                <Scene  key='events' component={LandingComponent}  title="Events"/>
                <Scene  key='gallery' component={Gallery} title="Gallery"/>
                <Scene key='office_bearers' component={OfficeBearers} title='Office Bearers'/>
         
                <Scene key='event_detail' component={EventDetail} title='Details'/>

                <Scene key='profile' component={Profile} title='Profile'/>

                <Scene key='newsletter' component={NewsLetter} title='NewsLetter'/>

                <Scene key='pdf' component={PdfViewer} title='NewsLetter'/>
                <Scene key='message' component={Message} title='Messages'/>
                
                <Scene key="login" component={Login}  />
                <Scene key="signup" component={SignUp}/>
                <Scene key="timeline" component={TimelineView} />
                  </Stack>
                
                
        </Drawer>
      
              
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
