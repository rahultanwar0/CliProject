import React from 'react';

import {
  Text,
  View,
  TextInput,
  Button,
  StyleSheet,
  Image,
  FlatList
  ,TouchableOpacity,
} from 'react-native';
import Login from './component/home';
import Header from './component/CustomHeader';
import MotherProfile from './component/MotherProfile';
import ChildProfile from './component/ChildProfile';
import ChildInfo from './component/ChildInfo';
import ChidInfo from './component/ChildInfo';
import TagCard from './component/TagCard'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [{name: 'Health',email: 'sohan@'},
      {name: 'Yoga',email: 'sohan@'},
      {name: 'Diet',email: 'sohan@'},
      {name: 'Nutrition',email: 'sohan@'},
      {name: 'abc1',email: 'sohan@'},
      {name: 'abc2',email: 'sohan@'},
      {name: 'abc3',email: 'sohan@'},
        
          
      ]
    };
  }
   
  render() {
    return (
      <View>
        <Header />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 10,
          }}>
          <MotherProfile motherName = {"Seema kumari"} age = {"15 year"}/>
          <View style={styles.verticleLine}></View>

          <ChildProfile ChildName = {"jatin"} age = {"20 year"}/>
        </View>
        <View
          style={{
            borderBottomColor: 'green',
            borderBottomWidth: 2,
            marginTop: 10,
          }}
        />
        <ChidInfo />
        <FlatList
         horizontal={true}
          data={this.state.data}
          renderItem={({item}) => (
            <TouchableOpacity
            onPress={() => {
              alert(item.name)
            }}
            style={styles.appButtonContainer}>
            <Text style={styles.appButtonText}>{item.name}</Text>
          </TouchableOpacity>          )}
        />
        <TagCard hint={" Arick Gold "} health={"Health and Tricks"}/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  verticleLine: {
    height: '100%',
    width: 2,
    margin: 2,

    backgroundColor: '#909090',
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: 'white',
    borderRadius: 40,
    marginTop: 20,
    marginBottom:20,
    paddingVertical: 7,
    margin: 5,
    paddingHorizontal: 10,
  },
  appButtonText: {
    fontSize: 13,
    color: 'black',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});

export default App;
