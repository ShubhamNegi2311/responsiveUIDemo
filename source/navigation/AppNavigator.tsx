import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from './Types';
import HomeScreen from '../screens/homeScreen';

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={'HomeScreen'} component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
