import React from 'react';

import {Text, View, TextInput, Button,StyleSheet,Image} from 'react-native';
import Login from './component/home';
import  Header  from './component/CustomHeader';
import MotherProfile from './component/MotherProfile';
import ChildProfile from './component/ChildProfile';

class App extends React.Component {
  

  render() {
    return (
      <View>
        <Header/>

        <View style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop:10
        }}>
        <MotherProfile/>

        <ChildProfile/>



        </View>
        </View>
       
    );
  }
}

 


export default App;

