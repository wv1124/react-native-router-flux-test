/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Test1 from './Test1';
import Test2 from './Test2';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu'
});

export default class App extends Component {
  state = {
    router: 'test1'
  };

  render() {
    return this.renderSimple();
  }

  renderSimple = () => {
    let { router } = this.state;
    __DEV__ && console.log('App:render', router);
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        {router === 'test1' ? (
          <Test1 onChange={this.onChange} />
        ) : (
          <Test2 onChange={this.onChange} />
        )}
      </View>
    );
  };

  onChange = val => {
    __DEV__ && console.log('App', val);
    this.setState({
      router: val
    });
  };

  _goNext = val => {
    Actions[val]();
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});
