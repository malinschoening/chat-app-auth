import React, { useRef }from 'react'
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import Message from './Message';

const Chat = () => {

  const scrollViewRef = useRef();

  return (
    <ScrollView 
    style={styles.container}
    ref={scrollViewRef}
    onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
    >
        <View style={styles.messageContainer}>
            <Message side={false}/>
            <Message side={true}/>
            <Message side={true}/>
            <Message side={false}/>
            <Message side={false}/>
            <Message side={false}/>
            <Message side={true}/>
            <Message side={true}/>
        </View>
        <View style={styles.inputContainer}>
            <TextInput
            placeholder='Write a message..'/>
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    messageContainer: {
    },
    inputContainer: {
      height: 40,
      marginHorizontal: 10,
      marginVertical: 40,
      borderWidth: 1,
      padding: 10,
      borderRadius: 10,
      borderColor: '#a8a8a8',
    },
  });

export default Chat
