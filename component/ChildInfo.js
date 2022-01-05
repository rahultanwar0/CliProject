import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  Image,
  Linking
} from 'react-native';
import Constants from 'react';
import Feather from 'react-native-vector-icons/dist/Feather';

const ChidInfo = (props) => {
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
          {props.dateOfBirth}
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
          {props.childHight}
        </Text>
        <Text
          style={{
            margin: 10,
          }}>
          {props.childeWight}
        </Text>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL('https://reactnativecode.com');
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
