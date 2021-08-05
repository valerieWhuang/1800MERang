import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View, Text, Switch,Image,Button, TouchableOpacity} from "react-native";
import { height } from "styled-system";
import {Linking,Platform} from 'react-native'


export default function Contact(props) {
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const form = {isFavourite: false}
  const [isEnabled, setIsEnabled] = useState(false);
 
  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState)
  }

  const dialCall = (number) => {               
    console.log('dailing',number)
    let phoneNumber = '';
    if (Platform.OS === 'android') { phoneNumber = `tel:${number}`; }
    else {phoneNumber = `telprompt:${number}`; }
    Linking.openURL(phoneNumber);
 };

  return (
    <View style={styles.container}>
      <View>
        <Text>Favorite</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
          style={{ transform: [{ scaleX: .8 }, { scaleY: .8 }] }}
        />
      </View>
      <Text style={styles.name}>{props.text.toUpperCase()}</Text>
      <Text style={styles.number}>{props.number}</Text>      
      
      <Button
        title='Call'        
<<<<<<< HEAD
        onPress={()=>Linking.openURL(`telprompt:${props.number}`)}
      />
=======
        // style={styles.phone}
        // source={require("../assets/phone_icon.png")}
        onPress={() => dialCall(props.number)}
        /> 
      
      {/* <TouchableOpacity style={styles.btn} >
        <View style={styles.absoluteView}>
            <Text>title</Text>
        </View>
        <Image 
        source={require("../assets/phone_icon.png")}  
        style={styles.phone}
        onPress={() => dialCall(props.number)}
        />
    </TouchableOpacity> */}

>>>>>>> 57dd654d721dc4674e9abbbad4ef8a4e54da78ec
      
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "space-between",
      flexDirection:'row', 
      marginTop: 50,     
      padding: 10,
    },
    name: {      
      color: '#FF0000',
      
    },
    number: {      
      color:'#0000FF'
    },
    callButton: {
      width:"50%"
    },
    phone: {
      height: 30,
      width: 30,
      paddingBottom: 20,    
    },
    absoluteView: {
      flex: 1,
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'transparent'
    },
    btn: {
      
    }

  });
