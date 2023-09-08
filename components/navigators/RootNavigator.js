import 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import LoginStackNavigation from './LoginStackNavigation';
import ChatDrawerNavigation from './ChatDrawerNavigation';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

export default function RootNavigator() {

    const {accessToken} = useContext(AuthContext);

  return (
    <>
      {
        accessToken !== null
          ? <ChatDrawerNavigation />
          : <LoginStackNavigation />
      }
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
