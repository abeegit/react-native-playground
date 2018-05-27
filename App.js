import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createBottomTabNavigator  } from 'react-navigation';

import HomeScreen from './app/components/Home';
import AboutScreen from './app/components/About';
import ContactScreen from './app/components/Contact';
import SettingsScreen from './app/components/Settings';

const MainNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  About: {
    screen: AboutScreen
  },
  Contact: {
    screen: ContactScreen
  }
});

export default createBottomTabNavigator({
  Home: MainNavigator,
  Settings: SettingsScreen
});