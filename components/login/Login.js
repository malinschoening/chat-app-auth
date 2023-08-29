import React from 'react'
import { Button, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.welcomeText}>Welcome</Text>
        <TextInput style={styles.input} placeholder="Username.."></TextInput>
        <TextInput style={styles.input} placeholder="Password.." secureTextEntry={true}></TextInput>
        <Pressable style={styles.button}><Text style={styles.buttonText}>Log in</Text></Pressable>
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
    link: {},
});

export default Login
