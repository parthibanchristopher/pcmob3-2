import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { Entypo } from "@expo/vector-icons";
import * as SQLite from 'expo-sqlite';

export default function AddScreen({navigation}) {
    const [text, setText] = useState('')
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center"}}>
        <Text>Add your ToDo</Text>
        <TextInput 
            value={text} 
            onChangeText={(newText) => setText(newText)}
            style={styles.textInput}
        >
            
        </TextInput>
        <TouchableOpacity 
          onPress={() => navigation.navigate("Notes", {text})}
          style={[styles.button, styles.submitButton]}
        >
          <Text style={{ color: "orange "}}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => navigation.goBack()}
          style={[styles.button, styles.cancelButton]}
        >
          <Text style={{ color: "orange "}}>Cancel</Text>
        </TouchableOpacity>
      
        <Text style={{ marginTop: 40, color: "grey" }}>
            This is what you typed:
            </Text>
            <Text style={{ color: "#333", marginTop: 10 }}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    label: {
      fontWeight: "bold",
      fontSize: 24,
    },
    textInput: {
      margin: 20,
      borderWidth: 1,
      width: "80%",
      padding: 10,
      borderColor: "#ccc",
    },
    buttons: {
      flexDirection: "row",
    },
    button: {
      padding: 10,
      margin: 5,
    },
    buttonText: {
      fontWeight: "bold",
      color: "white",
    },
    submitButton: {
      backgroundColor: "orange",
    },
    cancelButton: {
      backgroundColor: "red",
    },
   });
   
   
   