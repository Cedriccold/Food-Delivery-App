import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MenuScreen } from '../screens/MenuScreen';
import { CartScreen } from '../screens/CartScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { Form1Screen } from '../screens/Form1Screen';
import { Form2Screen } from '../screens/Form2Screen';
import { Form3Screen } from '../screens/Form3Screen';

const Stack = createStackNavigator();

export const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="MenuScreen">
      <Stack.Screen name="MenuScreen" component={MenuScreen} />
      <Stack.Screen name="CartScreen" component={CartScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="Form1Screen" component={Form1Screen} />
      <Stack.Screen name="Form2Screen" component={Form2Screen} />
      <Stack.Screen name="Form3Screen" component={Form3Screen} />
    </Stack.Navigator>
  );
};
