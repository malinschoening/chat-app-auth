import React, { useContext, useState } from 'react'
import { Button, Text, View, StyleSheet, Pressable } from 'react-native'
import { AuthContext } from '../contexts/AuthContext'
import { API_ROOT_URL } from '../constants/general';
import { Ionicons } from '@expo/vector-icons'; 


const Message = ( {data} ) => {

  const {userID} = useContext(AuthContext);
  const {accessToken} = useContext(AuthContext);

  const [pressed, setPressed] = useState(false);
  const [deleted, setDeleted] = useState(false);

  const onLongPress = () => {
    setPressed(!pressed)
  }

  const handleTrashButton = () => {
    deleteMessage();
    setDeleted(true)
  }

  const deleteMessage = async () => {
    try {
      const response = await fetch(API_ROOT_URL + "messages/" + data._id, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      });

      const deleted = await response.json();
      console.log(deleted);

    } catch (error) {
        console.log(error);
    }

  }

  return (
   <><Pressable onLongPress={onLongPress} style={deleted ? styles.hidden : data.user == null ? styles.hidden : userID != data.user._id ? styles.containerLeft : styles.containerRight}>
        <Text style={styles.title}>{data.user == null ? 'No name' : data.user.username}</Text>
        <Text style={styles.content}>{data.content}</Text>
        <Text style={styles.date} >{data.date}</Text>
    </Pressable>
    <Pressable onPress={handleTrashButton} style={
                    deleted 
                      ? styles.hidden
                      : pressed 
                        ? userID != data.user._id  
                            ? styles.hidden : styles.trashButton 
                        : styles.hidden}><Ionicons name="trash-outline" size={24} color="black" />
    </Pressable>
    </>
  )
}

const styles = StyleSheet.create({
    containerRight: {
        alignSelf: 'flex-end',
        marginTop: 12,
        padding: 12,
        marginRight: 12,
        borderRadius: 10,
        color: '#666',
        backgroundColor: '#eaeaea',
        maxWidth: 300
      },
      containerLeft: {
        marginTop: 12,
        padding: 12,
        marginLeft: 12,
        borderRadius: 10,
        color: '#666',
        backgroundColor: '#bcebcb',
        maxWidth: 300
      },
      title: {
        color: '#20232a',
        textAlign: 'left',
        fontSize: 14,
        fontWeight: 'bold',
      },   
      content: {
        fontSize: 17,
        marginVertical: 10,
      },
      date: {
        textAlign: 'right',
        fontStyle: 'italic',
        fontSize: 12
      },
      hidden: {
        display: 'none',
      },
      trashButton: {
        alignSelf: 'flex-end',
        top: 0,
        right: 5,
        position: 'absolute',
      }
});

export default Message
