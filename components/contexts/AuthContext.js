import React, { createContext, useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_ROOT_URL } from '../constants/general';
import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';

export const AuthContext = createContext()


export const AuthProvider = ({children}) => {
  const [accessToken, setAccessToken] = useState(null);
  const [userID, setUserID] = useState(null);

  const [userDetails, setUserDetails] = useState({
    "username": '',
    "password": ''
  });

  const [ErrorMessage, setErrorMessage] = useState('');

  const handleRegister = async () => {
    console.log('handleRegister')

    try {
      const response = await fetch(API_ROOT_URL + "auth/register", {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
          userDetails
       )
      })

      const data = await response.json();

      if(data.status === 200){
        console.log(data.message)
      } else {
        console.log(userDetails)
        setErrorMessage(data.message)
      }
    } catch(error) {
      console.log(error)
    }
  }
    
  const handleLogin = async () => {
    console.log('handleLogin')

    try {
      const response = await fetch(API_ROOT_URL + "auth/token", {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
          userDetails
       )
      })

      const data = await response.json();

      if(data.status === 200){
        console.log(accessToken)
        await AsyncStorage.setItem('accessToken', data.data.accessToken)
        await AsyncStorage.setItem('userID', data.data._id)
        setAccessToken(data.data.accessToken)
        setUserID(data.data._id)
        console.log(accessToken + 'accesstoken')
        console.log(userID + 'userid')
      } else {
        console.log(userDetails)
        setErrorMessage(data.message)
      }
    } catch(error) {
      console.log(error)
    }
  }

  const handleLogout = async () => {
    console.log('handleLogout')
    try {
      await AsyncStorage.removeItem('accessToken')
      await AsyncStorage.removeItem('userID')
      setUserID(null)
      setAccessToken(null)
      console.log(userID + ' logged out')
      console.log(accessToken + ' logged out')
    } catch(error) {
      console.log(error)
    }
  }

  const handleDeleteUserPermanently = async () => {
    console.log('deleted user')
    try {
      const response = await fetch(API_ROOT_URL + "users", {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${accessToken}`
        },
      });

      const data = await response.json();
      console.log(data);

      if (data.status === 200) {
        console.log('deleted user');
        await AsyncStorage.clear();
        setUserID(null)
        setAccessToken(null)
        
      } else {
        console.log('it didnt work');
      }

    } catch (error) {
        console.log(error);
    }
  }

  const isLoggedIn = async () => {
    console.log('isLoggedIn')

    try {
      const token = await AsyncStorage.getItem('accessToken')
      setAccessToken(token)
      console.log(accessToken + ' is logged in')
      const ID = await AsyncStorage.getItem('userID')
      setUserID(ID)
      console.log(ID + ' is logged in')

    } catch(error) {
      console.log(error)
    }
  }

  useEffect(() => {
    isLoggedIn();
  }, [])

  return (
    <AuthContext.Provider value={{
      accessToken,
      setUserDetails,
      ErrorMessage,
      userID,
      handleLogin, 
      handleRegister,
      handleLogout,
      handleDeleteUserPermanently}}>
      {children}
    </AuthContext.Provider>
  )

}