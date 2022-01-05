import React from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';
import Constants from 'react';
import Feather from 'react-native-vector-icons/dist/Feather';

const Header = () => {
  return (
    <View
      style={{
        marginTop: Constants.statusBarHeight,
        Height: 40,
        backgroundColor: '#900',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <Text style={{margin: 6, color: 'white', fontSize: 20}}>AKF India</Text>
      </View>

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() => {
            alert('Language');
          }}
          style={styles.appButtonContainer}>
          <Text style={styles.appButtonText}>Change language</Text>
        </TouchableOpacity>

        <Feather
          style={{margin: 6}}
          name="align-justify"
          size={30}
          color="#FFFF"
          onPress={() => {
            alert('Comming Soon');
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // ...
  appButtonContainer: {
    elevation: 8,
    backgroundColor: 'white',
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

export default Header;
