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

const ChidInfo = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginLeft: 15,
      }}>
          
      <View>
        <Text
          style={{
            marginTop: 10,
            marginLeft: 10,
          }}>
          Date Of Birth
        </Text>
        <Text
          style={{
            margin: 10,
          }}>
          11 jan 2021
        </Text>
        <Text
          style={{
            color: 'green',
            fontSize: 20,
            marginTop: 10,
            marginLeft: 10,
          }}>
          1 year 22 days
        </Text>
      </View>
      <View
      style={{
          marginLeft: 30
      }}>
      <Text
          style={{
            marginTop: 10,
            marginLeft: 10,
          }}>
          Child Hight : 71.4-82.7 CM
        </Text>
        <Text
          style={{
            margin: 10,
          }}>
          Child Wight:7.7 -12.2Kg
        </Text>
        <TouchableOpacity
          onPress={() => {
            alert('check vaccine status');
          }}
          style={styles.appButtonContainer}>
          <Text style={styles.appButtonText}>Check vaccine status</Text>
        </TouchableOpacity>

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
    borderColor: 'red',
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: 'green',
    borderRadius: 40,
    marginTop: 10,
    paddingVertical: 7,
    margin: 5,
    paddingHorizontal: 10,
  },
  appButtonText: {
    fontSize: 13,
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});

export default ChidInfo;
