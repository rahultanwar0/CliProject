import React from 'react';

import {Text, View, TextInput, Button,StyleSheet} from 'react-native';
import Login from './component/home';

class Appp extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      password: '',
      address: '',
    };
  }

  sumbit() {
    alert(this.state.name+this.state.password+this.state.address);
  }

  render() {
    return (
      <View>
        <TextInput
          placeholder="Enter Name"
          style={styles.textBox}
          onChangeText={text => {
            this.setState({name: text});
          }}></TextInput>
        <TextInput
          placeholder="Enter Password"
          style={styles.textBox}
          secureTextEntry={true}

          onChangeText={text => {
            this.setState({password: text});
          }}></TextInput>
        <TextInput
          placeholder="Enter Address"
          style={styles.textBox}

          onChangeText={text => {
            this.setState({address: text});
          }}></TextInput>

        <Button
 

          title="Login"
          onPress={() => {
            this.sumbit();
          }}
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  textBox: {
    borderColor: 'skyblue',
    borderWidth: 2,
    padding: 10,
    marginHorizontal: 20,
    marginVertical: 25,
  },
});


export default Appp;

