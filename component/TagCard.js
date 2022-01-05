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

const TagCard = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginLeft: 15,
      }}>
          
      <View>
      <Image source={require('../assets/helth.png')} style={styles.image} />

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
          Health and Tricks
        </Text>
        <Text
          style={{
            margin: 10,
          }}>
              Arick Gold 
         </Text>
        

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 120,
    height: 120,
     overflow: 'hidden',
    borderWidth: 3,
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

export default TagCard;
