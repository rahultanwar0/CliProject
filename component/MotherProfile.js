import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';
import Constants from 'react';
import Feather from 'react-native-vector-icons/dist/Feather';

const MotherProfile = () => {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
      <View>
        <Image source={require('../assets/mother.png')} style={styles.image} />
      </View>
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'center',
        }}>
        <Text style={{color: 'black', fontSize: 20, padding: 5,paddingLeft: 10}}>
          Mother Name
        </Text>

        <Text
          style={{
            color: 'black',
            padding: 5,paddingLeft: 10
          }}>
          Mother Age
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 70,
    height: 70,
    borderRadius: 150 / 2,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: 'green',
  },
});

export default MotherProfile;
