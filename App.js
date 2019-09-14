/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Test1 from './Test1';
import Test2 from './Test2';
import Test3 from './Test3';


const AppNavigator = createAppContainer(
  createStackNavigator(
    {
      Test1: {
        path: 'Test1',
        screen: Test1
      },
      Test2: { path: 'Test2', screen: Test2 },
      Test3: { path: 'Test3', screen: Test3 }
    },
    {
      headerMode: 'none',
      initialRouteName: 'Test1'
    }
  )
);

export default class App extends Component {
  render() {
    return <AppNavigator />;
  }
  _goNext = val => {};
}
