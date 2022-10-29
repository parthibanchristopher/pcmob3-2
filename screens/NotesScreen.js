import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { Entypo } from "@expo/vector-icons";
import * as SQLite from 'expo-sqlite';

export default function NotesScreen({navigation, route}) {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        if (route.params?.text) {
            const newNote = {
                title: route.params.text,
                done: false,
                id: notes.length.toString(),
            };
            setNotes([...notes, newNote]);
        }
    },[route.params?.text])
  
    function addNote() {
      navigation.navigate("Add Note");
    }
  
    useEffect(() => {
      navigation.setOptions({
        headerRight: () => (
          <TouchableOpacity
          onPress={addNote}
          >
            <Entypo 
              name="new-message"
              size={24}
              color="black"
              style={{ marginRight: 20}}
            />
          </TouchableOpacity>
        )
      })
    })
  
    function renderItem({item}) {
      return (
        <View
          style={{
            padding: 10,
            paddingVertical: 20,
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
          }}
        >
          <Text style={{ fontSize: 16}}>{item.title}</Text>
        </View>
      )
    }
  
    return (
    <View style={styles.container}>
      <FlatList
        data={notes}
        renderItem={renderItem}
        style={{ width: '100%'}}
      />
    </View>)
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffc',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });