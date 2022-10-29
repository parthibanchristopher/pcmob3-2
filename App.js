import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { Entypo } from "@expo/vector-icons";
import * as SQLite from 'expo-sqlite';
import NotesStack from './screens/NotesStack';
import AddScreen from './screens/AddScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ presentation: "modal", headerShown: false }}
      >
        <Stack.Screen 
          name="Notes Stack" 
          component={NotesStack} 
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Add Note" component={AddScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffc',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
