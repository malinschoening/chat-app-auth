import React, { useState, useEffect, useContext } from 'react'
import { Button, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { API_ROOT_URL } from '../constants/general';
import { AuthContext } from '../contexts/AuthContext';

const Register = ({navigation}) => {

  const {handleRegister} = useContext(AuthContext);
  const {setUserDetails} = useContext(AuthContext);
  const {ErrorMessage} = useContext(AuthContext);

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const register = () => {
    setUserDetails({
      "username": username,
      "password": password
    });

    handleRegister();
  }

  return (
    <View style={styles.container}>
        <Text style={styles.welcomeText}>Register new account</Text>
        <TextInput 
        value={username}
        onChangeText={(text) => {
          setUsername(text)
        }}
        style={styles.input} 
        placeholder='Choose a username..' 
        autoCapitalize='none'
        />
        <Text style={styles.errorMessage}>{ErrorMessage}</Text>
        <TextInput 
        style={styles.input} 
        value={password}
        onChangeText={(text) => {
          setPassword(text)
        }}
        autoCapitalize='none'
        placeholder="Choose your password.."
        secureTextEntry={true}
        ></TextInput>
        <Pressable 
        style={styles.button}
        onPress={register}><Text style={styles.buttonText}>Register me</Text></Pressable>
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
        fontSize: 30,
        marginBottom: 30,
    },
    input: {
      color: 'black',
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
    backgroundColor: '#eaeaea',
    padding: 10,
    width: 300,
    borderRadius: 10,
    marginBottom: 20,
    },
    buttonText: {
    fontSize: 30,
    textAlign: 'center',
    color: 'grey'
    },
    errorMessage: {
      color: 'red',
    }
});

export default Register