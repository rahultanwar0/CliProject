import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
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
        <Text style={{margin: 6, color: 'white', fontSize: 20}}>AKG India</Text>
      </View>

      <View>
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

export default Header;
