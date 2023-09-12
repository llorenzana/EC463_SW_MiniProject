import React, { useState, createContext, useContext, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, ActivityIndicator } from 'react-native';
import { onAuthStateChanged } from 'firebase/auth';

import { auth } from './config/firebase';

import Login from './screens/Login';
import Signup from './screens/Signup';
import Chat from './screens/Chat';
import Home from './screens/Home';
const Stack = createStackNavigator();

function ChatStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name='Signup' component={Signup} />
    </Stack.Navigator>
  );
}


function RootNavigator() {
  return (
    <NavigationContainer>
      <ChatStack /> 
    </NavigationContainer>
  );
}

export default function App() {
  return (
      <RootNavigator />
  );
}