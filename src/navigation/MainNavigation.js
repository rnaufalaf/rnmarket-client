import {OrganifyContext} from '../context/OrganifyProvider';
import {AuthContext} from '../context/auth';
import AsyncStorage from '@react-native-community/async-storage';
import {createStackNavigator} from '@react-navigation/stack';
import React, { useContext, useState, useEffect } from 'react';
import LoginScreen from '../screens/authentication/LoginScreen';

const Main = createStackNavigator();

export default function MainNavigation() {
  const organify = useContext(OrganifyContext);
  const {user, logout} = useContext(AuthContext);
  const [isLogin, setLogin] = useState(null);

  async function loginCheck() {
    if (await AsyncStorage.getItem('jwtToken')) {
      setLogin(await AsyncStorage.getItem('jwtToken'));
      organify.setUser(jwtDecode(await AsyncStorage.getItem('jwtToken')));
    } else {
      setLogin(null);
    }
  }

  useEffect(() => {
    loginCheck();
    return () => {
      console.log('This will be logged on unmount');
    };
  }, [isLogin, user, logout]);

  return (
    <>
      <Main.Navigator
        screenOptions={{
          gestureEnabled: false,
        }}>
        <Main.Screen
          name="Login"
          component={LoginScreen}
          options={{
            title: '',
          }}
        />
      </Main.Navigator>
    </>
  );
}
