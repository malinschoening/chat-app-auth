import React, { useRef, useState, useEffect, useContext }from 'react'
import { Button, Pressable, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import Message from './Message';
import { AuthContext } from '../contexts/AuthContext';
import { API_ROOT_URL } from '../constants/general';
import { Ionicons } from '@expo/vector-icons'; 


const Chat = () => {

  const {accessToken} = useContext(AuthContext);

  const flatListRef = useRef();

  const [messages, setMessages] = useState({});

  const [newMessage, setNewMessage] = useState('');

    const fetchMessages = async () => {
        try {
            const response = await fetch(API_ROOT_URL + "messages", {
              headers: {
                'Authorization': `Bearer ${accessToken}`
              }
            });
            const data = await response.json();
            setMessages(data.data);

        } catch (error) {
            console.log(error);
        }
    }

    const publishMessage = async () => {
      try {
        const response = await fetch(API_ROOT_URL + "messages", {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(
            {
              "content": newMessage 
            }
         )
        });
        const data = await response.json();
        console.log(data);

      } catch (error) {
          console.log(error);
      }
    }


    const submit = () => {
      publishMessage();
      fetchMessages();
      setNewMessage('');
    }


    useEffect(() => {
        fetchMessages();
    }, []);

  return (
    <>
        <FlatList
          style={styles.container}
          ref={flatListRef}
          onContentSizeChange={() => flatListRef.current.scrollToEnd({ animated: true })}
          data={messages}
          renderItem={({item}) => <Message data={item} />}
        />
        <View style={styles.inputContainer}>
            <TextInput 
              style={styles.inputField}
              placeholder='Write a message..'
              value={newMessage}
              onChangeText={(text) => {
                  setNewMessage(text)
              }}
              />
            <Pressable 
            style={styles.sendButton}
            onPress={submit}>
            <Ionicons name="send-outline" size={24} color="black" />
            </Pressable>
        </View>
    </>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inputContainer: {
      flexDirection: 'row',
      marginBottom: 30,
      marginTop: 15,
      justifyContent: 'center',
    },
    inputField: {
      height: 40,
      marginHorizontal: 10,
      borderWidth: 1,
      padding: 10,
      borderRadius: 10,
      borderColor: '#a8a8a8',
      width: 350,
    },
    sendButton: {
      height: 40,
      marginTop: 5
    }
  });

export default Chat
