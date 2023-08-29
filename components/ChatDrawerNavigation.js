import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Chat from './Chat';
import ProfileNavigation from './settings/ProfileNavigation';

const Drawer = createDrawerNavigator();

const ChatDrawerNavigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Chat">
        <Drawer.Screen name="Chat" component={Chat} />
        <Drawer.Screen name="My Profile" component={ProfileNavigation} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default ChatDrawerNavigation
