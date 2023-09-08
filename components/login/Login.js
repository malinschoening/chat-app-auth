import React, { useContext, useState } from 'react'
import { Button, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { AuthContext } from '../contexts/AuthContext';

const Login = ({navigation}) => {

  const {handleLogin} = useContext(AuthContext);
  const {setUserDetails} = useContext(AuthContext);
  const {ErrorMessage} = useContext(AuthContext);

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const login = () => {
    setUserDetails({
      "username": username,
      "password": password
    });

    handleLogin();
  }

  return (
    <View style={styles.container}>
        <Text style={styles.welcomeText}>Welcome</Text>
        <TextInput 
       value={username}
       onChangeText={(text) => {
         setUsername(text)
       }}
       style={styles.input} 
       placeholder='Username..' 
       autoCapitalize='none'
       />
        <TextInput value={password}
       onChangeText={(text) => {
         setPassword(text)
       }}
       style={styles.input} 
       placeholder='Password..' 
       autoCapitalize='none'
       secureTextEntry={true}
       />
        <Text style={styles.errorMessage}>{ErrorMessage}</Text>
        <Pressable style={styles.button} onPress={login}><Text style={styles.buttonText}>Log in</Text></Pressable>
        <Button
          title="You don't have an account? Register here"
          onPress={() => navigation.push('Register')}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    welcomeText: {
        fontSize: 40,
        marginBottom: 30,
    },
    input: {
      height: 40,
      width: 300,
      marginHorizontal: 10,
      marginVertical: 10,
      borderWidth: 1,
      padding: 20,
      borderRadius: 10,
      borderColor: '#a8a8a8',
    },
    button: {
    marginTop: 50,
    backgroundColor: '#bcebcb',
    padding: 10,
    width: 300,
    borderRadius: 10,
    marginBottom: 20,
    },
    buttonText: {
        fontSize: 30,
    textAlign: 'center',
    color: 'white'
    },
    errorMessage: {
      color: 'red',
    }
});

export default Login
