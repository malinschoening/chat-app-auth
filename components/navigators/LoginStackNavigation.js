import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../login/Login';
import Register from '../login/Register';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

const LoginStackNavigation = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
    </NavigationContainer>
  )
}

export default LoginStackNavigation
