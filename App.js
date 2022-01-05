import React from 'react';

import {Text, View, TextInput, Button, StyleSheet, Image} from 'react-native';
import Login from './component/home';
import Header from './component/CustomHeader';
import MotherProfile from './component/MotherProfile';
import ChildProfile from './component/ChildProfile';
import ChildInfo from './component/ChildInfo';
import ChidInfo from './component/ChildInfo';

class App extends React.Component {
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
          <MotherProfile />
          <View style={styles.verticleLine}></View>

          <ChildProfile />
        </View>
        <View
          style={{
            borderBottomColor: 'green',
            borderBottomWidth: 2,
            marginTop: 10,
          }}
        />
        <ChidInfo />
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
});

export default App;
