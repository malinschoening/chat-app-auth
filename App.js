import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Chat from './components/Chat';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProfileNavigation from './components/settings/ProfileNavigation';
import Login from './components/login/Login';
import LoginStackNavigator from './components/login/LoginStackNavigator';
import ChatDrawerNavigation from './components/ChatDrawerNavigation';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <LoginStackNavigator />
    //<ChatDrawerNavigation />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
