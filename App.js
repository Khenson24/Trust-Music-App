import React from 'react';
import { Text, View , WebView, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';
import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';
import { Input } from 'react-native-elements'

class HomeScreen extends React.Component {

  render() {
    return (
      <View style={styles.page}>
        <Text>This is the home page. 
          This will act as a feed for new music and recommended music to show to the user. Also will show tickets to events.</Text>
      </View>
    );
  }
}

class LTScreen extends React.Component {

// This is a link to a website called LinkTree which is a music distribution
// website which allows user of this app to distribute their music on to 
// other streaming platforms.

  render() {
    return (
      <WebView
        source={{uri: 'https://linktr.ee'}}
        style={{marginTop: 20}}
      />
    );
  }
}

class YMScreen extends React.Component {

  render() {
    return (

      <View style={{justifyContent: 'center', alignContent: 'center'}}>
        <Text>This will be the music page. This acts as a hub for all the tracks that the user has a history of listening to or pressing the like option on. </Text>
      </View>

    );
  }
}

class ProfileScreen extends React.Component {

  render() {
    return (
      <View style={styles.signup}>
        <Input placeholder='Name'/>
        <Input placeholder='Email'/>
        <Input placeholder='Password'/>
        <Input placeholder='Confirm Password'/>
        <TouchableOpacity style={styles.button}><Text>Sumbit</Text></TouchableOpacity>
      </View>
    );
    }
}

const TabNavigator = createMaterialTopTabNavigator({
  Home: HomeScreen,
  LinkTree: LTScreen,
  MyMusic: YMScreen,
  Profile: ProfileScreen,
},{
  tabBarOptions: {
      activeTintColor: "silver",      
      inactiveTintColor: "gray",  
      style: {
        top: 20,               
       paddingVertical: 10,        
       backgroundColor: "black",
       border: 'blue'  
      },      
      labelStyle: {        
       fontSize: 12,        
       lineHeight: 16, 
       textDecorationColor: 'white'       
      },
      tabBarPosition: "bottom",
      animationEnabled: true,
      swipeEnabled: true,
      unmountInactiveRoutes: true
    }
  });
  const styles = StyleSheet.create({
    button: {
      backgroundColor: 'silver',
      borderColor: 'white',
      borderWidth: 1,
      borderRadius: 12,
      fontSize: 24,
      fontWeight: 'bold',
      overflow: 'hidden',
      padding: 12,
      textAlign:'center',
      textShadowColor: 'white'    
    },
    signup: {
      flex: 3, 
      justifyContent: 'space-evenly', 
      alignItems: 'flex-start'
    },
    page: {
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center' 
    }
  })

export default createAppContainer(TabNavigator);