import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button, Text, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 
import Profile from './Profile';
import Camera from './Camera';


const Tab = createBottomTabNavigator();

export default function ProfileNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Profile" component={Profile} options={{
        tabBarIcon: ({color, size}) => <Ionicons name="person-outline" size={24} color="black" />,
        title: 'Profile',
        headerShown: false
      }}/>
      <Tab.Screen name="Camera" component={Camera} options={{
        tabBarIcon: ({color, size}) => <Ionicons name="camera-outline" size={24} color="black" />,
        title: 'Camera',
        headerShown: false
      }}/>
    </Tab.Navigator> 
  );
}