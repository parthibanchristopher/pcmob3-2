import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { Entypo } from "@expo/vector-icons";
import * as SQLite from 'expo-sqlite';
import NotesScreen from './NotesScreen';

const InnerStack = createStackNavigator();

export default function NotesStack() {
  return (
    <InnerStack.Navigator>
      <InnerStack.Screen 
          name="Notes" 
          component={NotesScreen} 
          options={{
            headerTitle: "Notes App",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 30,
            },
            headerStyle: {
              height: 120,
              backgroundColor: "yellow",
              borderBottomColor: "#ccc",
              borderBottomWidth: 1,
            },
          }}
        />
    </InnerStack.Navigator>
  )
}