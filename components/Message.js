import React from 'react'
import { Button, Text, View, StyleSheet } from 'react-native'

const Message = ( {side} ) => {



  return (
    <View style={side ? styles.containerRight : styles.containerLeft}>
        <Text style={styles.title}>JuliaKloss1337</Text>
        <Text style={styles.content}>This is a message bitch</Text>
        <Text style={styles.date} >2010-28-03</Text>
    </View>
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
        fontSize: 12,
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
      }
});

export default Message
