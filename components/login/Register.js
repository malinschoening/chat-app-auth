import React from 'react'
import { Button, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

const Register = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.welcomeText}>Register new account</Text>
        <TextInput style={styles.input} placeholder="Choose your username.."></TextInput>
        <TextInput style={styles.input} placeholder="Choose your password.." secureTextEntry={true}></TextInput>
        <TextInput style={styles.input} placeholder="Repeat your password.." secureTextEntry={true}></TextInput>
        <Pressable style={styles.button}><Text style={styles.buttonText}>Register me</Text></Pressable>
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
});

export default Register