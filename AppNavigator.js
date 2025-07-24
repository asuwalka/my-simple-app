// AppNavigator.js

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SchemeFormScreen from './screens/SchemeFormScreen';
import SignupScreen from './screens/SignupScreen';
import HomeScreen from './screens/HomeScreen';
import BankDetailsScreen from './screens/BankDetailsScreen';
import FAQScreen from './screens/FAQScreen';
import ChatScreen from './screens/ChatScreen';
import DisplaySchemesScreen from './screens/DisplaySchemesScreen';
import ApplySchemesScreen from './screens/ApplySchemesScreen';
import LearningModulesScreen from './screens/LearningModulesScreen';
import NewsScreen from './screens/NewsScreen'; // ✅

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Signup">
      <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="ChatScreen" component={ChatScreen} />
      <Stack.Screen name="DisplaySchemesScreen" component={DisplaySchemesScreen} />
      <Stack.Screen name="ApplySchemesScreen" component={ApplySchemesScreen} />
      <Stack.Screen name="LearningModulesScreen" component={LearningModulesScreen} />
      <Stack.Screen name="NewsScreen" component={NewsScreen} />
      <Stack.Screen name="BankDetailsScreen" component={BankDetailsScreen} />
      <Stack.Screen name="FAQScreen" component={FAQScreen} />
      <Stack.Screen name="SchemeFormScreen" component={SchemeFormScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
