import 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import LoginStackNavigation from './components/navigators/LoginStackNavigation';
import ChatDrawerNavigation from './components/navigators/ChatDrawerNavigation';
import { AuthProvider } from './components/contexts/AuthContext';
import RootNavigator from './components/navigators/RootNavigator';

export default function App() {
  return (
    <AuthProvider>
      <RootNavigator/>
    </AuthProvider>
  );
}
